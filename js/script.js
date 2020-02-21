// Getting the DOM elements

const draggable_list = document.getElementById('draggable-list')

// Creating two arrays for use in project

const countries = [
  'The Netherlands',
  'New Caledonia',
  'New Zealand',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland'
]


const countryFlags = [

  'https://restcountries.eu/data/nld.svg',
  'https://restcountries.eu/data/ncl.svg',
  'https://restcountries.eu/data/nzl.svg',
  'https://restcountries.eu/data/deu.svg',
  'https://restcountries.eu/data/gha.svg',
  'https://restcountries.eu/data/gib.svg',
  'https://restcountries.eu/data/grc.svg',
  'https://restcountries.eu/data/grl.svg'

]


// Creating array to store listitems

const listItems = []

// Creating variable to store index for drag and drap API

let dragStartIndex;

// Creating variable to store countryFlags adding a index

const countryByFlag = countryFlags.map((element) => element)

// Invoke function createList to start first inserting into the DOM

createList()

// Inserting list items into the DOM

function createList() {
  // Make a shallow copy of countries array
  [...countries]
  // Changing methods on array copy
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((country, index) => {
      const listItem = document.createElement('li')

      listItem.setAttribute('data-index', index)

      listItem.innerHTML = `

        <span class="flag"><img src="${countryByFlag[index]}" width="150"></span>
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
        <p class="country-name">${country}</p>
        <i><img src="./img/icondraganddrop.png" ></i>
        </div>
      `;

      listItems.push(listItem)

      draggable_list.appendChild(listItem)
    })

    addEventListeners()
}

function dragStart() {

}

