import re
import os

def remove_framer_motion_from_file(file_path):
    """Remove all Framer Motion animations from a TypeScript/React file."""

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. Remove framer-motion imports
    content = re.sub(r'import\s+\{[^}]*\}\s+from\s+[\'"]framer-motion[\'"];?\n?', '', content)
    content = re.sub(r'import\s+\*\s+as\s+\w+\s+from\s+[\'"]framer-motion[\'"];?\n?', '', content)

    # 2. Remove useInView import specifically
    content = re.sub(r',?\s*useInView\s*,?', '', content)

    # 3. Replace motion.* components with regular HTML elements
    # motion.div -> div
    content = re.sub(r'<motion\.(\w+)', r'<\1', content)
    content = re.sub(r'</motion\.(\w+)>', r'</\1>', content)

    # 4. Remove animation props from components (multi-line aware)
    animation_props = [
        'initial', 'animate', 'whileHover', 'whileInView', 'whileTap',
        'variants', 'transition', 'viewport', 'onHoverStart', 'onHoverEnd',
        'exit', 'custom', 'style', 'onMouseMove', 'onHoverStart', 'onHoverEnd'
    ]

    for prop in animation_props:
        # Remove single-line props
        content = re.sub(rf'\s+{prop}=\{{[^}}]*\}}', '', content)
        # Remove multi-line props
        content = re.sub(rf'\s+{prop}=\{{\s*\n[\s\S]*?\n\s*\}}', '', content, flags=re.MULTILINE)

    # 5. Remove AnimatePresence wrapper
    content = re.sub(r'<AnimatePresence[^>]*>', '', content)
    content = re.sub(r'</AnimatePresence>', '', content)

    # 6. Remove Framer Motion hooks
    hooks_to_remove = [
        'useScroll', 'useTransform', 'useMotionValue', 'useSpring',
        'useAnimation', 'useInView'
    ]

    for hook in hooks_to_remove:
        # Remove hook declarations
        content = re.sub(rf'const\s+\{{[^}}]*\}}\s*=\s*{hook}\([^)]*\);?\n?', '', content)
        content = re.sub(rf'const\s+\w+\s*=\s*{hook}\([^)]*\);?\n?', '', content)

    # 7. Remove scrollYProgress and related motion values usage
    content = re.sub(r'const\s+\w+\s*=\s*useTransform\([^)]*\);?\n?', '', content)
    content = re.sub(r'const\s+\{\s*scrollYProgress\s*\}\s*=\s*useScroll\([^)]*\);?\n?', '', content)

    # 8. Remove containerRef related to Framer Motion (but keep other refs)
    # This is tricky - only remove if it's used with useScroll
    if 'useScroll' in original_content:
        content = re.sub(r'const\s+containerRef\s*=\s*useRef\(null\);?\n?', '', content)
        content = re.sub(r'ref=\{containerRef\}', '', content)

    # 9. Remove motion-specific event handlers
    content = re.sub(r'\s+onMouseMove=\{handleMouseMove\}', '', content)

    # 10. Clean up empty lines (max 2 consecutive empty lines)
    content = re.sub(r'\n\n\n+', '\n\n', content)

    # 11. Remove unused imports of React hooks if they were only used for Framer Motion
    # (This is optional and conservative)

    # Only write if content changed
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# List of files to process
files_to_process = [
    'src/components/home/HousingOptions.tsx',
    'src/components/home/FeaturedDestinations.tsx',
    'src/components/home/DakarOffice.tsx',
    'src/components/home/BlogPreview.tsx',
    'src/components/home/StudentJob.tsx',
    'src/components/home/GuarantorSection.tsx',
    'src/components/home/BordeauxLocationCard.tsx',
    'src/components/home/LukoPartnership.tsx',
    'src/pages/StudentPage.tsx'
]

base_path = r'c:\Users\jules\Documents\informatique\projets\bamba\senfrance-reprise-voyage'

print("Removing Framer Motion animations from files...\n")
modified_count = 0

for file_path in files_to_process:
    full_path = os.path.join(base_path, file_path)
    if os.path.exists(full_path):
        if remove_framer_motion_from_file(full_path):
            print(f"[OK] Modified: {file_path}")
            modified_count += 1
        else:
            print(f"[--] No changes: {file_path}")
    else:
        print(f"[XX] Not found: {file_path}")

print(f"\nTotal files modified: {modified_count}/{len(files_to_process)}")
