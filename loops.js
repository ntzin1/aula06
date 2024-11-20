// 1. Criando a variável 'phrase' com o valor "JavaScript is fun!"
let phrase = "JavaScript is fun!";

// 2. Usando um loop 'for' para imprimir cada caractere da string 'phrase'
for (let i = 0; i < phrase.length; i++) {
    console.log(phrase[i]);  // Imprime o caractere na posição 'i' da string
}

// 3. Contando quantas vezes a letra 'a' aparece em 'phrase'
let count = 0;  // Inicializa o contador como 0
for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === 'a' || phrase[i] === 'A') {  // Verifica se o caractere é 'a' ou 'A'
        count++;  // Se for 'a', incrementa o contador
    }
}
console.log("A letra 'a' aparece " + count + " vezes.");  // Exibe o resultado da contagem

// 4. Usando um loop 'while' para imprimir números de 1 a 10
let number = 1;  // Inicializa a variável 'number' com 1
while (number <= 10) {  // Enquanto 'number' for menor ou igual a 10
    console.log(number);  // Imprime o número
    number++;  // Incrementa 'number' em 1
}