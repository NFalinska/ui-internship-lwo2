### Make a Person

Fill in the object constructor with the following methods below:

*getFirstName()*

*getLastName()*

*getFullName()*

*setFirstName(first)*

*setLastName(last)*

*setFullName(firstAndLast)*

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

```javascript

class Person {
   constructor(fullName) {}

   // Complete the method below and implement the others    similarly
   getFullName() {
       return "";
   }
}


const bob = new Person('Bob Ross');
bob.getFullName();

```

Here are some helpful links:
* [Details of the Object Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)

Test suits:

bob instanceof Person should return true.

bob.firstName should return undefined.

bob.lastName should return undefined.

bob.getFirstName() should return "Bob".

bob.getLastName() should return "Ross".

bob.getFullName() should return "Bob Ross".

bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").

bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").

bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").

bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").

bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
