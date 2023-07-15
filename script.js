let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    reviewForm.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    reviewForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
   loginForm.classList.toggle('active');
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   navbar.classList.remove('active');
   reviewForm.classList.remove('active');
}




let reviewForm = document.querySelector('.review-form');

document.querySelector('#review-btn').onclick = () =>
{
    reviewForm.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');

}

  let subMenu = document.querySelector('.sub-menu-1');

  document.querySelector('#view-cart-btn').onclick = () => {
    subMenu.classList.toggle('sub-menu-1');
    reviewForm.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');

  }
  let writeForm = document.querySelector('.write-form');

  document.querySelector('#write-review-btn').onclick = () => {
    writeForm.classList.toggle('write-form');
    subMenu.classList.remove('active')
    reviewForm.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');

  }






let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    reviewForm.classList.remove('active');
}





window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    reviewForm.classList.remove('active');
}



var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,

      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,

      },
    },
  });
