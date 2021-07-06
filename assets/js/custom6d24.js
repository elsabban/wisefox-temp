(function($) {
    'use strict';
    
     // Mean Menu JS
	  jQuery('.mean-menu').meanmenu({ 
		    meanScreenWidth: "991"
    });

     // Navbar Area
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 0){  
          $('.navbar-area').addClass("sticky-nav");
      }
      else{
          $('.navbar-area').removeClass("sticky-nav");
      }
  });

    // Banner Into Slider 
    $('.banner-into-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    })

    // Service Slider 
    $('.service-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
          "<i class='bx bxs-chevron-left'></i>",
          "<i class='bx bxs-chevron-right'></i>"
        ],
        responsive:{
            0:{
              items: 1
            },
            768:{
                items: 2
            },
            1000:{
              items: 3
            }
        }

    })

    // Tabs
    $('#tabs-item li a').on('click', function(e) {
        $('#tabs-item li, #prices-conten .active').removeClass('active').removeClass('fadeInUp');
        $(this).parent().addClass('active');
        var activeTab = $(this).attr('href');
        $( activeTab).addClass('active fadeInUp');
        e.preventDefault();
    });	

    // Testimonial Slider 
    $('.testimonial-slider').owlCarousel({
        loop: true,
        items: 1,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
          "<i class='bx bxs-chevron-left'></i>",
          "<i class='bx bxs-chevron-right'></i>"
        ],
    })

    // Home Slider 
    $('.home-slider').owlCarousel({
        animateOut: 'fadeOut',
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
          "<i class='bx bxs-left-arrow'></i>",
          "<i class='bx bxs-right-arrow'></i>"
        ],
    })

    // Product Images Slider 
    $('.product-images-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
          "<i class='bx bx-left-arrow-alt'></i>",
          "<i class='bx bx-right-arrow-alt' ></i>"
        ],
        responsive:{
            0:{
                items: 2
            },
            1000:{
                items: 4
            }
        }
    })

    // Testimonial Slider 
    $('.testimonial-slider-two').owlCarousel({
        loop: true,
        items: 1,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
          "<i class='bx bxs-chevron-left'></i>",
          "<i class='bx bxs-chevron-right'></i>"
        ],
    })

    // Tabs Single Page
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li a').on('click', function (g) {
        var tab = $(this).closest('.tab'), 
        index = $(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
        g.preventDefault();
    });

    // Service Dtls Sliser 
    $('.service-dtls-slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
          "<i class='bx bxs-chevron-left'></i>",
          "<i class='bx bxs-chevron-right'></i>"
        ],
    })

    // FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
    });
    
    // Count Time JS
	function makeTimer() {
		var endTime = new Date("july  30, 2020 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);

    // Nice Select JS
    $('select').niceSelect();
   
    // Input Plus & Minus Number JS
    $('.input-counter').each(function() {
        var spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');
        
        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function() {
            if (parseFloat(input.val()) === 0) {
          return;
            }else {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            }
        });
    }); 

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // Handle The Invalid Form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly");
        } else {
            // Everything Looks Good!
            event.preventDefault();
        }
    });
    function callbackFunction (resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
        
    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
        url: "https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Back To Top Js
    $('body').append('<div id="toTop" class="top-btn"><i class="bx bx-chevrons-up"></i></div>');
    $(window).on('scroll',function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    // Preloader JS
    jQuery(window).on('load',function(){
        jQuery(".preloader").fadeOut(500);
    });

    
})(jQuery);

// joker button 
$('.joker-btn a').on('click',function (e) {
    e.preventDefault();
    $('.mob-btns').toggleClass('slidedown');
})

var prev = 0;
var $window = $(window);
var nav = $('.top-bar');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hide-bar', scrollTop > prev);
  $('.sticky-nav .main-nav').toggleClass('stick-head-top',scrollTop > prev)
  $('.sticky-nav .main-nav').toggleClass('stick-head',scrollTop < prev)
  $('.mean-bar').toggleClass('stick-head',scrollTop > prev)
  $('.mobile-nav .logo').toggleClass('stick-logo',scrollTop > prev)
  $('.mobile-nav .menu-btn').toggleClass('stick-logo',scrollTop > prev)
  $('.home-slider').toggleClass('margin-slider',scrollTop > prev)
  prev = scrollTop;
});



