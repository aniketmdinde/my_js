const div = document.querySelector('#dogImg');

document.querySelector('#get-new-dog').addEventListener('click',getNewDog);
function getNewDog()
{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            div.innerHTML = `<img src="${json.message}" height = 300px width=300px>`;
        });
}

// another way
// getNewDog = () => {}