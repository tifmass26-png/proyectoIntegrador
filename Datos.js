// ==========================================
// ADMINISTRADOR DE LOCAL STORAGE (Datos.js)
// ==========================================

class GestorAlmacenamiento {
    // Se corrigió el typo: Clave_Resevas -> Clave_Reservas
    static Clave_Reservas = `oasis_spa_reservas`;

    // Obtener la lista de reservas guardadas
    static obtenerReservas() {
        const datos = localStorage.getItem(this.Clave_Reservas);
        return datos ? JSON.parse(datos) : [];
    }

    // Guardar una nueva reserva
    static guardarReserva(reserva) {
        const reservasActuales = this.obtenerReservas();
        reservasActuales.push(reserva);
        localStorage.setItem(this.Clave_Reservas, JSON.stringify(reservasActuales));
    }

    // Limpiar el historial
    static limpiarHistorial() {
        localStorage.removeItem(this.Clave_Reservas);
    }
}