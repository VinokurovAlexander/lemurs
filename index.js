var lemursType = ['Карликовый', 'Руконожковый', 'Индриевый'];

/**
 * Функция генерирует строку с лемурами.
 *
 * @param {string} numberOfLemurs - Количество лемуров.
 * @return {string} Строка с лемурами.
 */
function generateLemurs(numberOfLemurs) {
  var lemurs = '';
  for (var i = 0; i < numberOfLemurs; i++) {
    var index = Math.floor(Math.random() * lemursType.length);
    // lemurs.push(lemursType[index]);
    lemurs = lemurs + lemursType[index] + '\n';
  }

  return lemurs;
}

/**
 * Функция возвращает самый популярный вид лемуров.
 *
 * @param {array} lemurs - Массив с лемурами.
 * @return {array} Массив с самым популярным видом лемура.
 */
function getResult(lemurs) {
  var lemursCount = {
    'Карликовый': 0,
    'Руконожковый': 0,
    'Индриевый': 0
  };


  lemurs.forEach(function (lemur, index) {
    lemursCount[lemur.slice(1)]++;
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


var generateDataBtn = function ('click', function () {
  
});
