const smallImgs = document.querySelectorAll('.small-img img');

smallImgs.forEach(smallImg =>{
  smallImg.addEventListener('click', ()=>{
    magnifying_img.src = smallImg.src;
    smallImgs.forEach(smallImg =>{ smallImg.classList.remove('active')})
    smallImg.classList.add('active')
  })
})


const magnifying_area = document.getElementById('magnifying_area');
const magnifying_img = document.getElementById('magnifying_img');

magnifying_area.addEventListener("mousemove", function(){
  clientX = event.clientX - magnifying_area.offsetLeft
  clientY = event.clientY - magnifying_area.offsetTop

  mWidth = magnifying_area.offsetWidth
  mHeight = magnifying_area.offsetHeight

  clientX = clientX / mWidth * 100
  clientY = clientY / mHeight * 100

  magnifying_img.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)'
})

magnifying_area.addEventListener("mouseleave", function(){
  magnifying_img.style.transform = 'translate(-50%, -50%) scale(1)'
})


const descReviews = document.querySelectorAll('.desc-review-titles ul li a');

descReviews.forEach(descReview =>{
    descReview.addEventListener('click', ()=>{
        descRemoveActive()
        descReview.classList.add('active')
    })
})

function descRemoveActive(){
    descReviews.forEach(descReview =>{
        descReview.classList.remove('active')
    })
}

const stars = document.querySelectorAll('.simple-your-rating span');

stars.forEach(star =>{
  star.addEventListener('click', ()=>{
    stars.forEach(star=> star.style.color = ' var(--ash-color)')
    star.style.color = 'var(--orange-color)';
  })
})

const simpleFirst = document.getElementById('simple-first');
const simpleLast = document.getElementById('simple-last');
const simpleAssign = document.getElementById('simple-assign');
const simpleAssigns = ["+", "-", "*", "/"];

let x = Math.floor((Math.random() * 10) + 1);
let y = Math.floor((Math.random() * 10) + 1);
simpleFirst.innerText = x;
simpleLast.innerText = y;
simpleAssign.innerText = simpleAssigns[Math.floor(Math.random() * simpleAssigns.length)];


const simpleDescRevs = document.querySelectorAll('.simple-desc-rev li a');
const simpleDiscContainers = document.querySelectorAll('.simple-disc-container');

simpleDescRevs[0].addEventListener('click', ()=>{
  simpleDiscContainers[0].style.display = "block";
  simpleDiscContainers[1].style.display = "none";
  simpleDiscContainers[2].style.display = "none";
  simpleDiscContainers[3].style.display = "none";
})
simpleDescRevs[1].addEventListener('click', ()=>{
  simpleDiscContainers[1].style.display = "block";
  simpleDiscContainers[0].style.display = "none";
  simpleDiscContainers[2].style.display = "none";
  simpleDiscContainers[3].style.display = "none";
})
simpleDescRevs[2].addEventListener('click', ()=>{
  simpleDiscContainers[2].style.display = "block";
  simpleDiscContainers[1].style.display = "none";
  simpleDiscContainers[0].style.display = "none";
  simpleDiscContainers[3].style.display = "none";
})
simpleDescRevs[3].addEventListener('click', ()=>{
  simpleDiscContainers[2].style.display = "none";
  simpleDiscContainers[1].style.display = "none";
  simpleDiscContainers[0].style.display = "none";
  simpleDiscContainers[3].style.display = "block";
})