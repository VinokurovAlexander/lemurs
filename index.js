var lemursType = ['Карликовый', 'Руконожковый', 'Индриевый'];

/**
 * Функция генерирует строку с лемурами.
 *
 * @param {string} numberOfLemurs - Количество лемуров.
 * @return {string} Строка с лемурами.
 */
function generateData(numberOfLemurs) {
  var lemurs = '';
  for (var i = 0; i < numberOfLemurs; i++) {
    var index = Math.floor(Math.random() * lemursType.length);
    lemurs = lemurs + lemursType[index] + '\n';
  }

  if (getResult(lemurs).length > 1) {
    return generateData(numberOfLemurs);
  }
  return lemurs;
}

/**
 * Функция возвращает самый популярный вид лемуров.
 *
 * @param {string} lemurs - Строка с лемурами.
 * @return {array} Массив с самым популярным видом лемура.
 */
function getResult(lemurs) {
  var lemursCount = {
    'Карликовый': 0,
    'Руконожковый': 0,
    'Индриевый': 0
  };

  lemurs = lemurs.split('\n');
  lemurs.pop();
  lemurs.forEach(function (lemur, index) {
    lemursCount[lemur]++;
  });

  var answer = [];
  var maxValue = Math.max(...Object.values(lemursCount));

  for (key in lemursCount) {
    if (lemursCount[key] === maxValue) {
      answer.push(key);
    }
  }

  return answer
}

var generateDataBtn = document.querySelector('.generate-btn');
var input = document.querySelector('input');
var resultCell = document.querySelector('.result');
var dataCell = document.querySelector('.data');
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

var allLemurs = '';
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

    allLemurs = generateData(input.value);
    dataCell.textContent = input.value + '\n' + allLemurs;
  }
});

var getResultBtn = document.querySelector('.get-result-btn');
getResultBtn.addEventListener('click', function() {
  if (!dataCell.textContent) {
    addError('Необходимо сгенерировать данные');
  } else {
    removeError();
    resultCell.textContent = getResult(allLemurs);
  }
});



///--------------------------------------------------

var Animal = function (animalTypes) {
  animalTypes.forEach((type) => {
    this[type] = 0;
  })
}

Animal.prototype.getPopularType = (types) => {
  types = types.split('\n');
  types.pop();
  types.forEach(function (type) {
    this[type]++
  });

  var answer = [];
  var maxValue = Math.max(...Object.values(this));

  for (key in this) {
    if (this[key] === maxValue) {
      answer.push(key);
    }
  }

  return answer
}

Animal.prototype.generateAnimalTypes = (numberOfAnimals) => {
  var types = '';
  for (var i = 0; i < numberOfAnimals; i++) {
    var index = Math.floor(Math.random() * this.keys.length);
    types = types + this.keys[index] + '\n';
  }

  if (this.getPopularType(string).length > 1) {
    return generateData(numberOfLemurs);
  }
  return string;
}

var lemurs = new Animal(['Карликовый', 'Руконожковый', 'Индриевый']);
console.log(lemurs);
