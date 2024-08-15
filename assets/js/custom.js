$('#toggle').click(function () {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
});

$('#close').hide()
$('#hamburger').click(function () {
   $('#close').show()
   $('#hamburger').hide()
})
$('#close').click(function () {
   $('#hamburger').show()
   $('#close').hide()
})

/*------------------------------------
   Search bar
--------------------------------------*/
$('.open-search').on('click', function (event) {
   event.preventDefault();
   $('.search-area').addClass('active');
});

$('.search-close').on('click', function (event) {
   event.preventDefault();
   $('.search-area').removeClass('active');
});


/*------------------------------------
   Accordion
--------------------------------------*/


$('.panel-collapse').on('show.bs.collapse', function () {
   $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
   $(this).siblings('.panel-heading').removeClass('active');
});


/*------------------------------------
   Product Single Image Gallery
--------------------------------------*/


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
   showSlides(slideIndex += n);
}

function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("demo");
   var captionText = document.getElementById("caption");
   if (n > slides.length) { slideIndex = 1 }
   if (n < 1) { slideIndex = slides.length }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
   captionText.innerHTML = dots[slideIndex - 1].alt;
}


/*------------------------------------
   Quantity Selector
--------------------------------------*/


// $(document).ready(function () {
//    const minus = $('.quantity__minus');
//    const plus = $('.quantity__plus');
//    const input = $('.quantity__input');
//    minus.click(function (e) {
//       e.preventDefault();
//       var value = input.val();
//       if (value > 1) {
//          value--;
//       }
//       input.val(value);
//    });

//    plus.click(function (e) {
//       e.preventDefault();
//       var value = input.val();
//       value++;
//       input.val(value);
//    })
// });