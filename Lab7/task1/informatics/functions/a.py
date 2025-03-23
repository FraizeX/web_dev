def minimal(a, b, c, d):
    return min([a, b, c, d])


a = [int(i) for i in input().split()]

print(minimal(*a))