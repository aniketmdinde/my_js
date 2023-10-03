let fruit = "banana";

//length - returns length of string
console.log(fruit.length);

//indexOf - return the index of the required
console.log(fruit.indexOf('an'));
console.log(fruit.indexOf('q'));

//slice - cuts string from startIndex till lastIndex not included
console.log(fruit.slice(4,6));

//replace - replaces given string with entered string
console.log(fruit.replace('ban', '123'));

//toUpperCase
console.log(fruit.toUpperCase());

//toLowerCase
console.log(fruit.toLowerCase());

//charAt
console.log(fruit.charAt(2));
console.log(fruit[2]); //same

//split - splits a string into a array based on the input given
console.log(fruit.split("")); //split by character
console.log(fruit.split("a")); //split by a

let fruitStr = 'banana,apple,orange';
console.log(fruitStr.split(',')); //split by comma