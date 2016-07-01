$(function(){



var buttonsList = [];
var numOfButtons = 10;
var tempX;
var tempY;

function addButtons(buttons){
  for (var i = 0; i < numOfButtons; i++) {
    buttonsList.push([i]);
    $('section').append('<button type="button" id="' + i + '"<h1>' + i  + '</h1></button>')
  }
  // console.log(buttonsList);
}

addButtons();

$('.buttons').on('click', function(event){
  // event.preventDefault();
  tempX = parseInt(event.target.id);
  $(this).append('<p>' + tempX + '</p>');
  // $('.buttons').on('click', function(event){
  //   tempY = parseInt(event.target.id);
  //   $(this).append('<p>' + tempX + tempY + '</p>');
  // })
})

// $('.buttons').on('click', function(event){
//   // event.preventDefault();
//   tempY = parseInt(event.target.id);
//   $(this).append('<p>' + tempY + '</p>');
//
// })

});
// var tempY = parseInt(event.target.id);
// $(this).append('<p>' + tempY + '</p>');
// });
