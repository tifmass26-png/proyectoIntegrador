//Datos.js administrador de local storage 
class GestorAlmacenamiento{static Clave_Resevas = `oasis_spa_reservas`;

//lista de reservas guardas en localStorage

    static obtenerReservas () {
        const datos = localStorage.getItem(this.Clave_Resevas);
        return datos ?
    JSON.parse(datos) : [];}

//Logica para guardar las reservas en el localStorage
    static guardarReserva (reserva) {
        const reservasActuales = this.obtenerReservas();
        reservasActuales.push(reserva);
        localStorage.setItem(this.Clave_Resevas, JSON.stringify(reservasActuales));
    }

//Logica para limpiar el historial del localStorage
    static limpiarHistorial(){
        localStorage.removeItem(this.Clave_Resevas)
    }
}