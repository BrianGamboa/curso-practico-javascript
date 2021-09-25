const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultP = document.getElementById("resultP");
  resultP.innerHTML = "El precio con descuento son: S/ " + precioConDescuento;
}

function onClickButtonPriceDiscountCupon() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const userCupon = document.getElementById("inputCupon");
  const CuponValue = userCupon.value;

  const cupones = ["es_un_secreto", "Brian_Gamboa", "sorpresa"];

  let descuento;

  if (!cupones.includes(CuponValue)) {
    alert("El cupón " + CuponValue + " no es válido");
  } else if (CuponValue === "es_un_secreto") {
    descuento = 10;
  } else if (CuponValue === "Brian_Gamboa") {
    descuento = 20;
  } else if (CuponValue === "sorpresa") {
    descuento = 30;
  }

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("resultP");
  resultP.innerHTML = "El precio con descuento son: S/ " + precioConDescuento;
}
