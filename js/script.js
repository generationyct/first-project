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

// Creating variable to store countryFlags adding a index

const countryByFlag = countryFlags.map((element) => element)



