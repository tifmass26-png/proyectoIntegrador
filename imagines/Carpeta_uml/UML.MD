```mermaid
classDiagram

class Person {
    +int id
    +String name
    +String gender
    +int age
}

class Customer {
    +String phone
    +String address
}

class Employee {
    +int serviceId
}

class ContactMessage {
    +int id
    +String name
    +String email
    +String message
    +Date date
    +String status
}

class Reservation {
    +int id
    +Date reservationDate
    +String reservationTime
    +String status
    +String notes
}

class Payment {
    +int id
    +double amount
    +Date paymentDate
    +String status
}

class Service {
    +int id
    +String description
    +String benefit
    +String photo
    +int duration
    +String status
}

class Product {
    +int id
    +String name
    +String brand
}

class Inventory {
    +int id
    +int quantity
    +int minimumStock
    +Date lastUpdate
}

class PaymentMethod {
    <<enumeration>>
    CASH
    BANK_TRANSFER
    CREDIT_CARD
    DEBIT_CARD
}

%% Herencia
Person <|-- Customer
Person <|-- Employee

%% Relaciones
Customer --> Reservation : makes
Reservation --> Service : is_for
Employee --> Service : manages
Customer --> Employee : assigned_to
Customer --> ContactMessage : sends
Payment --> PaymentMethod : uses
Payment --> Reservation : pays
Product --> Service : uses
Product --> Inventory : registered_in