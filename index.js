var Error = function (element) {
  this.element = element;
}

Error.prototype.add = function (text) {
  this.element.textContent = text;
  this.element.classList.add('error-show');
  input.style.border = '2px solid red';
}

Error.prototype.remove = function () {
  if (this.element.classList.contains('error-show')) {
    this.element.classList.remove('error-show');
    this.element.textContent = '';
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

  var popularType = [];
  var maxValue = Math.max(...Object.values(this.animalsNumber));

  for (key in this.animalsNumber) {
    if (this.animalsNumber[key] === maxValue) {
      popularType.push(key);
    }
  }

  return popularType;
}

Animal.prototype.generateAnimalsTypes = function (numberOfAnimals) {

  for (key in this.animalsNumber) {
    this.animalsNumber[key] = 0
  }

  var types = '';
  for (var i = 0; i < numberOfAnimals; i++) {
    var index = Math.floor(Math.random() * this.animalsTypes.length);
    types += this.animalsTypes[index] + '\n';
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
var errorMessage = new Error(document.querySelector('.error'));

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
    lemurs.allAnimals = lemurs.generateAnimalsTypes(parseInt(input.value, 10));
    dataCell.textContent = input.value + '\n' + lemurs.allAnimals;
  }
});

var getResultBtn = document.querySelector('.get-result-btn');

getResultBtn.addEventListener('click', function() {
  if (!dataCell.textContent) {
    errorMessage.add('Необходимо сгенерировать данные');
  } else {
    errorMessage.remove();
    resultCell.textContent = lemurs.getPopularType(lemurs.allAnimals);
  }
});
