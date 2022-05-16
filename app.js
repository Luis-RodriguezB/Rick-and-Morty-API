const API = `https://rickandmortyapi.com/api`;
const cardList = document.getElementById('cards-container');
let arr = [];


function activeLink({ target }) {
    document.querySelectorAll('button').forEach( button => {
        delete button.dataset.active;
    });
    target.dataset.active = true;
}

async function hello() {
    arr = [];
    await fetch(`${API}/character`)
        .then( resp => resp.json())
        .then( data => {
            arr = data.results;
            arr.forEach( item => {
                card = `
                
                `;
            });
        })
        .catch( error => console.log(`Error: ${error}`));
}
