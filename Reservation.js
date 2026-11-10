
export default class Reservation {
    #id;
    #reservationDate;
    #reservationTime;
    #status;
    #notes;

    constructor(id, reservationDate, reservationTime, status, notes) {
        this.#id = id;
        this.#reservationDate = reservationDate;
        this.#reservationTime = reservationTime;
        this.#status = status;
        this.#notes = notes;
    }

    get id() { return this.#id; }
    set id(id) { this.#id = id; }

    get reservationDate() { return this.#reservationDate; }
    set reservationDate(reservationDate) {
        this.#reservationDate = reservationDate;
    }

    get reservationTime() { return this.#reservationTime; }
    set reservationTime(reservationTime) {
        this.#reservationTime = reservationTime;
    }

    get status() { return this.#status; }
    set status(status) { this.#status = status; }

    get notes() { return this.#notes; }
    set notes(notes) { this.#notes = notes; }

    create() {
        console.log("Creating reservation");
    }

    selectById(id) {
        console.log("Selecting reservation with id " + id);
    }

    selectAll() {
        console.log("Selecting all reservations");
    }

    update() {
        console.log("Updating reservation");
    }

    deleteById(id) {
        console.log("Deleting reservation with id " + id);
    }
}
