// 1. Declaração da variável 'x' no escopo global
let x = 100;

// 2. Função chamada testScope
function testeScorpo() {
    // 3. Dentro da função, declara-se uma nova variável 'x' com valor 50
    let x = 50;
    console.log("Dentro da função, x é:", x);  // Imprime 50
    
    // 4. Bloco if dentro da função, com outra variável 'x' declarada
    if (true) {
        let x = 30;  // Esta 'x' é local ao bloco if
        console.log("Dentro do bloco if, x é:", x);  // Imprime 30
    }
    
    // Saindo do bloco if e da função, 'x' volta a ser 50
    console.log("Dentro da função, após o if, x é:", x);  // Imprime 50
}

// 5. Chamando a função testScope
testeScorpo();

// 6. Imprimindo o valor de 'x' fora da função, no escopo global
console.log("Fora da função, x é:", x);  // Imprime 100