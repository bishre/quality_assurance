var textManipulator = {};

textManipulator.typeOf = function(argument) {
  if (argument === null) {
    return 'null';
  }
  return typeof argument;
}

textManipulator.longestWord = function(argument) {
  var words = argument.split(' ');
  var longest = words[0];
  for (i=0; i<words.length; i++) {
    if (words[i].length > longest.length){
      longest = words[i];
    }
  }
  return longest;
}

textManipulator.vowelCount = function(argument) {
  if (typeof argument != 'string'){
    return 0;
  }
  var letters = argument.split('');
  var vowelList = ['a', 'e', 'i', 'o', 'u', 'ä', 'ö', 'A', 'E', 'I', 'O', 'Ä', 'Ö'];
  var count=0;
  for (i=0; i<letters.length; i++) {
    if (vowelList.includes(letters[i])) {
      count += 1;
    }
  }
  return count;
}

module.exports = textManipulator;
