students = []
for _ in range(int(input())):
    name = input()
    score = float(input())
    students.append((name, score))

students.sort(key=lambda x: x[1])
second_lowest_score = sorted(set(score for _, score in students))[1]

for name, score in students:
    if score == second_lowest_score:
        print(name)
