import re
from pathlib import Path

def fix_missing_braces(file_path):
    """Fix missing closing braces before array closing brackets."""
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    modified = False
    result = []
    i = 0

    while i < len(lines):
        line = lines[i]

        # Check if this line has a property ending without closing brace before ]
        if re.search(r'(color|icon|title|description|question|answer):\s*["\'].*["\']$', line.strip()):
            # Look ahead to see if next line is just ]
            if i + 1 < len(lines) and lines[i + 1].strip() in ['];', ']']:
                # Add the closing brace
                result.append(line)
                indent = len(lines[i + 1]) - len(lines[i + 1].lstrip())
                result.append(' ' * indent + '}\n')
                modified = True
                i += 1
                continue

        result.append(line)
        i += 1

    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(result)
        return True
    return False

# Process all TypeScript React files
base_dir = Path(r'c:\Users\jules\Documents\informatique\projets\bamba\senfrance-reprise-voyage\src')
files = list(base_dir.rglob('*.tsx'))

fixed = 0
for file_path in files:
    if fix_missing_braces(file_path):
        print(f"[FIXED] {file_path.relative_to(base_dir.parent)}")
        fixed += 1

print(f"\nFixed {fixed} files")
