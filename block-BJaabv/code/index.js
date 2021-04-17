// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(puppyAge , conversion=7) {
  return `dog's age is ${puppyAge * conversion} in dog year`
}

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age=0, numberOfMovie) {
  const MAX_AGE = 80;
  return `${(MAX_AGE - age)*12*4*numberOfMovie}`
}

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(tempInCelsius) {
   return `${tempInCelsius}°F is ${(tempInCelsius * 9 / 5) +32}°C`
}

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(tempInFar) {
  return `The temp in celcius will be: ${(tempInFar-32)*5/9}`
}

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n, x) {
  if(n<0){
    return `{number below 1 is not allowed}`
  }else{
    return `the x power of n is ${n ** x}`
  }
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 0 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(num , operator) {
  if(operator == 'sum'){
    let temp =0;
    for(i=num; i>0; i--){
      temp += i;
    }
    return temp;

  }else if(operator == 'product'){
    let temp =1;
    for(i=num; i>0; i--){
      temp *= i;
    }
    return temp;
    
  }else{
    alert `Enter a valid Input`;
  }
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n=0) {
  let temp =0;
  for(i=n ; i>0; i--){
    temp += i;
  }
  return temp;
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

function sumOfmultiples(n=0) {
  let temp =0;
  for(i=n; i>0; i--){
    if(i % 5 == 0 || i % 7 == 0){
      temp += i;
    }
  }
  return temp;
}

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

const min = (num1 , num2) => num1>num2 ? num1 : num2 ;

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

const typeCheck = (args) => typeof(args);

