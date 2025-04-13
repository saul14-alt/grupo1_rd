
//FUNCION DEL MODAL

function abrirModal() {
    document.getElementById("modalLogin").style.display = "flex";
  }

  function cerrarModal() {
    document.getElementById("modalLogin").style.display = "none";
  }

  // Cierra al hacer clic fuera del modal
  
  window.onclick = function(e) {
    const modal = document.getElementById("modalLogin");
    if (e.target === modal) {
      cerrarModal();
    }
  }