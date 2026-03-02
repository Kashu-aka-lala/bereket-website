
import os

file_path = r"c:\Users\Dell\OneDrive\Desktop\bereket-website-main\alliances.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all instances of class="alliance-item" with class="alliance-item reveal reveal-up"
# But be careful not to double add if I run it twice.
if 'class="alliance-item reveal reveal-up"' not in content:
    new_content = content.replace('class="alliance-item"', 'class="alliance-item reveal reveal-up"')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Updated alliances.html with reveal classes.")
else:
    print("alliances.html already updated.")
