
function countVowelLetters (str) {
  var chunks = str.split("");
  var vowels = "аоуияыэюеё";
  var vowelsSp = vowels.split("");
  var count = 0;
    for (var i = 0; i < chunks.length; i++){
        if (vowelsSp.includes(chunks[i].toLowerCase())) {
            count++;
        } else {
            continue;
        }
      }
    console.log(count);
}
 
countVowelLetters("Пришла зима, запахло…");
countVowelLetters("Ghbdtn, z r dfv bp Hjccbb");
countVowelLetters("длинношеее");
countVowelLetters("Не будете ли Вы так любезны, Иван, передать мне блокнот и «Известия»");
countVowelLetters("Архангел Уриил");
