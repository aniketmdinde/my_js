let all_buttons = document.getElementsByTagName('button');

let copyOfButtons = [];
for(let i=0; i<all_buttons.length; i++)
    copyOfButtons.push(all_buttons[i].classList[1]);

function buttonColorChange(buttonThing)
{
    if(buttonThing.value === 'red')
        buttonsColorRed();
    else if(buttonThing.value === 'green')
        buttonsColorGreen();
    else if(buttonThing.value === 'reset')
        buttonsColorReset();
    else if(buttonThing.value === 'random')
        buttonsColorRandom();
}

function buttonsColorRed()
{
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');;
    }
}

function buttonsColorGreen()
{
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');;
    }
}

function buttonsColorReset()
{
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyOfButtons[i]);;
    }
}

function buttonsColorRandom()
{
    let choices = ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger'];
    for(let i=0; i<all_buttons.length; i++)
    {  
        let randomNum = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNum]);;
    }
}