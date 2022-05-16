const API = `https://rickandmortyapi.com/api`;
const cardList = document.getElementById('cards-container');


function activeLink({ target }) {
    document.querySelectorAll('button').forEach( button => {
        delete button.dataset.active;
    });
    target.dataset.active = true;
}

