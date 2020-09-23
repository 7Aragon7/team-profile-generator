// TODO: Write code to define and export the Employee class
// const john = {
//     name: "Aragon",
//     goToClass(){
//         console.log(`YAY ${this.name} IS IN CLASS!`)
//     }
// }

// john.goToClass()

// class Person {
//     constructor(name, age, gender){
//         this.name = name
//         this.age = age
//         this.gender = gender
//         this.species = "homosapien"
//         this.isHuman = true
//         this.isLord = name === "Aragon" ? true : false
//     }
// }

// const john = new Person("Aragon", 34, "male");
// const chad = new Person("Chad", 32, "male");
// console.log(john);
// Person.prototype.makeMillionaire = function(){
//     this.networth = 1000000
// };

// john.makeMillionaire();
// console.log(john);
// console.log(chad)


class Employee {
    constructor(name, id, email, role) {
        this.name = name
        this.id = id
        this.email = email
        this.role = role || "Employee"
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return this.role
    }
}

module.exports = Employee


