const browseSliderOne = document.getElementById('browse-slider-one');
const browseSliderTwo = document.getElementById('browse-slider-two');
const browseSlideButtonOne = document.getElementById('browse-slide-button-one');
const browseSlideButtonTwo = document.getElementById('browse-slide-button-two');
const browseSlideArrowOne = document.getElementById('browse-slide-arrow-one');
const browseSlideArrowTwo = document.getElementById('browse-slide-arrow-two');
const browseSlideContentOne = document.getElementById('browse-slide-content-one');
const browseSlideContentTwo = document.getElementById('browse-slide-content-two');

browseSlideArrowOne.addEventListener('click', ()=>{
    browseSlideContentOne.style.display = 'none';
    browseSlideContentTwo.style.display = 'block'
    browseSliderOne.style.width = '0';
    browseSliderOne.style.transform = 'translateX(-100%)'
    browseSliderTwo.style.width = '100%';
    browseSliderTwo.style.transform = 'translateX(0)'
    browseSlideButtonTwo.style.border = '3px solid #8EE2E6';
    browseSlideButtonTwo.style.outline = '3px solid white';
    browseSlideButtonOne.style.border = 'none';
    browseSlideButtonOne.style.outline = 'none';
})
browseSlideArrowTwo.addEventListener('click', ()=>{
    browseSlideContentOne.style.display = 'block'
    browseSlideContentTwo.style.display = 'none'
    browseSliderOne.style.width = '100%';
    browseSliderOne.style.transform = 'translateX(0)'
    browseSliderTwo.style.width = '0';
    browseSliderTwo.style.transform = 'translateX(100%)'
    browseSlideButtonOne.style.border = '3px solid #FFC0CB';
    browseSlideButtonOne.style.outline = '3px solid white';
    browseSlideButtonTwo.style.border = 'none';
    browseSlideButtonTwo.style.outline = 'none';
})
browseSlideButtonOne.addEventListener('click', ()=>{
    browseSlideContentOne.style.display = 'block'
    browseSlideContentTwo.style.display = 'none'
    browseSliderOne.style.width = '100%';
    browseSliderOne.style.transform = 'translateX(0)'
    browseSliderTwo.style.width = '0';
    browseSliderTwo.style.transform = 'translateX(100%)'
    browseSlideButtonOne.style.border = '3px solid #FFC0CB';
    browseSlideButtonOne.style.outline = '3px solid white';
    browseSlideButtonTwo.style.border = 'none';
    browseSlideButtonTwo.style.outline = 'none';
})
browseSlideButtonTwo.addEventListener('click', ()=>{
    browseSlideContentOne.style.display = 'none'
    browseSlideContentTwo.style.display = 'block'
    browseSliderOne.style.width = '0';
    browseSliderOne.style.transform = 'translateX(-100%)'
    browseSliderTwo.style.width = '100%';
    browseSliderTwo.style.transform = 'translateX(0)';
    browseSlideButtonTwo.style.border = '3px solid #8EE2E6';
    browseSlideButtonTwo.style.outline = '3px solid white';
    browseSlideButtonOne.style.border = 'none';
    browseSlideButtonOne.style.outline = 'none';
})


const forChildren = document.getElementById('for-children');
const forMen = document.getElementById('for-men');
const forMenButton = document.getElementById('for-men-button');
const forChildButton = document.getElementById('for-child-button')

forMenButton.addEventListener('click', ()=>{
    forMen.style.display = 'block';
    forChildren.style.display = 'none';
    forMenButton.classList.add('active');
    forChildButton.classList.remove('active');
})
forChildButton.addEventListener('click', ()=>{
    forMen.style.display = 'none';
    forChildren.style.display = 'block';
    forMenButton.classList.remove('active');
    forChildButton.classList.add('active');
})


//.......................................Latest news......................

var carousel = document.querySelector('.carousel');
var carouselContent = document.querySelector('.carousel-content');
var slides = document.querySelectorAll('.slide');
var arrayOfSlides = Array.prototype.slice.call(slides);
var carouselDisplaying;
var screenSize;
setScreenSize();
var lengthOfSlide;

