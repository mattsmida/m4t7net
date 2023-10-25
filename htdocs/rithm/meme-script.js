// Write something to console.log the contents of the form on click.



// Add an event listener to the button
// Save the form inputs to variables
// Console log the variable values
// Clear the form

let memeForm = document.getElementById('meme-form');
let memeGoButton = document.getElementById('meme-go-button');
let delButtons = document.querySelectorAll('button.del');
assignDelButtons();
memeForm.addEventListener('submit', function(e) {
  //event.preventDefault();  // Original when function() had no param
  e.preventDefault();
  let url = document.getElementById('meme-url');
  let topText = document.getElementById('meme-top-text');
  let bottomText = document.getElementById('meme-bottom-text');

  // Make a new meme div with divs pic, top-text, bottom-text.
  let htmlBefore = document.getElementById('meme-zone').innerHTML;

  document.getElementById('meme-zone').innerHTML = '\
    <div class="meme">\
    <div class="pic"><img src="' + url.value + '"></div>\
    <button class="del">X</button>\
    <div class="top-text">' + topText.value.toUpperCase() + '</div>\
    <div class="bottom-text">' + bottomText.value.toUpperCase() + '</div>\
    <br></div>' + htmlBefore;

  // Reset the form
  this.reset();
  assignDelButtons();
});

function assignDelButtons() {
  delButtons = document.querySelectorAll('button.del');
  for (let delButton of delButtons) {
    delButton.addEventListener('click', function(e) {
      console.log('removing your meme');
      e.target.parentElement.remove();
    });
  }
}