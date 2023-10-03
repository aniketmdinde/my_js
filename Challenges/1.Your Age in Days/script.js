function ageInDays()
{
    let birthYear = prompt("Entrer your birth year:");
    let ageInDays = (2023-birthYear)*365;
    // console.log(ageInDays);
    var h2 = document.createElement('h2'); //creates an element of h2
    var textAns = document.createTextNode('You are ' + ageInDays + ' days old...'); //creates text element in document
    h2.setAttribute('id','ageInDays'); //sets attribute of h2
    h2.appendChild(textAns); //appends child element to h2
    document.getElementById('flexbox-result').appendChild(h2);
}

function reset()
{
    document.getElementById('ageInDays').remove();
}