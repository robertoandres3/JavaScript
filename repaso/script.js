  
  // getElementById()
  function cambiarTexto() {
    const elemento = document.getElementById("saludo");
    elemento.innerText = "¡Texto cambiado!";
    elemento.style.color = "green";
    elemento.style.fontSize = "24px";
  }

//querySelector)
  function resaltar() {
    const parrafo = document.querySelector(".contenedor p"); // primer <p> dentro de .contenedor
    parrafo.style.backgroundColor = "yellow";
    parrafo.innerText = "¡Resaltado!";
    }

//querySelectorAll()

function marcarTodos() {
const items = document.querySelectorAll(".item");

items.forEach(function(item, index) {   
item.style.border = "1px solid red";
item.innerText = "Elemento " + (index + 1) + " ✅"; //En JavaScript (y en muchos lenguajes), cuando recorres una lista con .forEach(), el índice (index) empieza en 0.
});
}

// Elemento	index	
// Primer elemento	0
// Segundo	1	
// Tercero	2	

// index + 1
// Primer elemento	1
// Segundo		2
// Tercero	 3