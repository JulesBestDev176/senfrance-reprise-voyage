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

    # Fix <div> className= syntax
    content = re.sub(r'<div>\s+className=', '<div className=', content)
    content = re.sub(r'<section>\s+className=', '<section className=', content)

    # Fix self-closing divs that should be closed properly
    content = re.sub(r'<div([^>]*)>\s*\n\s*/>', r'<div\1></div>', content)

    # Fix double }} in className
    content = re.sub(r'className=\{`([^`]*)`\}\s*\}\}', r'className={`\1`}', content)
    content = re.sub(r'key=\{index\}\s+className=\{`([^`]*)`\}\s*\}\}', r'key={index} className={`\1`}', content)

    # Remove extra closing >
    content = re.sub(r'className="([^"]+)"\s+\n\s*>', r'className="\1">', content, flags=re.MULTILINE)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Fixed {file}")

print("All files fixed!")
