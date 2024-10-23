// Criar uma calculadora utilizando funções para cada operação. O usuário deve digitar o primeiro número, o segundo número e em seguida a operação que deseja realizar (1-soma 2-subtração 3- multiplicação 4-divisão). O resultado deve ser mostrado na tela

// digite o primeiro número:

// digite o segundo número:

// qual operação deseja realizar?

// 1-soma
// 2-subtração
// 3-multiplicação
// 4-divisão


alert('Calculadora com funções');

let num1, num2, operacao;

num1 = Number(prompt('Digite o primeiro número:'));
num2 = Number(prompt('Digite o segundo número:'));

operacao = Number(prompt('Qual operação deseja realizar? \n 1-soma \n 2-subtração \n 3-multiplicação \n 4-divisão'));

// Define functions for each operation
function soma() {
  return num1 + num2;
}

function subtracao() {
  return num1 - num2;
}

function multiplicacao() {
  return num1 * num2;
}

function divisao() {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return 'Erro: Divisão por zero!';
  }
}

switch (operacao) {
  case 1:
    alert(`O resultado é: ${soma()}`);
    break;
  case 2:
    alert(`O resultado é: ${subtracao()}`);
    break;
  case 3:
    alert(`O resultado é: ${multiplicacao()}`);
    break;
  case 4:
    alert(`O resultado é: ${divisao()}`);
    break;
  default:
    alert('Operação inválida!');
}
