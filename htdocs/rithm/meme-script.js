// Write something to console.log the contents of the form on click.



// Add an event listener to the button
// Save the form inputs to variables
// Console log the variable values
// Clear the form

let memeForm = document.getElementById('meme-form');
let memeGoButton = document.getElementById('meme-go-button');
memeForm.addEventListener('submit', function() {
  event.preventDefault();
  let url = document.getElementById('meme-url');
  let topText = document.getElementById('meme-top-text');
  let bottomText = document.getElementById('meme-bottom-text');

  // Make a new meme div with divs pic, top-text, bottom-text.
  let htmlBefore = document.getElementById('meme-zone').innerHTML;

  document.getElementById('meme-zone').innerHTML = '\
          <div class="meme"> \
          <div class="pic"><img src="./meme-samples/square.png"></div> \
          <div class="top-text">'+topText.value.toUpperCase()+'</div> \
          <div class="bottom-text">'+bottomText.value.toUpperCase()+'</div> \
          </div><br>' + htmlBefore;

  // Reset the form
  this.reset();
});


