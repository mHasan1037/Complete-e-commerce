//...................Login singup of top....................
const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerHTML
    .split('')
    .map((letter, idx)=> `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
    .join('')
})

const signRegister = document.getElementById('sign-register');
const modalBg = document.getElementById('modal-bg');
const modalCross = document.getElementById('modal-cross');
const modalLogin = document.getElementById('modal-login');
const modalSignup = document.getElementById('modal-signup');
const modalSignupBg = document.getElementById('modal-signup-bg');
const modalSignin = document.getElementById('modal-signin');
const modalSignupCross = document.getElementById('modal-signup-cross')

signRegister.addEventListener('click', (e)=>{
    e.preventDefault()
    modalBg.style.opacity = '1';
    modalBg.style.visibility = 'visible';
    modalLogin.style.animation = 'modal-jump 250ms ease-in both';
})
modalCross.addEventListener('click', ()=>{
    modalBg.style.opacity = '0';
    modalBg.style.visibility = 'hidden'
})

modalSignup.addEventListener('click', (e)=>{
    e.preventDefault()
    modalBg.style.opacity = '0';
    modalBg.style.visibility = 'hidden'
    modalSignupBg.style.opacity = '1';
    modalSignupBg.style.visibility ='visible'
})
modalSignin.addEventListener('click', ()=>{
    modalBg.style.opacity = '1';
    modalBg.style.visibility = 'visible';
    modalSignupBg.style.opacity = '0';
    modalSignupBg.style.visibility ='hidden'
})
modalSignupCross.addEventListener('click', ()=>{
    modalSignupBg.style.opacity = '0';
    modalSignupBg.style.visibility ='hidden'
})

//..............Side nav bar starts from here......................


function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("top-bg").style.marginLeft = "300px";
    document.getElementById("logo-search-part-bg").style.marginLeft = "250px";
    document.getElementById("top-nav-bg").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("top-bg").style.marginLeft= "0";
    document.getElementById("logo-search-part-bg").style.marginLeft= "0";
    document.getElementById("top-nav-bg").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

const mobileSubbtnOne = document.getElementById("mobile-subbtn-one");
const mobileSubdropdownOne = document.getElementById('mobile-subdropdown-one');
const subPlus = document.getElementById('sub-plus');
const subMinus = document.getElementById('sub-minus');

mobileSubbtnOne.addEventListener('click', (e)=>{
    e.preventDefault()
    mobileSubdropdownOne.classList.toggle('active');
})

const mobileSubbtntwo = document.getElementById("mobile-subbtn-two");
const mobileSubdropdowntwo = document.getElementById('mobile-subdropdown-two');
mobileSubbtntwo.addEventListener('click', (e)=>{
    e.preventDefault()
    mobileSubdropdowntwo.classList.toggle('active');
})

const mobileSubbtnthree = document.getElementById("mobile-subbtn-three");
const mobileSubdropdownthree = document.getElementById('mobile-subdropdown-three');
mobileSubbtnthree.addEventListener('click', (e)=>{
    e.preventDefault()
    mobileSubdropdownthree.classList.toggle('active');
})

const subMobileMenu = document.getElementById('sub-mobile-menu');
const subCategoryMenu = document.getElementById('sub-category-menu');
const mobileSideSubmenu = document.getElementById('mobile-side-submenu');
const categorySideSubmenu = document.getElementById('category-side-submenu');


subCategoryMenu.addEventListener('click', ()=>{
    mobileSideSubmenu.style.display = 'none';
    categorySideSubmenu.style.display = 'block';
    subMobileMenu.classList.remove('active');
    subCategoryMenu.classList.add('active');
    subCategoryMenu.style.marginLeft = '5px';
})
subMobileMenu.addEventListener('click', ()=>{
    mobileSideSubmenu.style.display = 'block';
    categorySideSubmenu.style.display = 'none';
    subMobileMenu.classList.add('active');
    subCategoryMenu.classList.remove('active');
})


const categorySubbtnone = document.getElementById("category-subbtn-one");
const categorySubdropdownone = document.getElementById('category-subdropdown-one');
categorySubbtnone.addEventListener('click', (e)=>{
    e.preventDefault()
    categorySubdropdownone.classList.toggle('active');
})







