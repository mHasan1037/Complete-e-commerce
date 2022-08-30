class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="top-bg" id="top-bg">
        <div class="top-main">
            <p>Welcome to Romi</p>
            <div class="top-side">
                <div class="top-side-dropdown">
                   <div class="top-side-dropbtn">Language
                       <svg class="top-down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
                   </div>
                   <div class="top-side-dropdown-content">
                       <a href="#">English</a>
                       <a href="#">Bangla</a>
                   </div>
                </div>
                <div class="top-side-dropdown">
                   <div class="top-side-dropbtn">Currency
                       <svg class="top-down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
                   </div>
                   <div class="top-side-dropdown-content">
                       <a href="#">USD</a>
                       <a href="#">EUR</a>
                   </div>
                </div>
                <div class="top-side-dropdown">
                   <a href="" id="sign-register">Sign In / Register</a>
                </div>
            </div>
        </div>
     </div>
   
   <!------------------------TOP MODAL PART--------------------------->
   <div id="modal-bg">
      <div class="modal-login" id="modal-login">
          <h1>Log In</h1>
          <p>Become a part of our community!</p>
          <form class="modal-form">
               <div class="form-control">
                   <input type="text" required>
                   <label>Email</label>
               </div>
               <div class="form-control">
                   <input type="password" required>
                   <label>Password</label>
               </div>
   
               <label class="form-ckeckbox">
                   <input type="checkbox" checked="checked">
                   <span class="checkmark"></span> 
                   <p>Remember Me</p>
               </label>
               <button>LOG IN</button>
               <a href="" class="forget-pass">Forgot your password? Get help</a>
          </form>
          <div class="not-a-member">
              <p>Not a member?</p>
              <button id="modal-signup">SIGN UP</button>
          </div>
          <svg class="modal-cross" id="modal-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
      </div>
   </div>
   <div id="modal-signup-bg">
     <div class="modal-signup">
         <h1>Create An Account</h1>
         <p>Welcome! Register for an account</p>
         <form class="modal-form">
           <div class="form-control">
               <input type="text" required>
               <label>Your username</label>
           </div>
           <div class="form-control">
               <input type="text" required>
               <label>Your email</label>
           </div>
           <div class="form-control">
               <input type="password" required>
               <label>Password</label>
           </div>
           <div class="form-control">
               <input type="password" required>
               <label>Confirm Password</label>
           </div>
           
           <button>REGISTER</button>
      </form>
       <div class="not-a-member">
           <p>Already a member?</p>
           <button id="modal-signin">SIGN IN</button>
       </div>
       <svg class="modal-cross" id="modal-signup-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
     </div>
   </div>
   
   
   <!-----------------------------------Logo and search bar starts from here-------------------------------------->
   <div class="logo-search-part-bg" id="logo-search-part-bg">
       <div class="logo-search-part-main">
           <div class="logo"><h1>ROMI</h1></div>
           <form class="top-search-bar">
               <input type="text" placeholder=" Search anything..." name="search">
               <button type="submit">Search</button>
           </form>
           <div class="top-search-bar-icons">
               <div class="top-search-bar-icon-container"><svg class="top-search-bar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M320 488C320 497.5 314.4 506.1 305.8 509.9C297.1 513.8 286.1 512.2 279.9 505.8L199.9 433.8C194.9 429.3 192 422.8 192 416C192 409.2 194.9 402.7 199.9 398.2L279.9 326.2C286.1 319.8 297.1 318.2 305.8 322.1C314.4 325.9 320 334.5 320 344V384H336C371.3 384 400 355.3 400 320V153.3C371.7 140.1 352 112.8 352 80C352 35.82 387.8 0 432 0C476.2 0 512 35.82 512 80C512 112.8 492.3 140.1 464 153.3V320C464 390.7 406.7 448 336 448H320V488zM456 79.1C456 66.74 445.3 55.1 432 55.1C418.7 55.1 408 66.74 408 79.1C408 93.25 418.7 103.1 432 103.1C445.3 103.1 456 93.25 456 79.1zM192 24C192 14.52 197.6 5.932 206.2 2.076C214.9-1.78 225-.1789 232.1 6.161L312.1 78.16C317.1 82.71 320 89.2 320 96C320 102.8 317.1 109.3 312.1 113.8L232.1 185.8C225 192.2 214.9 193.8 206.2 189.9C197.6 186.1 192 177.5 192 168V128H176C140.7 128 112 156.7 112 192V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V192C48 121.3 105.3 64 176 64H192V24zM56 432C56 445.3 66.75 456 80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432z"/></svg></div>
               <div class="top-search-bar-icon-container"><svg class="top-search-bar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg></div>
               <div class="top-search-bar-icon-container"><svg class="top-search-bar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z"/></svg></div>
               <div class="top-barger-menu" onclick="openNav()"><svg class="top-search-bar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg></div>
           </div>
       </div>
   </div>
   
   <!------------------------------------------Nav bar for big screen------------------------------>
   
   <div class="top-nav-bg" id="top-nav-bg">
       <div class="top-nav-container">
           <nav class="top-nav">
               <ul>
                   <li><a href="index.html">Home</a></li>
                   <li><a href="shop.html">Shop <svg class="top-nav-down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg></a>
                       <div class="top-nav-dropdown">
                           <a href="shop-left.html" class="top-nav-dropdown-link">Shop Left Sidebar</a>
                           <a href="shop-right.html" class="top-nav-dropdown-link">Shop Right Sidebar</a>
                           <a href="shop-full.html" class="top-nav-dropdown-link">Shop Full Width</a>
                           <a href="shop-fullwidth.html" class="top-nav-dropdown-link">Shop 100% Full Width</a>
                           <a href="shop-both.html" class="top-nav-dropdown-link">Shop Both Sidebars</a>
                       </div>
                   </li>
                   <li><a href="">Product <svg class="top-nav-down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg></a>
                       <div class="top-nav-dropdown">
                           <a href="simple-product.html" class="top-nav-dropdown-link">Simple Product</a>
                           <a href="variable-product.html" class="top-nav-dropdown-link">Variable Product</a>
                           <a href="affiliate-product.html" class="top-nav-dropdown-link">Affiliate Product</a>
                           <a href="grouped-product.html" class="top-nav-dropdown-link">Grouped Product</a>
                       </div>
                   </li>
                   <li><a href="pages.html">Pages <svg class="top-nav-down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg></a>
                       <div class="top-nav-dropdown">
                           <a href="myaccount.html" class="top-nav-dropdown-link">My Account</a>
                           <a href="wishlist.html" class="top-nav-dropdown-link">My Wishlist</a>
                           <a href="cart.html" class="top-nav-dropdown-link">My Cart</a>
                           <a href="checkout.html" class="top-nav-dropdown-link">My Checkout</a>
                       </div>
                   </li>
                   <li><a href="blog.html">Blog</a></li>
                   <li><a href="about.html">About Us</a></li>
                   <li><a href="contact.html">Contact Us</a></li>
               </ul>
           </nav>
           <div class="top-nav-support">
               <div class="support-icon">
                   <svg class="support-icon-headphone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 32C112.9 32 4.563 151.1 0 288v104C0 405.3 10.75 416 23.1 416S48 405.3 48 392V288c0-114.7 93.34-207.8 208-207.8C370.7 80.2 464 173.3 464 288v104C464 405.3 474.7 416 488 416S512 405.3 512 392V287.1C507.4 151.1 399.1 32 256 32zM160 288L144 288c-35.34 0-64 28.7-64 64.13v63.75C80 451.3 108.7 480 144 480L160 480c17.66 0 32-14.34 32-32.05v-127.9C192 302.3 177.7 288 160 288zM368 288L352 288c-17.66 0-32 14.32-32 32.04v127.9c0 17.7 14.34 32.05 32 32.05L368 480c35.34 0 64-28.7 64-64.13v-63.75C432 316.7 403.3 288 368 288z"/></svg>
               </div>
               <div class="support-number">
                   <p>Support</p>
                   <p>00000-000000</p>
               </div>
           </div>
       </div>
   </div>
   
   <!-----------------------------------Side nav bar starts from here-------------------------------------------------->
   
   <div id="mySidenav" class="sidenav">
       <div class="mySidenavTop">
           <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
           <p>QUICK NAVIGATION</p>
       </div>
       <div class="mySidenave-searchbar">
           <input type="search" placeholder="Search">
           <svg class="mySidenav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
       </div>
       <div class="mobile-menu-categories">
           <div id="sub-mobile-menu" class="mobile-menu active">
                Mobile Menu
           </div>
           <div id="sub-category-menu" class="mobile-menu">
                Categories
           </div>
       </div>
       <div class="mobile-side-submenu" id="mobile-side-submenu">
           <ul>
               <li><a href="index.html">Home</a></li>
               <li><a href="">Shop</a></li>
               <li><a href="blog.html">Blog</a></li>
               <li><a href="about.html">About Us</a></li>
               <li><a href="contact.html">Contact Us</a></li>
               <li class="mobile-subbtn" id="mobile-subbtn-one"><a href="">My Account</a><a href=""><span id="sub-plus">&#43;</span><span id="sub-minus" class="sub-minus">-</span></a></li>
                   <ul class="mobile-subdropdown" id="mobile-subdropdown-one">
                       <li><a href="">My Cart</a></li>
                       <li><a href="">My Checkout</a></li>
                       <li><a href="">My Wishlist</a></li>
                   </ul>
               <li class="mobile-subbtn" id="mobile-subbtn-two"><a href="">Social Links</a><a href=""><span id="sub-plus">&#43;</span><span id="sub-minus" class="sub-minus">-</span></a></li>
                   <ul class="mobile-subdropdown" id="mobile-subdropdown-two">
                       <li><a href="">My Cart</a></li>
                       <li><a href="">My Checkout</a></li>
                       <li><a href="">My Wishlist</a></li>
                   </ul>
               <li class="mobile-subbtn" id="mobile-subbtn-three"><a href="">Other Links</a><a href=""><span id="sub-plus">&#43;</span><span id="sub-minus" class="sub-minus">-</span></a></li>
                   <ul class="mobile-subdropdown" id="mobile-subdropdown-three">
                       <li><a href="">My Cart</a></li>
                       <li><a href="">My Checkout</a></li>
                       <li><a href="">My Wishlist</a></li>
                   </ul>
           </ul>
       </div>
       <div class="category-side-submenu" id="category-side-submenu">
           <ul>
               <li><a href="">Accessories</a></li>
               <li class="category-subbtn" id="category-subbtn-one"><a href="">Backpack</a><a href=""><span id="sub-plus">&#43;</span><span id="sub-minus" class="sub-minus">-</span></a></li>
                   <ul class="category-subdropdown" id="category-subdropdown-one">
                       <li><a href="">Cotton shirt</a></li>
                       <li><a href="">Imitation leather shirt</a></li>
                   </ul>
               <li><a href="">Dresses</a></li>
               <li><a href="">Shoes</a></li>
               <li><a href="">Tops & T-Shurt</a></li>
               <li><a href="">Uncategory</a></li>
           </ul>
       </div>
   </div>   
        `
    }
}


customElements.define('my-header', MyHeader)



/*const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.top-nav a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active')
    }
})
*/
