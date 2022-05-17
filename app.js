const API = `https://rickandmortyapi.com/api`;
const cardList = document.getElementById("card_list");
const filter_container = document.querySelector('.filter_container');
let arr = [];

window.onload = async function() {
    await getCharacters();
    document.getElementById('filter_by_gender').classList.add('active');
}

function activeLink({ target }) {
  document.querySelectorAll("button").forEach((button) => {
    delete button.dataset.active;
  });
  target.dataset.active = true;

  if (target.textContent.toString() !== 'Characters') {
    filter_container.classList.remove('active');
    return;
  }
  filter_container.classList.add('active');
}

async function getData(type) {
  const response = await fetch(`${API}/${type}`);
  const data = await response.json();

  return data;
}

async function getCharacters() {
  resetData();
  arr = await getData("character")
    .then((data) => data.results)
    .catch((error) => console.log(error));
  arr.forEach(({ name, image, species, status, location, gender }) => {
    let card = `
            <div class="card">
                <div class="card_img">
                    <img draggable="false" src="${image}" alt="${name}">
                </div>
                <div class="card_body">
                    <span class="status ${
                      status === "Alive"
                        ? "status_live"
                        : status === "Dead"
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


function handleFilterBy() {
  const value = document.getElementById('filter_by').value;
  const genderSelect = document.getElementById('filter_by_gender');
  const especieSelect = document.getElementById('filter_by_especie');
  genderSelect.classList.remove('active');
  especieSelect.classList.remove('active');


  if (value === 'gender') {
    genderSelect.classList.add('active');
    return;
  }
  especieSelect.classList.add('active');
}
