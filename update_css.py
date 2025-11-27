#!/usr/bin/env python3
# Script para actualizar CSS

with open('css/main.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Reemplazar el btn-outline:hover
old_code = """.btn-outline:hover {
    background-color: var(--color-blanco-nieve);
    color: var(--color-tierra-humeda);
    border-color: var(--color-blanco-nieve);
}"""

new_code = """.btn-outline:hover {
    background-color: var(--color-blanco-nieve);
    color: var(--color-tierra-humeda);
    border-color: var(--color-blanco-nieve);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
}"""

content = content.replace(old_code, new_code)

with open('css/main.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ CSS actualizado exitosamente")
