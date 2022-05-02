const lista = [1,2,3,1,2,3,4,2,2,2,1];

//convertir array a objeto sumando la cantidad de veces que aparece cada elemento

function calcularModa(lista) {
  const listaCount = {};
  lista.map(
    function(elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento]= 1
    }
  });

  const listaArray = Object.entries(listaCount).sort(function(a,b){
      return a[1] - b[1];
  });


  const moda = listaArray[listaArray.length - 1];
  return moda
}





