// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and 
// returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.
// Review javaScript test syntax with expect statement: describe... test...functionName().toEqual()
// Input: array. Output: array. Function: infoTaker().
describe("The infoTaker function.", () =>{
  test("takes in an array of objects and returns an array with a sentence about person.", () =>{
    var people = [
      { name: "ford prefect", occupation: "hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "radio employee" }
    ]
    
    var expected =['Ford Prefect is a hitchhiker.', 'Zaphod Beeblebrox is a president of the galaxy.', 'Arthur Dent is a radio employee.']
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(infoTaker(people)).toEqual(expected)
    expect(infoTaker('firstName lastName')).toEqual('Please input an array.')
  })
})

// b) Create the function that makes the test pass.
// Function: infoTaker(). Validation: input should be an array.

// Solution: 

// Step 1: unpack and get data, the array object used to store multiple values in a single variable.
// from array to object-->arr.map
// from object to string-->destructuring assignment syntax.-->obj.name, obj,occupation.
// from string to string-->first name and last name by using .split() ...then .join()

// Step 2: capitalize not only first name but also last name.
// str[0].toUpperCase() + str.slice(1)

// Step 3: pack data to return.
// Output-->[''First name + Last name '+ is a occupation', ..., ..., ...  ]

const infoTaker = (arr) =>{
  if(!isArray(arr)){
    return 'Please input an array.'
  }else{
    return arr.map(obj =>{
      let nameArr = obj.name.split(' ')
      //console.log(nameArr)-->Get name array-->e.g.["ford", "prefect" ]

      let nameStr = nameArr.map(str =>{
          return str[0].toUpperCase() + str.slice(1)
        }).join(' ')
      //console.log(nameStr)-->Get name string-->e.g.["Ford", "Prefect"]

      return `${nameStr} is a ${obj.occupation}.`
    })
  }
}

// console.log(infoTaker(people))
// Output:
// [
//   'Ford Prefect is a hitchhiker.',
//   'Zaphod Beeblebrox is a president of the galaxy.',
//   'Arthur Dent is a radio employee.'
// ]


// --------------------2) Create a function that takes in a mixed data array 
// and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
// Input: array. Output: array. Function: remainderBy3().
var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//Expected output: [ 2, 1, -1 ]
describe("The remainderBy3 function.", () =>{
  test("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () =>{
    expect(remainderBy3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainderBy3(hodgepodge2)).toEqual([ 2, 1, -1 ])
    expect(remainderBy3('firstName lastName')).toEqual('Please input an array.')
  })
})

// b) Create the function that makes the test pass.
// Solution: .filter() method creates a new array with all elements that pass the test implemented by the provided function.
// .filter() does not change the original array.
const remainderBy3 = (arr) =>{
  if(!isArray(arr)){
    return 'Please input an array.'
  }else{
    return arr.filter(element => typeof element == 'number').map(num =>{return num % 3})
  }
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
// Input: array. Output: integer. Function: sumCubed().
var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
describe("The sumCubed function.", () =>{
  test("takes in an array of numbers and returns the sum of all the numbers cubed.", () =>{
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
    expect(sumCubed('1 2')).toEqual('Please input an array of numbers.')
    expect(sumCubed([3, 4, '2nd', -444])).toEqual('Please input an array of numbers.')
  })
})

// b) Create the function that makes the test pass.
// Solution: .reduce() method to get sum.
// .reduce() method in JavaScript is used to reduce the array to a single value 
// and executes a provided function for each value of the array (from left-to-right) 
// and the return value of the function is stored in an accumulator. 
// Syntax: array.reduce( function(total, currentValue, currentIndex, arr), initialValue )
const sumCubed = (arr) =>{
  if(!isArray(arr)||arr.some(isNaN)){
    return 'Please input an array of numbers.'
  }else{
    return arr.reduce((accumulator,current) =>{
      return Math.pow(current,3) + accumulator
    },0)
  }
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.594 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.88s.
// yanxu@Yans-MacBook-Air week-6-assessment-yanxu2021 % 
