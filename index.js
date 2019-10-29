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

var allLemurs = '';
generateDataBtn.addEventListener('click', function () {
  var dataCell = document.querySelector('.data');
  allLemurs = generateData(input.value);
  dataCell.textContent = input.value + '\n' + allLemurs;
});

var getResultBtn = document.querySelector('.get-result-btn');
getResultBtn.addEventListener('click', function() {
  var resultCell = document.querySelector('.result');
  resultCell.textContent = getResult(allLemurs);
});
