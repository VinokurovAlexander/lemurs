class Error {
  constructor(element) {
    this.element = element;
  }

  add(text) {
    this.element.textContent = text;
    this.element.classList.add('error-show');
    input.style.border = '2px solid red';
  }

  remove() {
    if (this.element.classList.contains('error-show')) {
      this.element.classList.remove('error-show');
      this.element.textContent = '';
      input.style.border = 'none';
    }
  }
}

class Animal {
  constructor(animalTypes) {
    this.types = animalTypes;
    this.typesNumber = {};
    animalTypes.forEach(function (type) {
      this.typesNumber[type] = 0;
    }.bind(this));
  }

  getPopularType() {
    let types = this.randomTypes.split('\n');
    types.pop();
    types.forEach(function (type) {
      this.typesNumber[type]++
    }.bind(this));

    let popularType = [];
    let maxValue = Math.max(...Object.values(this.typesNumber));
    console.log(maxValue);

    for (let key in this.typesNumber) {
      if (this.typesNumber[key] === maxValue) {
        popularType.push(key);
      }
    }

    return popularType;
  }

  generateAnimals(numberOfAnimals) {

    for (let key in this.typesNumber) {
      this.typesNumber[key] = 0
    }

    let animals = '';
    for (let i = 0; i < numberOfAnimals; i++) {
      let index = Math.floor(Math.random() * this.types.length);
      animals += this.types[index] + '\n';
    }
    this.randomTypes = animals;

    if (this.getPopularType().length > 1) {
      return this.generateAnimals(numberOfAnimals);
    }

    return animals;
  }
}

let lemurs = new Animal(['Карликовый', 'Руконожковый', 'Индриевый']);
let errorMessage = new Error(document.querySelector('.error'));

const input = document.querySelector('input');
const resultCell = document.querySelector('.result');
const dataCell = document.querySelector('.data');
const generateDataBtn = document.querySelector('.generate-btn');
const getResultBtn = document.querySelector('.get-result-btn');

generateDataBtn.addEventListener('click', function () {
  if (input.value <= 0 || !input.value) {
    errorMessage.add('Необходимо указать число больше 0');
  } else if (input.value > 1000 ) {
    errorMessage.add('Необходимо указать число не больше 1000');
  } else {
    errorMessage.remove();
    if (resultCell.textContent) {
      resultCell.textContent = '';
    }

    dataCell.textContent = input.value + '\n' + lemurs.generateAnimals(parseInt(input.value, 10));
  }
});

getResultBtn.addEventListener('click', function() {
  if (!dataCell.textContent) {
    errorMessage.add('Необходимо сгенерировать данные');
  } else {
    errorMessage.remove();
    resultCell.textContent = lemurs.getPopularType();
  }
});
