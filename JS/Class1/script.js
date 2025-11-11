// alert("hello")
// console.log("hi")

// Javascript

    // Versions --> ES6 -> EcmaScript 6
    // Old --> ES5

// Variables:

    // myAgeInTheSchoolTime = 10

    // console.log(myAgeInTheSchoolTime);

// Variable Declaration: (Hoisting)

    // Var -> ES5

        // var age = 20

        // var age = 40

        // console.log(age);
    
    // Let -> ES6

        //   let age = 20

        //   age = 30
        
        //   console.log(age);
  
    // Const -> ES6

        // const age = 20

        // console.log(age);
    
// Scoping:

    // Local scope --> let & const
    // Global scope  --> var

    {
        const a = 10

        console.log("inside: ", a);
        console.log("inside1: ", a);
        
    }

    console.log("outside: ", a);