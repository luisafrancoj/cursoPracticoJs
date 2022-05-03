//Helpers

function calcularMediana(lista){

  const listaOrdenada = lista.sort(function(a,b){
    return a - b;
  })

  const mitadLista = parseInt(listaOrdenada.length / 2) ;

  let mediana;

  if (esPar(lista.length)){
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];

    const promedioCentro= calcularPromedio([elemento1, elemento2])

    mediana = promedioCentro
  } else {
    mediana = listaOrdenada[mitadLista]
  }

  return mediana
}

function calcularPromedio(lista) {
  let sumaLista = lista.reduce(
    function  (valorAcumulado = 0, nuevoElemento){
      return valorAcumulado + nuevoElemento
    })
  const promedioLista= sumaLista / lista.length;

  return promedioLista;
}


function esPar(numero){
  return(numero % 2 === 0);
}

// Mediana salaria en Colombia

const salariosCol = colombia.map(
  function (persona){
    return persona.salary;
  });

const salariosColSorted = salariosCol.sort(function(a,b){
  return a-b
})

const medianaGeneralCol = calcularMediana(salariosColSorted);

// Mediana del Top 10%


const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length -spliceStart;

const salariosTopColombia = salariosColSorted.splice(spliceStart, spliceCount)

const medianaTop10Col= calcularMediana(salariosTopColombia);

console.log({
  medianaGeneralCol,
  medianaTop10Col
})

