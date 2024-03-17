const ol = document.querySelector("ol");

const movies = [
    {
        name: "Avengers: Endgame",
        year: 2019,
        director: "Anthony Russo, Joe Russo",
        image: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"
    },
    {
        name: "Parasite",
        year: 2019,
        director: "Bong Joon-ho",
        image: "https://images.moviesanywhere.com/76cd3a853ffede1f5983f090839cacc8/8ca75d25-0bc2-4584-9d4c-3a381232c870.webp?h=375&resize=fit&w=250"
    },
    {
        name: "The Dictator",
        year: 2012,
        director: "Larry Charles",
        image: "https://pyxis.nymag.com/v1/imgs/51c/cf6/f78cbef3bffc42792594f0345f9d611cbf-18-dictator.w710.jpg"
    }
];

const template = movies.map(movie => `
<li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <img src="${movie.image}">
</li>
`);

ol.innerHTML = template.join("");