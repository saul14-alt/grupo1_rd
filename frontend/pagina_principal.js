
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


function abrirModal2() {
    document.getElementById("modal2Login").style.display = "flex";
  }

  function cerrarModal2() {
    document.getElementById("modal2Login").style.display = "none";
  }

  // Cierra al hacer clic fuera del modal
  
  window.onclick = function(e) {
    const modal2 = document.getElementById("modal2Login");
    if (e.target === modal2) {
      cerrarModal2();
    }
  }



  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
  });

  