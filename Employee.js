
import Person from "./Person.js";

// CLASE EMPLOYEE (HEREDA DE PERSON)
export default class Employee extends Person {
    #position;
    #salary;

    constructor(id, name, gender, age, position, salary) {
        super(id, name, gender, age);
        this.#position = position;
        this.#salary = salary;
    }

    // Getters y Setters
    get position() {
        return this.#position;
    }

    set position(position) {
        this.#position = position;
    }

    get salary() {
        return this.#salary;
    }

    set salary(salary) {
        this.#salary = salary;
    }

    // Métodos de Employee
    showOptions() {
        console.log("Employee options");
        console.log("1. view services");
        console.log("2. manage reservations");
        console.log("3. manage payments");
        console.log("4. manage customers");
        console.log("5. manage employees");
        console.log("6. view history");
    }

}
