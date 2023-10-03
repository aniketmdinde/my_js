// https://www.superheroapi.com/api.php/343133698084573/search/Hulk

const getSuperHero = () => {
    let name = document.querySelector('#name').value;
    fetch(`https://www.superheroapi.com/api.php/343133698084573/search/${name}`)
        .then(response => response.json())
        .then(json => {
        let arrnum = Math.floor(Math.random() * json.results.length);
        let name = `<h2>${json.results[arrnum].name}<\h2>`;
        let img = `<img src = "${json.results[arrnum].image.url}" height=300px width=300px>`;
        let stats = getStatsHtml(json.results[arrnum]).toUpperCase();
        document.querySelector('#superhero-details').innerHTML = `${name}${img}${stats}`;
        });
}

const getRandomHero = () => {
    let id = Math.floor(Math.random() * 173);
    fetch(`https://www.superheroapi.com/api.php/343133698084573/${id}`)
        .then(response => response.json())
        .then(json => {
        let name = `<h2>${json.name}<\h2>`;
        let img = `<img src = "${json.image.url}" height=300px width=300px>`;
        let stats = getStatsHtml(json).toUpperCase();
        document.querySelector('#superhero-details').innerHTML = `${name}${img}${stats.split(',')}`;
        });
}

const getStatsHtml = (character) => {
        const stat = Object.keys(character.powerstats).map( stat =>{
            return `<p>${stat} : ${character.powerstats[stat]}<\p>`;
        });
        return stat.join('');//return string
}
document.querySelector('#search').addEventListener('click', getSuperHero);
document.querySelector('#random-search').addEventListener('click', getRandomHero);
