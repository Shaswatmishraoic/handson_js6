// Parent object constructor
function Parent() {}

// Method attached to the parent object's prototype
Parent.prototype.greet = function() {
  console.log('Hello from the parent!');
};

// Child object constructor
function Child() {}

// Set the prototype of the child object to an instance of the parent object
Child.prototype = new Parent();

// Create an instance of the child object
var childObj = new Child();

// Call the method from the parent object's prototype using the child object
childObj.greet(); // Output: Hello from the parent!
//1

// Parent object constructor
function Parent(name) {
    this.name = name;
  }
  
  // Method attached to the parent object's prototype
  Parent.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Child object constructor
  function Child(name, age) {
    // Call the parent object's constructor
    Parent.call(this, name);
    this.age = age;
  }
  
  // Set up prototype chaining
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  
  // Method attached to the child object's prototype
  Child.prototype.introduce = function() {
    console.log(`I'm ${this.name} and I'm ${this.age} years old.`);
  };
  
  // Create an instance of the child object
  var childObj = new Child('Alice', 8);
  
  // Access and use methods from both parent and child objects
  childObj.greet();    // Output: Hello, my name is Alice
  childObj.introduce(); // Output: I'm Alice and I'm 8 years old.
  //2

   // Add method to calculate sum to Array prototype
Array.prototype.calculateSum = function() {
    return this.reduce(function(total, num) {
      return total + num;
    }, 0);
  };
  
  // Create arrays
  var array1 = [1, 2, 3, 4, 5];
  var array2 = [10, 20, 30, 40, 50];
  var array3 = [2, 4, 6, 8, 10];
  
  // Calculate sum for array1
  var sum1 = array1.calculateSum();
  console.log('Sum of array1:', sum1); // Output: Sum of array1: 15
  
  // Calculate sum for array2
  var sum2 = array2.calculateSum();
  console.log('Sum of array2:', sum2); // Output: Sum of array2: 150
  
  // Calculate sum for array3
  var sum3 = array3.calculateSum();
  console.log('Sum of array3:', sum3); // Output: Sum of array3: 30
  //3

  function getAllPropertyNames(obj) {
    var names = [];
  
    // Iterate over object and its prototypes
    while (obj) {
      var objNames = Object.getOwnPropertyNames(obj);
  
      // Add object's property names to the names array
      objNames.forEach(function(name) {
        if (!names.includes(name)) {
          names.push(name);
        }
      });
  
      // Move to the next prototype
      obj = Object.getPrototypeOf(obj);
    }
  
    return names;
  }
  
  // Example usage
  var person = {
    name: 'John',
    age: 30
  };
  
  var employee = Object.create(person);
  employee.id = 123;
  employee.salary = 5000;
  
  var propertyNames = getAllPropertyNames(employee);
  console.log(propertyNames);
  // Output: ["id", "salary", "name", "age"]
  //4