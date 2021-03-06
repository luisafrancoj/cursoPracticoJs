// const precioOriginal = 120;
// const descuento= 18;

function CalcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento= 100 - descuento;
  const precioConDescuento= (precio * porcentajePrecioConDescuento)/100;

  return precioConDescuento
}

function priceDiscountButton(){
  const inputPrice= document.getElementById("inputPrice");
  const price= Number(inputPrice.value);

  const inputDiscount= document.getElementById('inputDiscount');
  const cuppon = inputDiscount.value;
  let discount;

  if (cuppons.hasOwnProperty(cuppon)) {
    discount = cuppons[cuppon];
  } else {
    discount = 0;
  }

  const precioConDescuento = CalcularPrecioConDescuento(price,discount);

  const resultPrice = document.getElementById('descountPrice');
  resultPrice.innerText= 'El precio con descuento es $ ' + precioConDescuento;
}


var cuppons =
  {
    welcome: 15,
    refer: 20,
    birthday:25
  };

// console.log({
//   precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento
// });