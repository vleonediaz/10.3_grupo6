document.addEventListener('DOMContentLoaded', () => {

    function cargar() { // Función para cargar los elementos del Local Storage.
      let items = JSON.parse(localStorage.getItem('items')) || [];
      const contenedor = document.getElementById('contenedor');
      contenedor.innerHTML = '';
  
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        contenedor.appendChild(li); // Cambié listaItems por contenedor
      });
    }
  
    function limpiarItems() { // Cambié el nombre de la función para evitar conflicto
      localStorage.removeItem('items');
      cargar();
    }
  
    function nuevoItem(item) { // Función para guardar nuevo elemento en Local Storage.
      const items = JSON.parse(localStorage.getItem('items')) || [];
      items.push(item);
  
      localStorage.setItem('items', JSON.stringify(items));
  
      cargar();
    }
  
    const agregar = document.getElementById('agregar');
    agregar.addEventListener('click', () => { // Evento para agregar elemento al hacer click
      const item = document.getElementById('item').value;
      if (item.trim()) {
        nuevoItem(item);
        document.getElementById('item').value = '';
      }
    });
  
    const limpiarBtn = document.getElementById('limpiar'); // Cambié el nombre a limpiarBtn
    limpiarBtn.addEventListener('click', () => { // Evento para eliminar todos los ítems al hacer click
      limpiarItems(); // Usar la función limpiarItems
    });
  
    cargar(); // Cargar todos los elementos
  
  });
  


