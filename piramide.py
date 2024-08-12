n = int(input("Digite um número: "))

def piramide(n):
    for i in range(n, 0, -1):
        linha = ''

        for j in range((i - 1) * 2):
            linha += '-'

        for k in range(n - i + 1, 0, -1):
            linha += str(i)
            if k > 1:
                linha += ' - '

        print(linha)
piramide(n)