var videoElm = $('.js-play'),
    final_url = '';
  // youtube viwer 
  function youtube_parser(x){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  
    var match = x.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }
  
  // console.log(final_url);
  
  videoElm.each(function() {
  
    if($(this).data("link")) {
      // console.log($(this),$(this).data("link"));
  
      final_url = youtube_parser($(this).data("link"));
      console.log(final_url);
      $(this).attr('data-src',final_url);
      $(this).children('img.first').attr('src','https://img.youtube.com/vi/'+ final_url + '/maxresdefault.jpg')
    }
    
  })
  

  
        var player;
  var lastButton = '';
  const youtube = 'youTubeIframe';
  const titleInsert = '.js-title-insert';
  const btnPlay = '.js-play';
  const btnPause = '.js-pause';
  const modalId = '#modalVideo';
  const videoQuality = 'hd720';
  
//   window.onYouTubePlayerAPIReady = function() {
//     player = new YT.Player(youtube, {
//       controls: 2,
//       iv_load_policy: 3,
//       rel: 0,
//       events: {
//         onReady: onPlayerReady
//       }
//     });
//   }

$(btnPlay).on('click', function() {
  var videoId = $(this).attr('data-src');
  var ifr = `<iframe src="${$(this).data('link')}" 
  frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; 
  gyroscope; picture-in-picture" allowfullscreen></iframe>`
  if (lastButton == videoId) {
    $(titleInsert).text($(this).attr('data-title'));
    $('#modalVideo').on('shown.bs.modal',function () {
        $('#modalVideo #youTubeIframe').html(ifr);
    })
    
 
    // player.playVideo(videoId, 0, videoQuality);
  } else {
    $(titleInsert).text($(this).attr('data-title'));
    $('#modalVideo').on('shown.bs.modal',function () {
        $('#modalVideo #youTubeIframe').html(ifr);
    })
    lastButton = videoId;
  }

}); 
  
  
    $('#modalVideo').on('hidden.bs.modal', function () {
        $('#modalVideo #youTubeIframe').empty();
     });
  
    
    


    //  calculator 
    var inchP = 0.2,
    calco = function  (z,o) {
            var width = Number($(z).data('width')),
                height = Number($(z).data('height')),
                rate = Number($(z).data('rate'));
                console.log(rate)
         var calcValues = {
             inchP:inchP,
             width:width,
             height:height,
             squr:(width * height),
             shapeP:(width * height) * inchP,
             y:rate,
             discount:function (x,y) {
                switch(true) {
                case (x <= 50):
                x = 0;
                break;
                case (x > 50 && x < 100):
                x = 20 - y;
                break;
                case (x >=100 && x < 200):
                x = 25 - y;
                break;
                case (x >=200 && x < 300):
                x = 30 - y;
                break;
                case (x >=300 && x < 500):
                x = 33 - y;
                break;
                case (x >=500 && x < 1000):
                x = 35 - y;
                break;
                case (x >=1000 && x < 2000):
                x = 40 - y;
                break;
                case (x >=2000 && x < 3000):
                x = 45 - y;
                break;
                case (x >=3000 && x < 5000):
                x = 50 - y;
                break;
                case (x >=5000 && x <= 10000):
                x = 55 - y;
                break;
                case (x > 10000):
                    x = 60 - y;
                    break;
                }
                return x;
             },
             quantity:function () {
               $('.quantity-select input').each(function () {
                 var tot =  $(this).data('quant') * calcValues.shapeP;
                 var dic = calcValues.discount($(this).data('quant'),calcValues.y);
                 var html = `<span>LE${parseInt(tot)}</span><span>save ${parseInt(dic)}%</span>`
                 if (!isNaN(tot) && !isNaN(dic)) {
                    $(this).next().children('.sh').html(html)
                 } else {
                    $(this).next().children('.sh').html( ``)
                 }
                
                 
               })
             }
     
     
        }
     
        calcValues.quantity();
        console.log( calcValues.shapeP)
    };


    // default calc
    $(document).ready(function () {
        calco($('.size-select input#size1'));

        $('.size-select input:radio').on('click',function () {
            if ($(this).attr('id') !== 'size-custome') {
                $('p.err').html('');
                $('.cust-inpts input').each(function () {
                    $(this).val('')
                })
                console.log(this)
                calco(this);
                $('.quantity-select input').each(function () { 
                    $(this).removeAttr('disabled');
                   
               });
               $('.cust-inpts').removeClass('show');
            }else {
                $('.quantity-select input:radio').each(function () { 
                    $(this).attr('disabled','true');
                   
               });
               $('.cust-inpts').addClass('show');
               $('.cust-inpts input.cust-width').focus();
               $('.cust-inpts input').keyup(function () {
                   if ($('.cust-inpts input.cust-width').val() <= 36 && $('.cust-inpts input.cust-height').val() <= 36)  {
                    if ($('.cust-inpts input.cust-width').val() !== '' && $('.cust-inpts input.cust-height').val() !== '') {
                        $('.quantity-select input').each(function () { 
                            $(this).removeAttr('disabled');
                           $('#size-custome').data('width',$('.cust-inpts input.cust-width').val());
                           $('#size-custome').data('height',$('.cust-inpts input.cust-height').val());
                       });
                        
                       calco($('#size-custome'));
                       



                    } else {
                        $('.quantity-select input').each(function () { 
                            $(this).attr('disabled','true');
                           
                       });
                    }
                    $('p.err').html('');
                    }else {
                       $('p.err').html('max-size is 36"');
                       return;
                    }
               })
            }
        });
    })
  
    $('.quantity-select input#quant-custome').next().children('.sh').css('display','none'); 
    $('.quantity-select input#quant-custome').on('click',function () { 
         $(this).next().children('input').addClass('show').focus();
         $(this).next().children('span.no').css('display','none');
         $('input#cust-quant').keyup(function () {
            $('input#cust-quant').val(parseInt($('input#cust-quant').val()));

            if ($('input#cust-quant').val() > 250000) {
                $('p.errr').html('cant be more than 200000');
                return;
    
            }else {
                $('p.errr').html('');
            }
             $('input#quant-custome').data('quant',parseInt($('input#cust-quant').val()))
             $('.quantity-select input#quant-custome').next().children('.sh').css('display','flex'); 
        calco( $('.size-select input:radio'))
         })
        
    })

    $('.quantity-select input').on('click',function () {
        if ($(this).attr('id') !== 'quant-custome' && $(this).attr('id') !== 'cust-quant') {
            console.log('yes')
            $('.quantity-select input#quant-custome').next().children('input').removeClass('show');
            $('.quantity-select input#quant-custome').next().children('span.no').css('display','block');
            $('.quantity-select input#quant-custome').next().children('span.sh').css('display','none');
            $('.quantity-select input#quant-custome').next().children('input').val('');
            $('p.errr').html('');
        }
    })



    function readURL(input) {
        if (input.files && input.files[0]) {
      
          var reader = new FileReader();
      
          reader.onload = function(e) {
            $('.image-upload-wrap').hide();
      
            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();
      
            // $('.image-title').html(input.files[0].name);
          };
      
          reader.readAsDataURL(input.files[0]);
          
        } else {
          removeUpload();
        }
 
      }
      
      function removeUpload() {
        $('.file-upload-input').replaceWith($('.file-upload-input').clone());
        $('.file-upload-content').hide();
        $('.image-upload-wrap').show();
        
      }
      $('.image-upload-wrap').bind('dragover', function () {
              $('.image-upload-wrap').addClass('image-dropping');
          });
          $('.image-upload-wrap').bind('dragleave', function () {
              $('.image-upload-wrap').removeClass('image-dropping');
             
      });
   