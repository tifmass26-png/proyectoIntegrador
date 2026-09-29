
//PERSON ES NUESTRA CLADSE ABSTRACTA
class Person {
    
#id ;
#name;
#gender;
#age;

//Constructor

constructor(id,name,gender,age){
    this.#id=id
    this.#name=name
    this.#gender=gender
    this.#age=age
}
//get and set

get id(){   return this.#id}
set id(id){this.#id=id}
get name(){  return this.#name}
set name(name) { this.#name=name}
get gender() {return this.#gender}
set gender(gender){ this.#gender=gender}
get age(){return this.#age}
set age(age){this.#age=age}

//metodos de la clase persona
create () {
    console.log("Creating Person");
}
selectById(id){console.log("Selecting person with id" + id);

}
selectAll(){console.log("Selecting all people");

}
update(){console.log("Updating person");

}
deleteById(id){console.log("Deleting person with id" + id);

}
// con este metodo vamos a aplicar polimorfismo en las clases de clientes y empleados atraves de la herencia
showOptions(){console.log("Person options");

}
}

//esta es la clase cliente que hereda de la clase persona   
 
class Customer extends Person {
    #phone;
    #address;           

    constructor(id,name,gender,age,phone,address){
        super(id,name,gender,age);
        this.#phone=phone;
        this.#address=address;
    }
    get phone(){return this.#phone}
    set phone(phone){this.#phone=phone}
    get address(){return this.#address}
    set address(address){this.#address=address}  
//metodos de la clase cliente CON POLIMORFISMO
showOptions(){
    console.log("Customer options");
    console.log("1. view services");
    console.log("2. make reservation");
    console.log("3. make payment");
    console.log("4. view reservation");
    console.log("5. cancel reservation");
    console.log("6. view history");
    console.log("7. contact OasisSpa");
}
}
//esta es la clase empleado que hereda de la clase persona
class Employee extends Person {
    #position;
    #salary;

    constructor(id,name,gender,age,position,salary){
        super(id,name,gender,age);
        this.#position=position;
        this.#salary=salary;
    }

    get position(){return this.#position}
    set position(position){this.#position=position} 
    get salary(){return this.#salary}
    set salary(salary){this.#salary=salary}

    ShowOptions(){console.log("Employee options");
        console.log("1. view services");
        console.log("2. manage reservations");
        console.log("3. manage payments");
        console.log("4. manage customers");
        console.log("5. manage employees");
        console.log("6. view history");
}
}


// creamos la clase servicio que no hereda de la clase persona
class Service {
    #id;
    #description;
    #benefit;
    #photo;
    #duration;
    #status;

    constructor(id,description,benefit,photo,duration,status){
        this.#id=id;
        this.#description=description;
        this.#benefit=benefit;
        this.#photo=photo;
        this.#duration=duration;
        this.#status=status;
    }

    get id(){return this.#id}
    set id(id){this.#id=id}
    get description(){return this.#description}
    set description(description){this.#description=description}
    get benefit(){return this.#benefit}
    set benefit(benefit){this.#benefit=benefit}
    get photo(){return this.#photo}
    set photo(photo){this.#photo=photo}
    get duration(){return this.#duration}
    set duration(duration){this.#duration=duration}
    get status(){return this.#status}
    set status(status){this.#status=status}
    //metodos de la clase servicio
    create(){console.log("Creating service");}
    selectById(id){console.log("Selecting service with id" + id);}
    selectAll(){console.log("Selecting all services");}
    update(){console.log("Updating service");}
    deleteById(id){console.log("Deleting service with id" + id);}   
    changeStatus(status){console.log("Changing service status to" + status);}
}
 

    class Reservation {
        #id;
        #reservationDate;
        #reservationTime;
        #status;
        #notes;

        constructor(id,reservationDate,reservationTime,status,notes){
            this.#id=id;
            this.#reservationDate=reservationDate;
            this.#reservationTime=reservationTime;
            this.#status=status;
            this.#notes=notes;
        }   
        //get and set
        get id(){return this.#id}
        set id(id){this.#id=id}
        get reservationDate(){return this.#reservationDate} 
        set reservationDate(reservationDate){this.#reservationDate=reservationDate}
        get reservationTime(){return this.#reservationTime}
        set reservationTime(reservationTime){this.#reservationTime=reservationTime}
        get status(){return this.#status}
        set status(status){this.#status=status}
        get notes(){return this.#notes}
        set notes(notes){this.#notes=notes}

        //metodos de la clase reserva
        create(){console.log("Creating reservation");}
        selectById(id){console.log("Selecting reservation with id" + id);}
        selectAll(){console.log("Selecting all reservations");}
        update(){console.log("Updating reservation");}
        deleteById(id){console.log("Deleting reservation with id" + id);}   
    }


    class Payment {
        #id;
        #amount;
        #paymentDate;
        #paymentMethod;
        #status;

        constructor(id,amount,paymentDate,paymentMethod,status){
            this.#id=id;
            this.#amount=amount;
            this.#paymentDate=paymentDate;
            this.#paymentMethod=paymentMethod;
            this.#status=status;
        }   
        //get and set
        get id(){return this.#id}
        set id(id){this.#id=id}
        get amount(){return this.#amount}
        set amount(amount){this.#amount=amount}
        get paymentDate(){return this.#paymentDate}
        set paymentDate(paymentDate){this.#paymentDate=paymentDate}
        get paymentMethod(){return this.#paymentMethod}
        set paymentMethod(paymentMethod){this.#paymentMethod=paymentMethod}
        get status(){return this.#status}
        set status(status){this.#status=status}

        //metodos de la clase pago
        create(){console.log("Creating payment");}
        selectById(id){console.log("Selecting payment with id" + id);}
        selectAll(){console.log("Selecting all payments");}
        update(){console.log("Updating payment");}
        deleteById(id){console.log("Deleting payment with id" + id);}   
    }
    