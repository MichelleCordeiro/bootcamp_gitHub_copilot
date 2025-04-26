full_name = input()

def format_name(name):
    name = name.lower()
    name = name.title()
    return name

formatted = format_name(full_name)
print(formatted)
