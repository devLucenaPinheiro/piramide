let n = parseInt(prompt("Digite um número: "))

function piramide(n) {
    for (let i = n; i >= 1; i--) {
        let linha = '';

        for (let j = 1; j <= (i - 1) * 2; j++) {
            linha += '-';
        }
        for (let k = n - i + 1; k >= 1; k--) {
            linha += i;
            if (k > 1) {
                linha += ' - ';
            }
        }
        document.write(linha + "<br>");
    }
}
piramide(n);