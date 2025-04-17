// FUNCIONES PARA ABRIR Y CERRAR MODALES
function abrirModal() {
  document.getElementById("modalLogin").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modalLogin").style.display = "none";
}

function abrirModal2() {
  document.getElementById("modalLogin").style.display = "none";
  document.getElementById("modal2Login").style.display = "flex";
}

function cerrarModal2() {
  document.getElementById("modal2Login").style.display = "none";
}

// CERRAR MODALES AL HACER CLIC FUERA DE ELLOS
window.onclick = function (e) {
  const modal1 = document.getElementById("modalLogin");
  const modal2 = document.getElementById("modal2Login");

  if (e.target === modal1) {
    cerrarModal();
  }

  if (e.target === modal2) {
    cerrarModal2();
  }
};

// TOGGLE PARA MENU (si lo estás usando en tu nav)
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// FUNCIÓN DE LOGIN
async function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const res = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert('✅ Login exitoso');
      // Puedes guardar el token si lo necesitas
      // localStorage.setItem('token', data.token);
      cerrarModal2();
    } else {
      alert(data.message || '❌ Credenciales incorrectas');
    }
  } catch (err) {
    console.error(err);
    alert('⚠️ Error al conectar con el servidor');
  }
}
