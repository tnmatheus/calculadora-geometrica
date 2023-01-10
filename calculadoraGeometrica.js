function calcularTriangulo() {
  const base = prompt("Infome a base do triângulo:");
  const altura = prompt("Infome a altura do triângulo:");
  return (base * altura) / 2;
}

function calcularRetangulo() {
  const base = prompt("Infome a base do Retangulo:");
  const altura = prompt("Infome a altura do Retangulo:");
  return base * altura;
}

function calcularQuadrado() {
  const lado = prompt("Infome o lado do Quadrado:");
  return lado * lado;
}

function menu() {
  return prompt(
    "Calculadora geométrica\n" +
      "1. Calcular área de trângulo\n" +
      "2. Calcular área de retangulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Sair\n"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = menu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularTriangulo();
        break;
      case "2":
        resultado = calcularRetangulo();
        break;
      case "3":
        resultado = calcularQuadrado();
        break;
      case "4":
        alert("saindo...");
        break;
      default:
        alert("Opção invalida");
    }

    if (resultado) {
      alert("Resultado " + resultado);
    }
  } while (opcao !== "4");
}

executar();
