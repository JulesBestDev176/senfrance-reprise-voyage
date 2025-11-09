import re
import os
from pathlib import Path

def clean_file(file_path):
    """Clean all syntax errors from a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original = content

        # Fix JSX opening tags with extra braces
        content = re.sub(r'<(div|section|span|p|h1|h2|h3|h4|button|ul|li)\}+', r'<\1', content)

        # Fix key={index} with extra braces
        content = re.sub(r'key=\{index\}\}+', r'key={index}', content)
        content = re.sub(r'key=\{i\}\}+', r'key={i}', content)

        # Fix className ending with extra braces
        content = re.sub(r'className="([^"]+)"\}+', r'className="\1"', content)
        content = re.sub(r"className='([^']+)'\}+", r"className='\1'", content)
        content = re.sub(r'className=\{`([^`]*)`\}\}+', r'className={`\1`}', content)

        # Fix standalone closing braces on lines
        lines = content.split('\n')
        cleaned_lines = []
        for i, line in enumerate(lines):
            # Skip lines that are just closing braces
            stripped = line.strip()
            if stripped in ['}', '}}', '}}}', '}}}}', '}}}}}', '}}}}}}', '}}}}}}}', '}}}}}}}}']:
                continue
            # Remove extra } before keywords
            line = re.sub(r'\}\s+(className=|key=|ref=|style=|initial=|animate=|whileHover=)', r' \1', line)
            cleaned_lines.append(line)

        content = '\n'.join(cleaned_lines)

        # Fix missing closing braces in object literals
        content = re.sub(r'(question|answer|title|description|content):\s*"([^"]*)"(\s*)\]', r'\1: "\2"\3}\n  ]', content)

        # Fix useInView calls
        content = re.sub(r'const\s+isInView\s*=\s*\([^)]*\);', 'const isInView = false;', content)

        # Remove framer-motion specific attributes from JSX
        framer_attrs = ['initial', 'animate', 'whileHover', 'whileInView', 'whileTap', 'variants', 'transition', 'viewport', 'exit', 'custom']
        for attr in framer_attrs:
            # Remove single line attributes
            content = re.sub(rf'\s+{attr}="[^"]*"', '', content)
            content = re.sub(rf'\s+{attr}=\{{[^}}]*\}}', '', content)

        # Fix React.cloneElement syntax
        content = re.sub(r'className:\s*"([^"]+)">+\)', r'className: "\1" })', content)

        # Fix button tags with extra braces
        content = re.sub(r'<button\}+', '<button', content)

        # Remove any leftover motion. references
        content = re.sub(r'<motion\.', '<', content)
        content = re.sub(r'</motion\.', '</', content)

        if content != original:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False

    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

# Find all .tsx files
base_dir = Path(r'c:\Users\jules\Documents\informatique\projets\bamba\senfrance-reprise-voyage\src')
files = list(base_dir.rglob('*.tsx'))

print(f"Found {len(files)} .tsx files to process\n")

fixed_count = 0
for file_path in files:
    if clean_file(file_path):
        print(f"[FIXED] {file_path.relative_to(base_dir.parent)}")
        fixed_count += 1

print(f"\n✓ Fixed {fixed_count} files")
