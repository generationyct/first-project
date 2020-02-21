// Getting the DOM elements

const draggable_list = document.getElementById('draggable-list')
const check = document.getElementById('check');

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

        <div class="flag"><img src="${countryByFlag[index]}"></div>
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
  // console.log('Event: ', 'dragstart');
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
  // console.log('Event: ', 'dragenter');
  this.classList.add('over');
}

function dragLeave() {
  // console.log('Event: ', 'dragleave');
  this.classList.remove('over');
}

function dragOver(e) {
  // console.log('Event: ', 'dragover');
  e.preventDefault();
}

function dragDrop() {
  // console.log('Event: ', 'drop');
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

// Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

// Check the order of list items
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const countryName = listItem.querySelector('.draggable').innerText.trim();

    if (countryName !== countries[index]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}

check.addEventListener('click', checkOrder);
