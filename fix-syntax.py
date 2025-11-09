import re
import os

files = [
    'src/pages/StudentPage.tsx',
    'src/pages/ParentsPage.tsx',
    'src/pages/PricingPage.tsx',
    'src/pages/AviPage.tsx',
    'src/pages/HousingPage.tsx',
    'src/pages/PageJobEtudiant.tsx',
    'src/pages/PageAssurances.tsx',
    'src/pages/ContactPage.tsx',
    'src/pages/PrivacyPolicyPage.tsx',
    'src/pages/TermsConditionsPage.tsx',
    'src/pages/FaqPage.tsx'
]

for file in files:
    print(f"Processing {file}...")
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix incomplete className attributes
    content = re.sub(r'className="([^"]*blur-3xl)>', r'className="\1">', content)

    # Fix div} syntax errors
    content = re.sub(r'<div}', '<div', content)

    # Fix motion.div artifacts with : { }
    content = re.sub(r'\s*:\s*\{\s*[^}]*\}\s*className=', ' className=', content)
    content = re.sub(r'\}\s*:\s*\{\s*[^}]*\}', '', content)

    # Remove motion.div animation props
    content = re.sub(r'initial="[^"]*"', '', content)
    content = re.sub(r'whileInView="[^"]*"', '', content)
    content = re.sub(r'animate="[^"]*"', '', content)
    content = re.sub(r'whileHover=\{[^}]*\}', '', content)
    content = re.sub(r'whileTap=\{[^}]*\}', '', content)
    content = re.sub(r'transition=\{[^}]*\}', '', content)
    content = re.sub(r'variants=\{[^}]*\}', '', content)

    # Remove motion.div specific syntax
    content = re.sub(r'<motion\.div\s+ref=\{[^}]+\}', '<div', content)
    content = re.sub(r'<motion\.div', '<div', content)
    content = re.sub(r'</motion\.div>', '</div>', content)

    # Remove extra commas and cleanup
    content = re.sub(r',\s+className=', ' className=', content)
    content = re.sub(r',\s+ref=', ' ref=', content)

    # Fix double spaces in className
    content = re.sub(r'className="\s+', 'className="', content)
    content = re.sub(r'\s+className=', ' className=', content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Fixed {file}")

print("All files fixed!")
