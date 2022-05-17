const API = `https://rickandmortyapi.com/api`;
const cardList = document.getElementById("card_list");
let arr = [];

function activeLink({ target }) {
  document.querySelectorAll("button").forEach((button) => {
    delete button.dataset.active;
  });
  target.dataset.active = true;
}

async function getData(type) {
  const response = await fetch(`${API}/${type}`);
  const data = await response.json();

  return data;
}

getCharacters();
async function getCharacters() {
  resetData();
  arr = await getData("character")
    .then((data) => data.results)
    .catch((error) => console.log(error));
  arr.forEach(({ name, image, species, status, location, gender }) => {
    let card = `
            <div class="card">
                <div class="card_img">
                    <img draggable="false" loading="lazy" src="${image}" alt="${name}">
                </div>
                <div class="card_body">
                    <span class="status ${
                      status === "Alive"
                        ? "status_live"
                        : status === "death"
                        ? "status_death"
                        : "status_unknown"
                    }">${status}</span>
                    <h3 class="card_title">${name}</h3>
                    <p><strong>Especie</strong>: ${species}</p>
                    <p><strong>Género</strong>: ${gender}</p>
                    <p><strong>Location</strong>: ${location.name}</p>
                </div>
            </div>
        `;
    cardList.innerHTML += card;
  });
}

async function getLocations() {
  resetData();
  arr = await getData("location")
    .then((data) => data.results)
    .catch((error) => console.log(error));
  arr.forEach(({ name, type, dimension }) => {
    let card = `
        <div class="card">
            <div class="card_body">
                <h3 class="card_title">${name}</h3>
                <p><strong>Type</strong>: ${type}</p>
                <p><strong>Dimension</strong>: ${dimension}</p>
            </div>
        </div>
    `;
    cardList.innerHTML += card;
  });
}

async function getEpisodes() {
  resetData();
  arr = await getData("episode")
    .then((data) => data.results)
    .catch((error) => console.log(error));
  arr.forEach(({ name, air_date, episode }) => {
    let card = `
        <div class="card">
            <div class="card_body">
                <h3 class="card_title">${name}</h3>
                <p><strong>Air date</strong>: ${air_date}</p>
                <p><strong>Episode</strong>: ${episode}</p>
            </div>
        </div>
    `;
    cardList.innerHTML += card;
  });
}

function resetData() {
  arr = [];
  cardList.innerHTML = "";
}
