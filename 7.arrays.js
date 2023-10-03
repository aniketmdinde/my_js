//Declaration
// let fruits = ['banana','apple','oranges'];
let fruits = new Array('banana','apple','oranges');

console.log(fruits[0]);
console.log(fruits);

fruits[0] = 'pear';
console.log(fruits);

for(let i=0; i<fruits.length; i++)
    console.log(fruits[i]);

//toString - converts the entire array into a string with commas
console.log(fruits.toString());

//join - converts into strings and put the char in betweenm
console.log(fruits.join(' - '));

//pop - removes last element
console.log(fruits);
console.log(fruits.pop(), fruits);

//push - adds element at the end
fruits.push('berries');
console.log(fruits);

//shift - removes first element
fruits.shift();
console.log(fruits);

//unshift - adds element at start
fruits.unshift("kiwi");
console.log(fruits);

//concat
let vegetables = ['onion', 'tomato', 'potato'];

let groceries = fruits.concat(vegetables);
console.log(groceries);

//slice - slices from startIndex to lastIndex not included
console.log(groceries.slice(1,4));

//reverse
console.log(groceries.reverse());

//sort
console.log(groceries.sort());

let Numbers = [15,87,4,5,87,44,54];
console.log(Numbers.sort(function fun(a,b){return a-b;}));
console.log(Numbers.sort(function fun(a,b){return b-a;}));

let arr = new Array();
for(let num=0; num<10; num++)
{
    arr.push(num);
}
console.log(arr);