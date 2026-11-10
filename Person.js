export default class Person {
    #id;
    #name;
    #gender;
    #age;

    constructor(id, name, gender, age) {
        this.#id = id;
        this.#name = name;
        this.#gender = gender;
        this.#age = age;
    }

    // Getters y Setters
    get id() { return this.#id; }
    set id(id) { this.#id = id; }
    get name() { return this.#name; }
    set name(name) { this.#name = name; }
    get gender() { return this.#gender; }
    set gender(gender) { this.#gender = gender; }
    get age() { return this.#age; }
    set age(age) { this.#age = age; }

    // Métodos CRUD base
    create() { console.log("Creating Person"); }
    selectById(id) { console.log("Selecting person with id " + id); }
    selectAll() { console.log("Selecting all people"); }
    update() { console.log("Updating person"); }
    deleteById(id) { console.log("Deleting person with id " + id); }

    // Polimorfismo
    showOptions() { console.log("Person options"); }
    
}
