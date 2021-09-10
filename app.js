const area = document.getElementById("prueba");

//Recibo tags de una DB (ejemplo con objetos)
const objetos = [{tag:"@hola", msje: "Hola todo bien? En que podemos ayudarle ?"}, {tag:"@stock", msje: "Nos queda disponible en ese número"}, {tag:"@direccion", msje: "La direccion es calle falsa 123"}]

area.addEventListener("input", function () {
  const texto = document.getElementById("prueba").value;

    for (let i = 0; i < objetos.length; i++ ){

       if  (texto.includes(objetos[i].tag)){
           console.log("Escribio la palabra " + objetos[i].tag)

           setTimeout(cambia , 200);
        
        
        function cambia() {
           const replace = texto.replace(objetos[i].tag, objetos[i].msje);

           document.getElementById("prueba").value = replace;
        }
       }

    }


  
});
