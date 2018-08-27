var assert = require('assert');
let textManipulator = require('../app.js');

describe('typeOf', function(){
  it ('should return the type of the argument', function(){
    assert.equal('string', textManipulator.typeOf('bibhor'));
  });
  it ('should return the type of the argument', function(){
    assert.equal('number', textManipulator.typeOf(23));
  });
  it ('should return the type of the argument', function(){
    assert.equal('null', textManipulator.typeOf(null));
  });
  it ('should return the type of the argument', function(){
    assert.equal('string', textManipulator.typeOf('abina'));
  });
})

describe ('longestWord', function(){
  it ('should return the longest word', function(){
    assert.equal('black', textManipulator.longestWord('I have a black cat'));
  });
  it ('should return the longest word', function(){
    assert.equal('california', textManipulator.longestWord('Welcome to the hotel california'));
  });
  it ('should return the longest word', function(){
    assert.equal('highway', textManipulator.longestWord('I am on a highway to hell'));
  });
  it ('should return the longest word', function(){
    assert.equal('rising', textManipulator.longestWord('Land of the rising sun'));
  });
})

describe ('vowelCount', function(){
  it ('should return the vowel count', function(){
    assert.equal(5, textManipulator.vowelCount("tietökone"));
  });
  it ('should return the vowel count', function(){
    assert.equal(6, textManipulator.vowelCount("sairaasloma"));
  });
  it ('should return the vowel count', function(){
    assert.equal(6, textManipulator.vowelCount("bussiliikenne"));
  });
  it ('should return the vowel count', function(){
    assert.equal(7, textManipulator.vowelCount("ympäristötiedettä"));
  });
  it ('should return the vowel count', function(){
    assert.equal(0, textManipulator.vowelCount("http"));
  });
  it ('should return the vowel count', function(){
    assert.equal(0, textManipulator.vowelCount(null));
  });
})
