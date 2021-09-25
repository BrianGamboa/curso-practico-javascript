// Código del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado, lado) {
  return lado * lado;
}

// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del triángulo

console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm y " +
//     baseTriangulo +
//     "cm"
// );

// const alturaTriangulo = 5.5;

// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// console.log("El área del tri+angulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del círculo

console.group("Círculos");

// Radio

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro

function diametroCirculo(radio) {
  return radio * 2;
}

// console.log("El diámetro del circulo es: " + diametroCirculo + "cm");

// PI

const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");

// Radio

function areaCirculo(radio) {
  return radio * radio * PI;
}

// const areaCirculo = radioCirculo * radioCirculo * PI;
// console.log("El área del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

// Aqui interactuamos con HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  const resultado = document.getElementById("resultadoCuadrado");
  resultado.innerHTML = "El área es: " + perimetro + " Cm";
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value, value);
  const resultado = document.getElementById("resultadoCuadrado");
  resultado.innerHTML = "El área es: " + area + " Cm^2";
}
function calcularPerimetroTriangulo() {
  const inputLado1 = Number(
    document.getElementById("inputTrianguloLado1").value
  );
  const inputLado2 = Number(
    document.getElementById("inputTrianguloLado2").value
  );
  const inputBase = Number(document.getElementById("inputTrianguloBase").value);
  const perimetro = perimetroTriangulo(inputLado1, inputLado2, inputBase);
  const resultado = document.getElementById("resultadoTriangulo");
  resultado.innerHTML = "El perímetro es: " + perimetro + " Cm";
}
function calcularAreaTriangulo() {
  const inputLado1 = Number(
    document.getElementById("inputTrianguloLado1").value
  );
  const inputLado2 = Number(
    document.getElementById("inputTrianguloLado2").value
  );
  const inputBase = Number(document.getElementById("inputTrianguloBase").value);

  if (inputLado1 === inputLado2) {
    function alturaF(a, b) {
      return Math.sqrt(a * a - (b * b) / 4);
    }
    const altura = alturaF(inputLado1, inputBase);
    const area = areaTriangulo(inputBase, altura);
    const resultado = document.getElementById("resultadoTriangulo");
    resultado.innerHTML =
      "El área es: " + area + " Cm^2 " + "| La altura es: " + altura + " Cm";
  } else {
    alert("Los dos lados del triángulo deben medir igual");
  }
}
