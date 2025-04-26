max_length = int(input())

user_input = input()

def summarize_text(text, limit):
    if len(text) <= limit:
        return text
    else:
        return text[:limit - 3] + "..."

output = summarize_text(user_input, max_length)

print(output)
