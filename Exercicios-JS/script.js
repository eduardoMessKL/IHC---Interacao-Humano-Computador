
// ---------- Exercício 1 ----------
function encontrarMaiorNumero() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var maiorNumero;

    if (numero1 > numero2) {
      maiorNumero = numero1;
    } else if (numero2 > numero1) {
      maiorNumero = numero2;
    } else {
      maiorNumero = "Os números são iguais";
    }

    document.getElementById("resultado1").innerHTML = "O maior número é: " + maiorNumero;
  }

// ---------- Exercício 2 ----------
function verificarNota() {
    var nota = parseFloat(document.getElementById("nota").value);

    var mensagem;

    if (nota < 6) {
      mensagem = "Reprovado";
    } else if (nota >= 6 && nota < 8) {
      mensagem = "Aprovado";
    } else {
      mensagem = "Aprovado com louvor";
    }

    document.getElementById("resultado2").innerHTML = "Resultado: " + mensagem;
  }

// ---------- Exercício 3 ----------
function calcularMediaVetor() {
    var numeros = document.getElementById("numeros").value;
    var vetor = numeros.split(",");

    var soma = 0;
    for (var i = 0; i < vetor.length; i++) {
      soma += parseFloat(vetor[i]);
    }

    var media = soma / vetor.length;

    document.getElementById("resultado3").innerHTML = "A média é: " + media.toFixed(2);
  }

// ---------- Exercício 4 ----------
function verificarVariavel() {
    var variavel = document.getElementById("variavel").value;

    var mensagem;

    if (variavel === "a") {
      mensagem = "A";
    } else if (variavel === "b") {
      mensagem = "B";
    } else {
      mensagem = "Outra letra";
    }

    document.getElementById("resultado4").innerHTML = "A mensagem é: " + mensagem;
  }

// ---------- Exercício 5 ----------
function calcularSomaMatriz() {
    var matrizEntrada = document.getElementById("matriz").value;
    var elementos = matrizEntrada.split(",");
    var matriz = [];

    for (var i = 0; i < elementos.length; i++) {
      matriz.push(parseFloat(elementos[i]));
    }

    var soma = 0;

    for (var i = 0; i < matriz.length; i++) {
      soma += matriz[i];
    }

    document.getElementById("resultado5").innerHTML = "A soma dos elementos da matriz é: " + soma;
  }

// ---------- Exercício 6 ----------
function calcularFatorial() {
    var numero = parseInt(document.getElementById("numero").value);

    var fatorial = 1;

    if (numero < 0) {
      document.getElementById("resultado").innerHTML = "O número deve ser maior ou igual a zero.";
    } else if (numero === 0) {
      document.getElementById("resultado").innerHTML = "O fatorial de 0 é 1.";
    } else {
      for (var i = 1; i <= numero; i++) {
        fatorial *= i;
      }

      document.getElementById("resultado6").innerHTML = "O fatorial de " + numero + " é " + fatorial + ".";
    }
  }

// ---------- Exercício 7 ----------
function exibirMensagem() {
    var opcaoSelecionada = document.getElementById("opcoes").value;
    var mensagem;

    switch (opcaoSelecionada) {
      case "1":
        mensagem = "Opção 1 escolhida";
        break;
      case "2":
        mensagem = "Opção 2 escolhida";
        break;
      case "3":
        mensagem = "Opção 3 escolhida";
        break;
      default:
        mensagem = "Opção inválida";
        break;
    }

    document.getElementById("resultado7").innerHTML = mensagem;
  }

// ---------- Exercício 8 ----------
function encontrarMaiorNumeroVetor() {
    var vetor = document.getElementById("numeros").value.split(",");
    var numeros = vetor.map(function (numero) {
      return parseFloat(numero);
    });

    var maiorNumero = Math.max.apply(null, numeros);

    document.getElementById("resultado8").innerHTML = "O maior número é: " + maiorNumero;
  }

// ---------- Exercício 9 ----------
function calcularMediaMatriz() {
    var matrizEntrada = document.getElementById("matriz").value;
    var natrizArray = matrizEntrada.split(",");

    var soma = 0;

    for (var i = 0; i < natrizArray.length; i++) {
      var numero = parseFloat(natrizArray[i]);
      soma += numero;
    }

    var media = soma / natrizArray.length;

    document.getElementById("resultado9").innerHTML = "A média dos elementos da matriz é: " + media;
  }