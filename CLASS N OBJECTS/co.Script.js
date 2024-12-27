// CLASS AND OBJECT.
// ABOUT PROPERTIES AND METHODS.


// const student = {
//     fullName : "khaleel",
//     marks : 95,


//     printMarks: function (){
//         console.log("marks =", this.marks); //student.marks
//     }

// };





// EXAMPLE OF HOW PROTOTYPES ARE HAVING INBULIT WHEN WE WRITE AN SINGLE OBJECT ASLO.



// const employee ={
//     calTax(){
//         console.log("tax rate is 10%")
//     },
// };
// const khaleel = {
//     salary : 5000,
//     calcTax() {
//         console.log ("tax rate is 20%");     
//     },
// };
// khaleel.__proto__=employee;




// CLASS IN JS:

// class ToyatoCar {
//     start(){
//     console.log("start")
//  }
//  stop(){
//     console.log("stop");
//  }

//  setBrand(brand){
//     this.brand = brand;
//   }
// }

// let fortuner = new ToyatoCar();
// fortuner.setBrand("fortuner");
// let lexus = new ToyatoCar();
// lexus.setBrand("lexus");



// CONSTRUCTOR:

// class ToyatoCar {
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start(){
//     console.log("start")
//  }
//  stop(){
//     console.log("stop");
//  }

// }

// let fortuner = new ToyatoCar("fortuner",10); //constructor
// console.log(fortuner);

// let lexus = new ToyatoCar("lexus",12);    //constructor
// console.log(lexus);




// INHERITANCE IN JS: EXAMPLE PROGRAM:

// class Parent {
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent{}

// let obj = new Child();



// EXPMALE PROGRAM:



// class Person {
//       constructor(){
//         this.species = "homo sapiens";
//     }

//     eat() {
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep")
//     }
//     work(){
//         console.log("do nothing");
//     }
// }


// class Engnieer extends Person{
//     work(){
//         console.log("solve problems, bulid something");

//     }
// }
// class Doctor extends Person {
//     work(){
//         console.log("treat patients");
//     }
// }

// let khaleelobj = new Engnieer();




// SUPER KEYWORD:



// class Person {
//     constructor(name){
//       this.species = "homo sapiens";
//       this.name = name;
//   }

//   eat() {
//       console.log("eat");
//   }
// }
// class Engnieer extends Person{
//   constructor(name){
//     super(name);
//   }

//   work(){
//     super.eat();
//     console.log("solve problems, bulid something");

//   }
// }
// let engobj = new Engnieer("khaleel");

// ERROR HANDLING:



// let a= 5;
// let b= 10;
// console.log("a =", a);
// console.log("b =", b);
// console.log("a+b =", a+b);
// try {
//     console.log("a+b =", a+c);
//     }catch(err){
//         console.log(err)
// }

// console.log("a+b =", a+b);
// console.log("a+b =", a+b);
// console.log("a+b =", a+b);
// console.log("a+b =", a+b);
// console.log("a+b =", a+b);
// console.log("a+b =", a+b);











// Qs. You are creating a website for your college. Create a class User with 2 properties, name & کہا email. It also has a method called viewData() that allows user to view website data.




// let DATA = "secret information";
 
// class User {
//     Constructor(name, email){
//         this.name = name;
//         this.name = email;
//     }

//     veiwData(){
//         console.log("data = ",DATA);
//     }
// }

// let student1 = new User ("khaleel", "khale@gmail.com");
// let student2 = new User ("icon", "icon@gmail.com");

// let teacher1 = new User ("Dean", "dean@gmail.com");





// Qs. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.



let DATA = "secret information";
 
class User {
    Constructor(name, email){
        this.name = name;
        this.name = email;
    }

    veiwData(){
        console.log("data = ",DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "some new value"
    }
}

let student1 = new User ("khaleel", "khale@gmail.com");
let student2 = new User ("icon", "icon@gmail.com");

let teacher1 = new User ("Dean", "dean@gmail.com");

let admin1 = new Admin("admin", "admin@gmail.com");






















