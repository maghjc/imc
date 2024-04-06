// function sortear() {
//     let quantidade = document.getElementById('quantidade').value;
//     let de = parseInt(document.getElementById('de').value);
//     let ate = parseInt(document.getElementById('ate').value);
//     let numero = 0;
//     let sorteados = []
//     if (de >= ate){
//         alert('O número inicial é maior que o numero final! Por favor reinsira os dados.');
//         reiniciar()
//         alterarStatusBotao();
//         return;
//     }
//     for (let i = 0; i < quantidade; i++){
//         numero = gerarNumeroAleatorio(de,ate);
//         while (sorteados.includes(numero)){
//             numero = gerarNumeroAleatorio(de,ate);
//         }         
//         sorteados.push(numero)
//     }
    
//     let resultado = document.getElementById('resultado');
//     resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
//     alterarStatusBotao();
    
// }


// function gerarNumeroAleatorio(min,max){
//     return Math.floor(Math.random() * (max - min + 1))+ min;
// }

// function alterarStatusBotao() {
//     let botao = document.getElementById('btn-reiniciar');
//     if (botao.classList.contains('container__botao-desabilitado')) {
//         botao.classList.remove('container__botao-desabilitado');
//         botao.classList.add('container__botao');
//     }else{
//         botao.classList.remove('container__botao');
//         botao.classList.add('container__botao-desabilitado');
        
//     }
// }

// function reiniciar() {
//     document.getElementById('quantidade').value = '';
//     document.getElementById('de').value = '';
//     document.getElementById('ate').value = '';
//     document.getElementById('resultado').innerHTML = '<label class="text    o__paragrafo">Números sorteados:  nenhum até agora</label>';
//     alterarStatusBotao();
// }




// Desafio do contador de vogais:
// Escreva uma função que conte o número de vogais em uma string fornecida pelo usuário.

function contarVogais(texto) {
    // Converte o texto para minúsculas para facilitar a contagem
    texto = texto.toLowerCase();

    // Inicializa o contador de vogais
    let contador = 0;

    // Define um conjunto de vogais para verificar
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    // Itera sobre cada caractere do texto
    for (let i = 0; i < texto.length; i++) {
        // Verifica se o caractere atual é uma vogal
        if (vogais.includes(texto[i])) {
            // Se for uma vogal, incrementa o contador
            contador++;
        }
    }

    // Retorna o total de vogais encontradas
    return contador;
}

// Exemplo de uso
let texto = prompt('Olá, mundo! Esta é uma frase de exemplo.');
let totalVogais = contarVogais(texto);
console.log('O número de vogais no texto é:', totalVogais);




