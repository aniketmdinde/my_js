// function generateCat()
// {
//     let catImg = document.createElement('img')
//     catImg.setAttribute('src', 'https://media.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif')
//     document.getElementById('cat-gen').appendChild(catImg);
// }

function generateCat()
{
    let catImg = document.createElement('img');
    let div = document.getElementById('cat-gen');
    catImg.src = 'https://media.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif';
    div.appendChild(catImg);
}