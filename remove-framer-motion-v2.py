import re
import os

def remove_framer_motion_from_file(file_path):
    """Remove all Framer Motion animations from a TypeScript/React file - Version 2."""

    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    result_lines = []
    skip_until_closing_brace = 0
    i = 0

    while i < len(lines):
        line = lines[i]

        # Skip Framer Motion import lines
        if re.match(r'\s*import\s+.*from\s+[\'"]framer-motion[\'"]', line):
            i += 1
            continue

        # Remove specific animation props
        if any(prop in line for prop in ['initial=', 'animate=', 'whileHover=', 'whileInView=',
                                          'whileTap=', 'variants=', 'transition=', 'viewport=',
                                          'onHoverStart=', 'onHoverEnd=', 'exit=', 'custom=']):
            # Check if it's a multi-line prop
            if '}}' not in line:
                # Skip this line and all lines until we find the closing braces
                brace_count = line.count('{') - line.count('}')
                i += 1
                while i < len(lines) and brace_count > 0:
                    brace_count += lines[i].count('{') - lines[i].count('}')
                    i += 1
                continue
            else:
                # Single line prop - skip it
                i += 1
                continue

        # Replace motion.* with regular HTML elements
        modified_line = line
        modified_line = re.sub(r'<motion\.(\w+)', r'<\1', modified_line)
        modified_line = re.sub(r'</motion\.(\w+)>', r'</\1>', modified_line)

        # Remove AnimatePresence
        if '<AnimatePresence' in modified_line or '</AnimatePresence>' in modified_line:
            i += 1
            continue

        # Remove Framer Motion hook declarations
        if any(hook in modified_line for hook in ['useScroll', 'useTransform', 'useMotionValue',
                                                   'useSpring', 'useAnimation', 'useInView']):
            if '=' in modified_line:
                i += 1
                continue

        # Remove containerRef if it was only used for Framer Motion
        if 'containerRef' in modified_line and 'useRef' in modified_line:
            i += 1
            continue

        # Remove ref={containerRef}
        modified_line = re.sub(r'\s+ref=\{containerRef\}', '', modified_line)

        # Remove onMouseMove for Framer Motion
        modified_line = re.sub(r'\s+onMouseMove=\{handleMouseMove\}', '', modified_line)

        # Remove style prop for motion components (Framer Motion specific)
        if 'style={' in modified_line and ('rotateX' in modified_line or 'rotateY' in modified_line or 'y:' in line):
            if '}}' not in modified_line:
                # Multi-line style prop
                brace_count = modified_line.count('{') - modified_line.count('}')
                i += 1
                while i < len(lines) and brace_count > 0:
                    brace_count += lines[i].count('{') - lines[i].count('}')
                    i += 1
                continue

        result_lines.append(modified_line)
        i += 1

    # Clean up multiple empty lines
    cleaned_lines = []
    empty_count = 0
    for line in result_lines:
        if line.strip() == '':
            empty_count += 1
            if empty_count <= 2:
                cleaned_lines.append(line)
        else:
            empty_count = 0
            cleaned_lines.append(line)

    # Write back
    new_content = ''.join(cleaned_lines)
    with open(file_path, 'r', encoding='utf-8') as f:
        original_content = f.read()

    if new_content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

# Process HousingOptions.tsx specifically
file_path = r'c:\Users\jules\Documents\informatique\projets\bamba\senfrance-reprise-voyage\src\components\home\HousingOptions.tsx'

if os.path.exists(file_path):
    if remove_framer_motion_from_file(file_path):
        print(f"[OK] Modified: HousingOptions.tsx")
    else:
        print(f"[--] No changes: HousingOptions.tsx")
else:
    print(f"[XX] Not found: HousingOptions.tsx")
