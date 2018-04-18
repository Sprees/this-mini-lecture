## This Overview

###Keywords:
- new: Wraps any function with an Object and sets `this` equal to newly created Object

- Implicit: context object, also referred to as an owning or containing object

- Explicit: Explicitly set `this` with call, apply, bind, etc.

- Default: standalone function invocation, this default binding to global scope or undefined

- Lexical Scope: Referenced within the block of code in which it's defined


##Reading Material/Sources
- [JavaScript is Sexy](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/README.md)

##Useful Quotes  
  > Similar to pronouns in the English language; “John is running fast because he is trying to catch the train.”
  
  > When a function executes, it gets the this property — a variable with the value of the object that invokes the function *where this is used.

  > The `this` reference ALWAYS refers to (and holds the value of) an object — a singular object — and it is usually used inside a function or a method, although it can be used outside a function in the global scope. 