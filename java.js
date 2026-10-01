// ==========================================
// CONTROLADOR DE INTERFAZ (UI) - OasisSpa
// ==========================================

class AppSpa {
  constructor() {
    this.carritoServicios = [];
    this.MAX_SERVICIOS = 4;

    // Referencias a los IDs del DOM HTML
    this.selectServicio = document.getElementById('select-servicio');
    this.btnAgregar = document.getElementById('btn-agregar-servicio');
    this.listaCarrito = document.getElementById('lista-carrito');
    this.totalPagar = document.getElementById('total-pagar');
    this.formCheckout = document.getElementById('form-checkout');

    this.inicializarEventos();
  }

  inicializarEventos() {
    if (this.btnAgregar) {
      this.btnAgregar.addEventListener('click', () => this.agregarServicio());
    }

    if (this.formCheckout) {
      this.formCheckout.addEventListener('submit', (e) => this.procesarReserva(e));
    }
  }

  agregarServicio() {
    if (this.carritoServicios.length >= this.MAX_SERVICIOS) {
      alert(`Límite alcanzado: Máximo ${this.MAX_SERVICIOS} servicios por reserva.`);
      return;
    }

    if (!this.selectServicio || !this.selectServicio.value) {
      alert('Por favor, selecciona un servicio del menú.');
      return;
    }

    const valorSelect = this.selectServicio.value;
    const [nombre, precioStr] = valorSelect.split('|');
    const precio = parseFloat(precioStr);

    // Instancia de Service usando la clase definida en models.js
    const nuevoServicio = new Service(
      Date.now(),
      nombre, // description
      `Servicio de relajación: ${nombre}`, // benefit
      "imagenes/spaversion2.png", // photo (corregido "imagines" a "imagenes")
      60, // duration
      "Disponible" // status
    );

    // Variable auxiliar para el precio
    nuevoServicio.precioAux = precio;

    this.carritoServicios.push(nuevoServicio);
    this.actualizarVistaCarrito();
  }

  eliminarServicio(indice) {
    this.carritoServicios.splice(indice, 1);
    this.actualizarVistaCarrito();
  }

  actualizarVistaCarrito() {
    if (!this.listaCarrito) return;

    this.listaCarrito.innerHTML = '';
    let totalAcumulado = 0;

    this.carritoServicios.forEach((servicio, index) => {
      totalAcumulado += servicio.precioAux;

      const li = document.createElement('li');
      li.style.display = 'flex';
      li.style.justifyContent = 'space-between';
      li.style.alignItems = 'center';
      li.style.margin = '6px 0';
      li.style.fontSize = '14px';

      li.innerHTML = `
        <span>${servicio.description} - $${servicio.precioAux.toLocaleString('es-CO')}</span>
        <button type="button" class="btn-eliminar-item" data-index="${index}" style="background:none; border:none; color:red; cursor:pointer; font-weight:bold;">❌</button>
      `;

      this.listaCarrito.appendChild(li);
    });

    if (this.totalPagar) {
      this.totalPagar.textContent = `$${totalAcumulado.toLocaleString('es-CO')}`;
    }

    // Asignación de eventos a los botones de eliminar
    const botonesEliminar = this.listaCarrito.querySelectorAll('.btn-eliminar-item');
    botonesEliminar.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const index = e.currentTarget.getAttribute('data-index');
        this.eliminarServicio(index);
      });
    });
  }

  procesarReserva(e) {
    e.preventDefault();

    if (this.carritoServicios.length === 0) {
      alert('Debes agregar al menos un servicio al carrito antes de pagar.');
      return;
    }

    const nombre = document.getElementById('cliente-nombre').value.trim();
    const telefono = document.getElementById('cliente-telefono').value.trim();
    const metodoPagoStr = document.getElementById('metodo-pago').value;
    const observaciones = document.getElementById('observaciones').value.trim();

    // 1. Instancia Customer (Hereda de Person)
    const cliente = new Customer(
      Date.now(),
      nombre,
      "No especificado",
      30,
      telefono,
      "Medellín, Colombia"
    );

    // 2. Cálculo de Total e Instancia Payment
    const totalCalculado = this.carritoServicios.reduce((acc, s) => acc + s.precioAux, 0);
    const pago = new Payment(
      'PAG-' + Date.now(),
      totalCalculado,
      new Date().toISOString(),
      metodoPagoStr,
      "COMPLETADO"
    );

    // 3. Instancia Reservation
    const nuevaReserva = new Reservation(
      'RES-' + Date.now(),
      new Date().toLocaleDateString('es-CO'),
      new Date().toLocaleTimeString('es-CO'),
      "CONFIRMADA",
      observaciones
    );

    // Estructura Unificada de la Reserva
    const registroCompleto = {
      reservaId: nuevaReserva.id,
      cliente: {
        nombre: cliente.name,
        telefono: cliente.phone
      },
      pago: {
        monto: pago.amount,
        metodo: pago.paymentMethod,
        estado: pago.status
      },
      servicios: this.carritoServicios.map(s => ({
        nombre: s.description,
        duracion: s.duration
      })),
      observaciones: nuevaReserva.notes
    };

    // 4. Guardar en LocalStorage usando GestorAlmacenamiento
    GestorAlmacenamiento.guardarReserva(registroCompleto);

    alert(`¡Reserva confirmada con éxito!\nCódigo: ${nuevaReserva.id}\nCliente: ${cliente.name}\nTotal: $${totalCalculado.toLocaleString('es-CO')}`);

    // Reiniciar formulario y vista
    this.formCheckout.reset();
    this.carritoServicios = [];
    this.actualizarVistaCarrito();
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new AppSpa();
});