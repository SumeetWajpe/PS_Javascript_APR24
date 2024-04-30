// var person = {
//   name: "Amit",
//   greet: function (theGreeting) {
//     console.log(theGreeting + " " + this.name + " !");
//   },
// };

// person.greet("Hello");

// var anotherPerson = { name: "Romit" };
// // call , apply , bind
// person.greet.call(anotherPerson, "Hey");
// person.greet.apply(anotherPerson, ["Hola"]);

// // bind

// var greetbindedWithAnotherPerson = person.greet.bind(anotherPerson);
// // after 100 lines

// greetbindedWithAnotherPerson("Hi");
// greetbindedWithAnotherPerson("Bye");

//   function Test() {
//     console.log(this);
//   }

//   //Test();
//   Test.call(anotherPerson);

//   function Shape() {
//     this.length = 10;
//     this.breadth = 20;
//   }

//   function Rect() {
//     Shape.call(this);
//     this.isSquare = false;
//   }
//   var r = new Rect();

function Callback() {
  console.log(this.salary);
}

function Emp() {
  this.salary = 200000;
  setTimeout(Callback.bind(this), 3000);
  console.log("Printed immediately after settimeOut !");
}

var e = new Emp();
