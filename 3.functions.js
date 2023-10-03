// Declaring the functiom
function fun()
{
    console.log("Wooooooo!!!!!");
}

// Calling the function
fun();

function sum(num1,num2)
{
    console.log(num1 + num2);
}
sum(1,2);

function greetings(yourName)
{
    document.getElementById("xyz").innerHTML = "Hello " + yourName;
}
var name = prompt("What is your name?");
greetings(name);