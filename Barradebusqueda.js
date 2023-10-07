var resultados = [];
var indiceActual = 0;
var temporizador;

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
    resultados = [];
    indiceActual = 0;

    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].textContent.toLowerCase().includes(consulta.toLowerCase())) {
            resultados.push(elementos[i]);
            elementos[i].classList.add('parpadeo'); // Añade la animación de parpadeo
            setTimeout(function() {
                elementos[i].classList.remove('parpadeo'); // Elimina la animación de parpadeo después de 10 segundos
            }, 10000);
        }
    }

    if (resultados.length > 0) {
        resultados[0].scrollIntoView({behavior: "smooth"});
        document.getElementById('next-result').style.display = 'block';
        ocultarBotonDespuesDeTiempo(); // Llama a la función aquí
    } else {
        document.getElementById('next-result').style.display = 'none';
    }

    alert("Hay " + resultados.length + " resultados para '" + consulta + "'");

    mostrarBusqueda(); // Oculta la barra de búsqueda
}

function nextResult() {
    indiceActual = (indiceActual + 1) % resultados.length;
    resultados[indiceActual].scrollIntoView({behavior: "smooth"});
    ocultarBotonDespuesDeTiempo(); // Reinicia el temporizador aquí
}

/*OCULTAR BOTON EN UNOS SEGUNDOS */
function ocultarBotonDespuesDeTiempo() {
    clearTimeout(temporizador); // Limpia el temporizador anterior
    temporizador = setTimeout(function() {
        document.getElementById('next-result').style.display = 'none';
    }, 10000); // 10000 milisegundos son 10 segundos
}

/*CODIGO PARA ACTIVAR VOLVER ARRIBA */


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
