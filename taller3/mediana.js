const lista = [200,100, 400000000, 10000];

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
  if (numero % 2 === 0) {
    return true
  }else {
    return false
  }
}
