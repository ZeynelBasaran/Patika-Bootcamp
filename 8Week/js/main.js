(function () {
  "use strict";

  var camera = new Swiper("#camera .swiper",{
    speed:600,
    spaceBetween:12,
    navigation:{
        enabled:true,
        prevEl:'swiper-button-prev',
        nextEl:'swiper-button-next',
    }
  });
  

  var photos = GLightbox({
    selector:'#photos .photo'
  })

  console.log(photos)
})();