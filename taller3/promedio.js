const lista1 = [100,200,300,500];



function calcularPromedio(lista) {
  // let sumaLista = 0;

  // for (i = 0 ; i < lista1.length; i++){
  //   sumaLista = sumaLista + lista[i];
  // }

  let sumaLista = lista.reduce(
    function  (valorAcumulado = 0, nuevoElemento){
      return valorAcumulado + nuevoElemento
    })
  const promedioLista= sumaLista / lista1.length;

  return promedioLista;
}