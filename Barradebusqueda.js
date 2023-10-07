function mostrarBusqueda() {
    var x = document.getElementById("busqueda-grande");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function buscarEnLaPagina() {
    var consulta = document.querySelector("#busqueda-grande .search-container input[type='text']").value;

    if (consulta.trim() === '') {
        alert("PARA REALIZAR BUSQUEDAS ULTILICE TEXTO"); // Muestra una alerta con el mensaje de advertencia
        return; // No se realiza ninguna búsqueda si el campo está vacío
    }
    

    var elementos = document.getElementsByTagName('td');
    var primerResultado = null;


    

    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].textContent.toLowerCase().includes(consulta.toLowerCase())) {
            elementos[i].classList.add('parpadeo'); // Añade la animación de parpadeo
            setTimeout(function() {
                elementos[i].classList.remove('parpadeo'); // Elimina la animación de parpadeo después de 3 segundos
            }, 3000);
            if (!primerResultado) {
                primerResultado = elementos[i];
            }
        } else {
            elementos[i].style.backgroundColor = ''; // Quita el resaltado de los elementos que no contienen la consulta de búsqueda
        }
    }

    if (primerResultado) {
        primerResultado.scrollIntoView({behavior: "smooth"});
    }

    mostrarBusqueda(); // Oculta la barra de búsqueda
}

// Obtener el botón
var mybutton = document.getElementById("btnTopo");

// Cuando el usuario se desplaza hasta la tabla, muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var tabla = document.getElementById("tabla1");
  var posicionTabla = tabla.offsetTop;
  if (window.pageYOffset > posicionTabla) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Cuando el usuario hace clic en el botón, desplázate hasta la sección de discord
function topFunction() {
  var discord = document.getElementsByClassName("discord")[0];
  discord.scrollIntoView({behavior: "smooth"});
}
