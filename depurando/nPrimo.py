number = int(input())

def is_prime(n):
    if n <= 1:
        return False
    if n == 2 or n == 3:
        return True
    if n % 2 == 0:
        return False

    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True

if is_prime(number):
    print(f"{number} é um número primo!")
else:
    print(f"{number} não é um número primo.")
