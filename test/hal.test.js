var expect = require('chai').expect;

var Hal = require('../index.js');

describe('Hal', function () {
  var hal = new Hal();

  it('stating something', function () {
    var result = hal.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).equal('That is unimportant to the mission, Dave.');
  });

  it('shouting', function () {
    var result = hal.hey('WATCH OUT!');
    expect(result).equal('You seem very agitated.');
  });

  it('shouting gibberish', function () {
    var result = hal.hey('FCECDFCAAB');
    expect(result).equal('You seem very agitated.');
  });

  it('asking a question', function () {
    var result = hal.hey('Does this cryogenic chamber make me look fat?');
    expect(result).equal('Affirmative, Dave.');
  });

  it('asking a numeric question', function () {
    var result = hal.hey('You are, what, like 15?');
    expect(result).equal('Affirmative, Dave.');
  });

  it('asking gibberish', function () {
    var result = hal.hey('fffbbcbeab?');
    expect(result).equal('Affirmative, Dave.');
  });

  it('talking forcefully', function () {
    var result = hal.hey('Let\'s go make out behind the gym!');
    expect(result).equal('That is unimportant to the mission, Dave.');
  });

  it('using acronyms in regular speech', function () {
    var result = hal.hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).equal('That is unimportant to the mission, Dave.');
  });

  it('forceful questions', function () {
    var result = hal.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).equal('You seem very agitated.');
  });

  it('shouting numbers', function () {
    var result = hal.hey('1, 2, 3 GO!');
    expect(result).equal('You seem very agitated.');
  });

  it('only numbers', function () {
    var result = hal.hey('1, 2, 3');
    expect(result).equal('That is unimportant to the mission, Dave.');
  });

  it('question with only numbers', function () {
    var result = hal.hey('4?');
    expect(result).equal('Affirmative, Dave.');
  });

  it('shouting with special characters', function () {
    var result = hal.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).equal('You seem very agitated.');
  });

  it('shouting with no exclamation mark', function () {
    var result = hal.hey('I HATE YOU');
    expect(result).equal('You seem very agitated.');
  });

  it('statement containing question mark', function () {
    var result = hal.hey('Ending with a ? means a question.');
    expect(result).equal('That is unimportant to the mission, Dave.');
  });

  it('prattling on', function () {
    var result = hal.hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).equal('Affirmative, Dave.');
  });

  it('silence', function () {
    var result = hal.hey('');
    expect(result).equal('My mind is going...');
  });

  it('prolonged silence', function () {
    var result = hal.hey('   ');
    expect(result).equal('My mind is going...');
  });

  it('alternate silence', function () {
    var result = hal.hey('\t\t\t\t\t\t\t\t\t\t');
    expect(result).equal('My mind is going...');
  });

  it('multiple line question', function () {
    var result = hal.hey('\nDoes this cryogenic chamber make me look fat?\nno');
    expect(result).equal('That is unimportant to the mission, Dave.');
  });

  it('starting with whitespace', function () {
    var result = hal.hey('         hmmmmmmm...');
    expect(result).equal('That is unimportant to the mission, Dave.');
  });

  it('ending with whitespace', function () {
    var result = hal.hey('Okay if like my  spacebar  quite a bit?   ');
    expect(result).equal('Affirmative, Dave.');
  });

  it('other whitespace', function () {
    var result = hal.hey('\n\r \t');
    expect(result).equal('My mind is going...');
  });

  it('non-question ending with whitespace', function () {
    var result = hal.hey('This is a statement ending with whitespace      ');
    expect(result).equal('That is unimportant to the mission, Dave.');
  });

});
