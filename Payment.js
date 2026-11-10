import PaymentMethod from "./PaymentMethod.js";

export default class Payment {
    #id;
    #amount;
    #paymentDate;
    #paymentMethod;
    #status;

    constructor(id, amount, paymentDate, paymentMethod, status) {
        this.#id = id;
        this.#amount = amount;
        this.#paymentDate = paymentDate;
        this.#paymentMethod = paymentMethod;
        this.#status = status;
    }

    // Getters y Setters
    get id() { return this.#id; }
    set id(id) { this.#id = id; }

    get amount() { return this.#amount; }
    set amount(amount) { this.#amount = amount; }

    get paymentDate() { return this.#paymentDate; }
    set paymentDate(paymentDate) {
        this.#paymentDate = paymentDate;
    }

    get paymentMethod() { return this.#paymentMethod; }
    set paymentMethod(paymentMethod) {
        this.#paymentMethod = paymentMethod;
    }

    get status() { return this.#status; }
    set status(status) { this.#status = status; }

    // Métodos CRUD
    create() {
        console.log("Creating payment");
    }

    selectById(id) {
        console.log("Selecting payment with id " + id);
    }

    selectAll() {
        console.log("Selecting all payments");
    }

    update() {
        console.log("Updating payment");
    }

    deleteById(id) {
        console.log("Deleting payment with id " + id);
    }
   
}
