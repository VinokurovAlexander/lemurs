var error = document.querySelector('.error');
function addError(text) {
  error.textContent = text;
  error.classList.add('error-show');
  input.style.border = '2px solid red';
}

function removeError() {
  if (error.classList.contains('error-show')) {
    error.classList.remove('error-show');
    error.textContent = '';
    input.style.border = 'none';
  }
}

var Animal = function (animalsTypes) {
  this.animalsTypes = animalsTypes;
  this.animalsNumber = {};
  animalsTypes.forEach(function (type) {
    this.animalsNumber[type] = 0;
  }.bind(this));
}

Animal.prototype.getPopularType = function (types) {
  types = types.split('\n');
  types.pop();
  types.forEach(function (type) {
    this.animalsNumber[type]++
  }.bind(this));

  var answer = [];
  var maxValue = Math.max(...Object.values(this.animalsNumber));

  for (key in this.animalsNumber) {
    if (this.animalsNumber[key] === maxValue) {
      answer.push(key);
    }
  }

  return answer
}

Animal.prototype.generateAnimalsTypes = function (numberOfAnimals) {

  for (key in this.animalsNumber) {
    this.animalsNumber[key] = 0
  }

  var types = '';
  for (var i = 0; i < numberOfAnimals; i++) {
    var index = Math.floor(Math.random() * this.animalsTypes.length);
    types = types + this.animalsTypes[index] + '\n';
  }

  if (this.getPopularType(types).length > 1) {
    return this.generateAnimalsTypes(numberOfAnimals);
  }
  return types;
}

var lemurs = new Animal(['Карликовый', 'Руконожковый', 'Индриевый']);

var input = document.querySelector('input');
var resultCell = document.querySelector('.result');
var dataCell = document.querySelector('.data');
var generateDataBtn = document.querySelector('.generate-btn');

generateDataBtn.addEventListener('click', function () {
  if (input.value <= 0 || !input.value) {
    addError('Необходимо указать число больше 0');
  } else if (input.value > 1000 ) {
    addError('Необходимо указать число не больше 1000');
  } else {
    removeError();
    if (resultCell.textContent) {
      resultCell.textContent = '';
    }
    lemurs.allAnimals = lemurs.generateAnimalsTypes(parseInt(input.value, 10));
    dataCell.textContent = input.value + '\n' + lemurs.allAnimals;
  }
});

var getResultBtn = document.querySelector('.get-result-btn');

getResultBtn.addEventListener('click', function() {
  if (!dataCell.textContent) {
    addError('Необходимо сгенерировать данные');
  } else {
    removeError();
    resultCell.textContent = lemurs.getPopularType(lemurs.allAnimals);
  }
});
