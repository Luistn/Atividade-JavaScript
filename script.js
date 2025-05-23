function calculadoraAvancada() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const operacao = prompt("Digite a operação desejada (+, -, *, /, %, **):");
    let resultado;

    if (operacao === "+") {
        resultado = num1 + num2;
    } else if (operacao === "-") {
        resultado = num1 - num2;
    } else if (operacao === "*") {
        resultado = num1 * num2;
    } else if (operacao === "/") {
        if (num2 === 0) {
            document.write("Erro: Divisão por zero!");
            return;
        }
        resultado = num1 / num2;
    } else if (operacao === "%") {
        resultado = num1 % num2;
    } else if (operacao === "**") {
        resultado = num1 ** num2;
    } else {
        document.write("Operação inválida!");
        return;
    }
    document.write(`Resultado: ${num1} ${operacao} ${num2} = ${resultado}`);
}




function classificarIdade() {
    const idade = parseInt(prompt("Digite sua idade:"));
    let classificacao;
    if (idade <= 12) {
        classificacao = "Criança";
    } else if (idade <= 17) {
        classificacao = "Adolescente";
    } else if (idade <= 59) {
        classificacao = "Adulto";
    } else {
        classificacao = "Idoso";
    }
    alert(`Classificação: ${classificacao}`);
}





function tabuadaPersonalizada() {
    const base = parseInt(prompt("Digite o numero base:"));
    const limite = parseInt(prompt("Digite o numero final:"));
    let resultado = "";
    for (let i = 1; i <= limite; i++) {
        resultado += `${base} x ${i} = ${base * i}<br>`;
    }
    document.write(resultado);
}





function somaParesWhile() {
    const limite = parseInt(prompt("Digite o número limite:"));
    let soma = 0;
    let i = 2;
    while (i <= limite) {
        soma += i;
        i += 2;
    }
    document.write(`A soma dos pares até ${limite} é ${soma}`);
}





function validaSenha() {
    let tentantivas = 0;
    let senha;
    while (tentantivas < 3) {
        senha = prompt("Digite a senha:");
        if (senha === "senha123"){
            alert("acesso permitido");
            return;
        }
        tentantivas++;
    }
    alert("acesso bloqueado")
}





function calcularFatorial() {
    const num = parseInt(prompt("Digite um número inteiro positivo:"));
    if (isNaN(num) || num < 0) {
        alert("Número inválido!");
        return;
    }
    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
        fatorial *= i;
    }
    document.write(`Fatorial de ${num} é ${fatorial}`);
}





function verificarPrimo() {
  let n = prompt("Digite um número:");
  let p = n > 1;
  for (let i = 2; i < n && p; i++)
    if (n % i == 0) p = false;
  document.write(n + (p ? " é primo." : " não é primo."));
}




function mediaAritmetica() {
  let soma = 0, count = 0, n;

  while ((n = prompt("Digite um número ou 'fim':")) !== "fim") {
    let num = parseFloat(n);
    if (!isNaN(num)) {
      soma += num;
      count++;
    }
  }

  if (count > 0) {
    document.write("Média: " + (soma / count).toFixed(2));
  } else {
    document.write("Nenhum número válido foi digitado.");
  }
}





function contadorRegressivo() {
    let num = parseInt(prompt("Digite um número maior que zero:"));
    if (isNaN(num) || num <= 0) {
        alert("Número inválido!");
        return;
    }
    let resultado = "";
    while (num >= 0) {
        resultado += num + "<br>";
        num--;
    }
    document.write(resultado);
}

function verificarNumeros() {
  let inicio = parseInt(prompt("Digite o número inicial:"));
  let fim = parseInt(prompt("Digite o número final:"));
  let encontrou = false;

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      document.write(i + "<br>");
      encontrou = true;
    }
  }

  if (!encontrou) {
    document.write("Nenhum número encontrado que seja par e múltiplo de 3.");
  }
}
