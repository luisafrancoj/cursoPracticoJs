// Codigo del cuadrado

// console.group("Cuadrado")
// const  ladoCuadrado= 5;

// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado (lado) {
  return lado*4
}


// console.log('Perímetro del cuadrado = ' + perimetroCuadrado + 'cm');

function areaCuadrado (lado){
  return lado*lado
}

// console.log('Área del cuadrado = ' + areaCuadrado + 'cm^2')
// console.groupEnd();

// // Codigo del triangulo
// console.group("Triangulo")

// const  ladoTriangulo1= 6;
// const  ladoTriangulo2= 6;
// const  baseTriangulo= 4;
// const  alturaTriangulo= 5.5;

// console.log('Los lados del triangulo miden: ' + ladoTriangulo1 + 'cm, ' + ladoTriangulo2 + 'cm, ' + baseTriangulo + 'cm');

function perimetroTriangulo (lado1,lado2,base){
  return lado1 + lado2 + base
}

// console.log('Perímetro del Triangulo = ' + perimetroTriangulo + 'cm');

function areaTriangulo(base, altura){
  return (base*altura)/2;
}

// console.log('Área del Triangulo = ' + areaTriangulo + 'cm^2');

// console.groupEnd();

// // Codigo del Circulo
// console.group("Circulo")

// const  radio= 6;
const  pi= Math.PI;
// let    diametro= radio*2;

// console.log('El diametro del circulo es de ' +diametro + ', el radio del circulo es ' +radio);

function diametroCirculo(radio){
  return radio *2
}

function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);

  return diametro*pi
}

// console.log('El perímeto de un circulo = ' + circunferencia + 'cm')

function areaCirculo(radio){
  return Math.pow(radio,2)*pi;
}

// console.log('El área de un circulo = ' +areaCirculo + 'cm^2')
// console.groupEnd();

// AQUI INTERACTUAMOS CON EL HTML
function calcularPerimetroCuadrado(){
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function  calcularAreaCuadrado(){
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo(){
  const inputlado1 = document.getElementById('input_triangulo_1');
  const lado1= Number(inputlado1.value);

  const inputlado2 = document.getElementById('input_triangulo_2');
  const lado2= Number(inputlado2.value);

  const input_base = document.getElementById('input_triangulo_3');
  const base= Number(input_base.value);

  const perimetro = perimetroTriangulo (lado1,lado2,base);
  alert(perimetro);
}
function calcularAreaTriangulo(){

  const input_base = document.getElementById('input_triangulo_3');
  const base= input_base.value;

  const input_altura = document.getElementById('input_triangulo_4');
  const altura= input_altura.value;

  const area = areaTriangulo(base, altura);
  alert(area);

}

function calcularPerimetroCirculo(){
  const inputRadio= document.getElementById('inputCirculo');
  const radio = inputRadio.value;

  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}

function calcularAreaCirculo(){
  const inputRadio= document.getElementById('inputCirculo');
  const radio = inputRadio.value;

  const area = areaCirculo(radio);
  alert(area);
}