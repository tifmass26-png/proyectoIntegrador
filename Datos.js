//Datos.js administrador de local storage
class GestorAlmacenamiento{static Clave_Resevas = `oasis_spa_reservas`;

    static obtenerReservas () {
        const datos = localStorage.getItem(this.Clave_Resevas);
        return datos ?
    JSON.parse(datos) : [];}

    static guardarReserva (reserva) {
        const reservasActuales = this.obtenerReservas();
        reservasActuales.push(reserva);
        localStorage.setItem(this.Clave_Resevas, JSON.stringify(reservasActuales));
    }

}