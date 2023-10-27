let memeForm = document.getElementById('meme-form');
let memeGoButton = document.getElementById('meme-go-button');
let delButtons = document.querySelectorAll('button.del');
let respectAttentionCount = 0;
let respectAttentionMax = 9;

assignDelButtons();

memeForm.addEventListener('submit', function(e) {
  e.preventDefault();
  respectAttentionCount++;
  let url = document.getElementById('meme-url');
  let topText = document.getElementById('meme-top-text');
  let bottomText = document.getElementById('meme-bottom-text');
  let htmlBefore = document.getElementById('meme-zone').innerHTML;

  [topText.value, bottomText.value] =
      maximumSecurity(topText.value, bottomText.value);

  [topText.value, bottomText.value] =
      respectAttention(topText.value, bottomText.value);

  document.getElementById('meme-zone').innerHTML = '\
    <div class="meme">\
    <div class="pic"><img src="' + url.value + '"></div>\
    <button class="del">✕</button>\
    <div class="top-text meme-text">'
      + topText.value.toUpperCase() + '</div>\
    <div class="bottom-text meme-text">'
      + bottomText.value.toUpperCase() + '</div>\
    <br></div>' + htmlBefore;

  this.reset();
  assignDelButtons();
});

function maximumSecurity(t1, t2) {
  let securityPattern = /^[a-zA-Z0-9\s]*$/;
  if (!securityPattern.test(t1) || !securityPattern.test(t2)) {
    return ["Please be gentle", "with this fragile app"];
  } else {
    return [t1, t2]
  }
}

function respectAttention(t1, t2) {
  if (respectAttentionCount > respectAttentionMax) {
    return ["That was fun", "but now meme time is over"];
  } else {
    return [t1, t2];
  }
}

function assignDelButtons() {
  delButtons = document.querySelectorAll('button.del');
  for (let delButton of delButtons) {
    delButton.addEventListener('click', function(e) {
      e.target.parentElement.remove();
    });
  }
}