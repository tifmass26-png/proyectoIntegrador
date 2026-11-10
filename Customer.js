import Person from "./Person.js";

export default class Customer extends Person {
    #phone;
    #address;

    constructor(id, name, gender, age, phone, address) {
        super(id, name, gender, age);
        this.#phone = phone;
        this.#address = address;
    }

    // Getters y Setters
    get phone() { return this.#phone; }
    set phone(phone) { this.#phone = phone; }
    get address() { return this.#address; }
    set address(address) { this.#address = address; }
    //METODOS DE CUSTOMER
    showOptions() {
        console.log("Customer options");
        console.log("1. view services");
        console.log("2. make reservation");
        console.log("3. make payment");
        console.log("4. view reservations");
        console.log("5. cancel reservation");
        console.log("6. view history");
        console.log("7. contact OasisSpa");
            
    }

}
