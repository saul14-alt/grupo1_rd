function mostrarSeccion() {
    const seccion = document.getElementById('seccionProducto');
    if (seccion.style.display === 'none' || seccion.style.display === '') {
      seccion.style.display = 'block';
    } else {
      seccion.style.display = 'none';
    }
  }
  