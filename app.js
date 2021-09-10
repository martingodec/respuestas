const area = document.getElementById("prueba");

area.addEventListener("input", function () {
  const texto = document.getElementById("prueba").value;

  //const objetos = {url : "@direcciones", msje: "La sucursal se encuentra en la calle San Jose 426 esquina Belgrano."}

  const replace = texto.replace(/@link/g, "https://estoesunlink.com");

  document.getElementById("prueba").value = replace;
});
