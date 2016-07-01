$(function(){

var buttonsList = [];
var numOfButtons = 10;
var tempX;
addButtons(numOfButtons);

function addButtons(buttons){
  for (var i = 0; i < numOfButtons; i++) {
    $('.buttons').append('<button type="button" id="' + i + '"<h1>' + i  + '</h1></button>');
  }
  // console.log(buttonsList);
}
function showMeTheMoney(buttonsList){
  $('.answerField').empty();
  var answer = buttonsList[0] + buttonsList[1];
  $('.answerField').append('<h2>'+ buttonsList[0] + ' + ' + buttonsList[1] + ' = ' + answer + '</h2>');
}

$('.buttons').on('click', function(event){
  tempX = parseInt(event.target.id);
  buttonsList.push(tempX);
  // console.log(buttonsList);
  $('.answerField').empty();
  $('.answerField').append('<h2>' + buttonsList[0] + '</h2>');
  if(buttonsList.length >= 2) {
    showMeTheMoney(buttonsList);
    buttonsList = [];
  }
});
})
