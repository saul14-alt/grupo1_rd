// FUNCIONES PARA ABRIR Y CERRAR MODALES
function abrirModal() {
  document.getElementById("modalLogin").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modalLogin").style.display = "none";
}

function abrirModal2() {
  cerrarModal(); // Cierra el primero
  document.getElementById("modal2Login").style.display = "flex";
}

function cerrarModal2() {
  document.getElementById("modal2Login").style.display = "none";
}

// CERRAR MODALES AL HACER CLIC FUERA DE ELLOS
window.addEventListener("click", function (e) {
  const modal1 = document.getElementById("modalLogin");
  const modal2 = document.getElementById("modal2Login");

  if (e.target === modal1) cerrarModal();
  if (e.target === modal2) cerrarModal2();
});

// TOGGLE PARA MENU (si lo estás usando en tu nav)
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// FUNCIÓN DE LOGIN
async function handleLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("⚠️ Por favor ingresa correo y contraseña.");
    return;
  }

  try {
    const res = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Login exitoso");
      // localStorage.setItem('token', data.token); // Descomenta si usas token
      cerrarModal2();
    } else {
      alert(data.message || "❌ Usuario o contraseña incorrectos.");
    }
  } catch (err) {
    console.error("Error al conectar con el backend:", err);
    alert("⚠️ Error al conectar con el servidor");
  }
}

//SCRIT DE LA MISMA PAGINA PARA TODOS LOS PRODUCTOS

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch(`http://localhost:4000/api/product/${productId}`)
  .then(res => res.json())
  .then(product => {
    // Usas estos datos para llenar el HTML dinámicamente
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-img").src = product.imageURL;
    // etc...
  })
  .catch(err => console.error("Error al cargar el producto:", err));

  app.get("/api/product/:id", async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.json(product);
  });
  


