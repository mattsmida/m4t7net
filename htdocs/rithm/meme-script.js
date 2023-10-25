let memeForm = document.getElementById('meme-form');
let memeGoButton = document.getElementById('meme-go-button');
let delButtons = document.querySelectorAll('button.del');
assignDelButtons();
memeForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let url = document.getElementById('meme-url');
  let topText = document.getElementById('meme-top-text');
  let bottomText = document.getElementById('meme-bottom-text');
  let htmlBefore = document.getElementById('meme-zone').innerHTML;

  document.getElementById('meme-zone').innerHTML = '\
    <div class="meme">\
    <div class="pic"><img src="' + url.value + '"></div>\
    <button class="del">X</button>\
    <div class="top-text">' + topText.value.toUpperCase() + '</div>\
    <div class="bottom-text">' + bottomText.value.toUpperCase() + '</div>\
    <br></div>' + htmlBefore;

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