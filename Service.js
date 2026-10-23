
export default class Service {
    #id;
    #description;
    #benefit;
    #photo;
    #duration;
    #status;

    constructor(id, description, benefit, photo, duration, status) {
        this.#id = id;
        this.#description = description;
        this.#benefit = benefit;
        this.#photo = photo;
        this.#duration = duration;
        this.#status = status;
    }

    // Getters y Setters
    get id() { return this.#id; }
    set id(id) { this.#id = id; }

    get description() { return this.#description; }
    set description(description) { this.#description = description; }

    get benefit() { return this.#benefit; }
    set benefit(benefit) { this.#benefit = benefit; }

    get photo() { return this.#photo; }
    set photo(photo) { this.#photo = photo; }

    get duration() { return this.#duration; }
    set duration(duration) { this.#duration = duration; }

    get status() { return this.#status; }
    set status(status) { this.#status = status; }

    // Métodos CRUD
    create() {
        console.log("Creating service");
    }

    selectById(id) {
        console.log("Selecting service with id " + id);
    }

    selectAll() {
        console.log("Selecting all services");
    }

    update() {
        console.log("Updating service");
    }

    deleteById(id) {
        console.log("Deleting service with id " + id);
    }

    changeStatus(status) {
        console.log("Changing service status to " + status);
    }
    
}
