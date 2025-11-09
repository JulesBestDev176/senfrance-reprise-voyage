import re
from pathlib import Path

def fix_color_styles(file_path):
    """Fix missing closing braces in colorStyles objects."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Pattern: icon property followed by closing of parent object
    # Should have a closing brace for the color object before parent closes
    pattern = r'(icon:\s*"[^"]+"\n)(\s+)\};'
    replacement = r'\1\2}\n\2};'
    content = re.sub(pattern, replacement, content)

    # Another pattern: last property of color object before parent closes
    pattern = r'((?:icon|shadow|button|hover|border|text|light|active):\s*"[^"]+")(\n\s+)\};'

    def replacer(match):
        prop = match.group(1)
        whitespace = match.group(2)
        # Add closing brace for the color object
        closing = "}"
        return f"{prop}{whitespace}{closing}{whitespace}{closing};"

    content = re.sub(pattern, replacer, content)

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Process all pages
base_dir = Path(r'c:\Users\jules\Documents\informatique\projets\bamba\senfrance-reprise-voyage\src\pages')
files = list(base_dir.glob('*.tsx'))

fixed = 0
for file_path in files:
    if fix_color_styles(file_path):
        print(f"[FIXED] {file_path.name}")
        fixed += 1

print(f"\nFixed {fixed} files")
