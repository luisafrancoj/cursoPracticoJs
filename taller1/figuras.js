// Codigo del cuadrado

console.group("Cuadrado")
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
console.groupEnd();

// Codigo del triangulo
console.group("Triangulo")

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

console.groupEnd();

// Codigo del Circulo
console.group("Circulo")

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
console.groupEnd();