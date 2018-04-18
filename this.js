// WHAT IS GLOBAL CONTEXT?
// the browser window or the global Object in Node

// Run node in terminal and show this === global, this is true inside Node repl
// In the brower, this === window


// The value of a functions `this` argument is dictated by where it is called
// `this` context has nothing to do with where a function is declared, and everything to do with where a function is invoked.

// console.log(this)
// console.log(this === global)
// console.log(global === module.exports)
// function func1() {
// 	console.log(this === global)
// }
// func1()


// 4 RULES OF THIS 
// 1. Is the function called with new (new binding)? If so, `this` is the newly constructed object.

	// Here is a function:
	// function foo() {console.log(this)}

	// // we call it with the `new` keyword:
	// var bar = new foo()

	// // shows that foo is in fact a function
	// console.log(typeof foo)

	// // the variable bar where foo is invoked with the `new` keyword, shows it's now an object
	// console.log(typeof bar)

// 2. Is the function called with call or apply (explicit binding), `this` is the explicitly specified object.
// Call will invoke the function with the explicit `this` context that you provide:
// foo.call( obj)

// now lets give call an argument:
// foo.call(obj, 'Hello')

// Apply is almost exactly the same as Call except for the arguments you pass it takes an array
// foo.apply(obj, ['hello'])


// // Bind will bind the `this` context that you provide, but must be invoked manually
// let bar = foo.bind( obj )
// bar()
// "use strict"
// function foo(anArgument) { console.log(this); console.log(anArgument) }

// let obj = {
// 	name: 'Alex',
// 	foo: foo
// }
// 3. Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.
// var bar = obj.foo()

	// If we didn't invoke foo() when declaring the bar variable, foo loses it's implicit `this`, because of the Default rule, standalone function invocation:
	// var bar = obj.foo
	// bar()

// 4. Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.
	// var bar = foo()






// Global variables
// RUN THIS IN THE BROWSER, IT DOES NOT WORK PROPERLY WITH QUOKKA
// var name = 'Jax'
// var breed = 'Mutt'

// const dog = {
//   name: 'Bentley',
//   breed: 'Labrador Retriever',
//   concat: function() {
// 		// without using the `this` keyword you will be accessing the lexical scope, which will be the global variables
// 		console.log(name + ' ' + breed)

// 		// the context of `this` is the `dog` Object. So the below code:
// 		// console.log(this)
// 		console.log(this.name + ' the ' + this.breed)
		
// 		// is the same as this:
		
//     console.log(dog.name + ' the ' + dog.breed)
// 	},
	
// 	// Now lets see what the context of an arrow function is!
//   arrowFunc: () => {
// 		var self = dog
// 		console.log(this === module.exports)
// 		// console.log(this.name + ' ' + this.breed)
//     console.log(self.name + ' ' + self.breed)
//   }
// }
// // dog.concat()

// // dog.arrowFunc()
// dog.arrowFunc.bind(dog)()


// "use strict"
// function func() {
//   console.log(this === global)
//   console.log(this === undefined)
// }
// func()

// // Functions have properties, because they are ultimately Objects
// func.boom = 'boom'
// console.log(func)

// func() /* This is where the `this` context is decided, at the function invocation */

// function Person(first, last) {
//   this.first = first
//   this.last = last
// }

// class APerson {
//   constructor(first, last) {
//     this.first = first
//     this.last = last
//   }
// }

// // Without the `new` keyword, it defaults to the global object:
// 	// const person = Person('Alex', 'Minnick')
// 	// console.log(global.first,global.last)

// 	delete global.first && delete global.last 


// // with `new` it wraps it with an object creating a new `this` context:
// 	const newPerson = new Person('Brent', 'Eckert')
// 	console.log(global.first, global.last)
// 	console.log(newPerson.first, newPerson.last)


// using a Class will prevent variables being added to the global Object when forgetting to use the `new` keyword
	// const theRock = APerson('Dwayne', 'Johnson')
	// console.log(theRock)

	// const proWrestler = new APerson('John', 'Cena ')
	// console.log(proWrestler)







// var person = {
//   first: 'Tyler',
//   last: 'Miller',
//   showFullName: function() {
//     console.log(this.first + ' ' + this.last)
//   }
// }

// var anotherPerson = {
//   first: 'Jim',
//   last: 'Bob'
// }

// We can EXPLICITLY give a `this` context to any function:
	// person.showFullName()
	// person.showFullName.apply(anotherPerson)

// `this` is defined by the context in which the function is invoked!


// you will lose the implicit `this` context
	// Function declaration
	function foo() {
	  console.log(this.bar)
	}
	// // // This shows the default `this`, being accessed
	// let bar = 0
	// foo()
	
	// let obj1 = {
	//   bar: 1,
	//   // reference to foo, where the context is obj1
	//   foo: foo
	// }

	// let obj2 = {
	//   bar: 2,
	//   // reference to obj1, where the context is obj2
	//   obj1: obj1
	// }

	// // Only the top (last) level of an object property reference chain matters to the call site.
	// obj2.obj1.foo()





function foo() {
  console.log( this.a )
}

var obj = {
  a: 2,
	foo: foo
};

var bar = obj.foo; // function reference/alias!
a = "oops, global" // `a` also property on global object

bar(); // "oops, global" /* We have invoked the function in the global scope ( default `this` ) */




// Find the CALL SITE of the function, that is where `this` is defined:
	// function foo() {
	// 	console.log( this.a );
	// }

	// var obj = {
	// 	a: 2,
	// 	foo: foo
	// };
	// function doFoo(fn) {
	// 	// `fn` is just another reference to `foo`
	// 	fn()
	// }


	// let a = "oops, global"

	// doFoo( obj.foo ) // "oops, global"


// // THE SCOPE CHAIN
// // from top to bottom: fourth, third, second, first, global
// // all functions have access to the global scope and because each function is a standalone invocation, the this context is the browser window || global
	// function first() {
	// 	console.log(this)
	// 	second();
	// 	function second() {
	// 		console.log(this)
	// 			third();
	// 			function third() {
	// 				console.log(this)
	// 					fourth();
	// 					function fourth() {
	// 						console.log(this)
	// 							// do something
	// 					}
	// 			}
	// 	}   
	// }
	// first();