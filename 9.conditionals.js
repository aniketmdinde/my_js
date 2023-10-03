// let age = prompt("Enter age: ");

// if( (age >= 18) && (age <= 35) )
// {
//     let status = "target";
//     console.log(status);
// }
// else
// {
//     let status = "not an audience";
//     console.log(status);
// }

let day = prompt("Enter day in number:");
let text = "";
switch(day%7)
{
    case 0:
    case 6: text = "weekend";
            break;
    default: text = "weekday";
}

console.log(text);
