// FUNCIONES PARA ABRIR Y CERRAR MODALES
function abrirModal() {
  document.getElementById("modalLogin").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modalLogin").style.display = "none";
}

function abrirModal2() {
  cerrarModal(); 
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
const response = await fetch(`http://localhost:4000/api/products/${productId}`);



fetch(`http://localhost:4000/api/products/${productId}`)
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

















  


  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResultsContainer = document.getElementById('search-results');
  
    // Función para realizar la búsqueda de productos
    async function searchProducts(query) {
      if (!query.trim()) {
        searchResultsContainer.innerHTML = ''; // Limpiar resultados si no hay búsqueda
        return;
      }
  
      try {
        // Hacer la solicitud a la API pasando el término de búsqueda
        const response = await fetch(`http://localhost:4000/api/products?search=${query}`);
        
        // Verificar si la respuesta es correcta
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
  
        const products = await response.json();
  
        // Limpiar los resultados anteriores
        searchResultsContainer.innerHTML = '';
  
        // Si no se encuentran productos
        if (products.length === 0) {
          searchResultsContainer.innerHTML = '<p>No se encontraron productos.</p>';
          return;
        }
  
        // Mostrar los productos encontrados
        products.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.classList.add('search-result-item');
          
          productDiv.innerHTML = `
            <a href="pagina_producto.html?id=${product._id}" class="product-link">
              <img src="${product.imageURL}" alt="${product.name}" class="product-img">
              <div class="product-info">
                <h4>${product.name}</h4>
                <p>$${(product.price * (1 - product.discount / 100)).toFixed(2)}</p>
              </div>
            </a>
          `;
  
          searchResultsContainer.appendChild(productDiv);
        });
      } catch (error) {
        console.error('Error al buscar productos:', error);
        searchResultsContainer.innerHTML = '<p>Hubo un error al realizar la búsqueda.</p>';
      }
    }
  
    // Event listener para el botón de búsqueda
    searchButton.addEventListener('click', () => {
      const query = searchInput.value;
      searchProducts(query);
    });
  
    // También buscar cuando el usuario presiona "Enter"
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value;
        searchProducts(query);
      }
    });
  });

  
  app.get('/api/products', async (req, res) => {
    const { search } = req.query; // Obtenemos el término de búsqueda
  
    try {
      const products = await Product.find({
        name: { $regex: search, $options: 'i' } // Buscamos productos cuyo nombre coincida con el término
      });
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener productos', error });
    }
  });

  

  let currentSlide = 0;

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = images.length - 1;
  if (currentSlide >= images.length) currentSlide = 0;
  updateCarousel();
}

function updateCarousel() {
  const img = document.getElementById("carouselImage");
  const title = document.getElementById("infoTitle");
  const text = document.getElementById("infoText");
  const button = document.getElementById("button");

  img.style.opacity = 0;

  setTimeout(() => {
    img.src = images[currentSlide].src;
    title.textContent = images[currentSlide].title;
    text.textContent = images[currentSlide].text;
    button.onclick = () => {
      window.location.href = images[currentSlide].link;
    };
    img.style.opacity = 1;
  }, 250);
}

// Inicializa al cargar
updateCarousel();