function addClone() {
   var lastSlide = carouselContent.lastElementChild.cloneNode(true);
   lastSlide.style.left = (-lengthOfSlide) + "px";
   carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
}
// addClone();

function removeClone() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
}

function moveSlidesRight() {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  var width = 0;

  slidesArray.forEach(function(el, i){
    el.style.left = width + "px";
    width += lengthOfSlide;
  });
  addClone();
}
moveSlidesRight();

function moveSlidesLeft() {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  slidesArray = slidesArray.reverse();
  var maxWidth = (slidesArray.length - 1) * lengthOfSlide;

  slidesArray.forEach(function(el, i){
    maxWidth -= lengthOfSlide;
    el.style.left = maxWidth + "px";
  });
}

window.addEventListener('resize', setScreenSize);

function setScreenSize() {
  if ( window.innerWidth >= 1000 ) {
    carouselDisplaying = 3;
  } else if ( window.innerWidth >= 600 ) {
    carouselDisplaying = 2;
  } else {
    carouselDisplaying = 1;
  }
  getScreenSize();
}

function getScreenSize() {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  lengthOfSlide = ( carousel.offsetWidth  / carouselDisplaying );
  var initialWidth = -lengthOfSlide;
  slidesArray.forEach(function(el) {
    el.style.width = lengthOfSlide + "px";
    el.style.left = initialWidth + "px";
    initialWidth += lengthOfSlide;
  });
}


var rightNav = document.querySelector('.nav-right');
rightNav.addEventListener('click', moveLeft);

var moving = true;
function moveRight() {
  if ( moving ) {
    moving = false;
    var lastSlide = carouselContent.lastElementChild;
    lastSlide.parentNode.removeChild(lastSlide);
    carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
    removeClone();
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener('transitionend', activateAgain);
    moveSlidesRight();
  }
}

function activateAgain() {
  var firstSlide = carouselContent.firstElementChild;
  moving = true;
  firstSlide.removeEventListener('transitionend', activateAgain);
}

var leftNav = document.querySelector('.nav-left');
leftNav.addEventListener('click', moveRight);

// var moveLeftAgain = true;

function moveLeft() {
  if ( moving ) {
    moving = false;
    removeClone();
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener('transitionend', replaceToEnd);
    moveSlidesLeft();
  }
}

function replaceToEnd() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
  carouselContent.appendChild(firstSlide);
  firstSlide.style.left = ( (arrayOfSlides.length -1) * lengthOfSlide) + "px";
  addClone();
  moving = true;
  firstSlide.removeEventListener('transitionend', replaceToEnd);
}




carouselContent.addEventListener('mousedown', seeMovement);

var initialX;
var initialPos;
function seeMovement(e) {
  initialX = e.clientX;
  getInitialPos();
  carouselContent.addEventListener('mousemove', slightMove);
  document.addEventListener('mouseup', moveBasedOnMouse);
}

function slightMove(e) {
  if ( moving ) {
    var movingX = e.clientX;
    var difference = initialX - movingX;
    if ( Math.abs(difference) < (lengthOfSlide/4) ) {
      slightMoveSlides(difference);
    }  
  }
}

function getInitialPos() {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  initialPos = [];
  slidesArray.forEach(function(el){
    var left = Math.floor( parseInt( el.style.left.slice(0, -2 ) ) ); 
    initialPos.push( left );
  });
}

function slightMoveSlides(newX) {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  slidesArray.forEach(function(el, i){
    var oldLeft = initialPos[i];
    el.style.left = (oldLeft + newX) + "px";
  });
}

function moveBasedOnMouse(e) { 
  var finalX = e.clientX;
  if ( initialX - finalX > 0) {
    moveRight();
  } else if ( initialX - finalX < 0 ) {
    moveLeft();
  }
  document.removeEventListener('mouseup', moveBasedOnMouse);
  carouselContent.removeEventListener('mousemove', slightMove);
}