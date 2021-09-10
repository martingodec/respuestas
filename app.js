const area = document.getElementById("prueba");

area.addEventListener("input", function () {
  const texto = document.getElementById("prueba").value;

 

  const replace = texto.replace(/@link/g, "https://estoesunlink.com");

  document.getElementById("prueba").value = replace;
});
