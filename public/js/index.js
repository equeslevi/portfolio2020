// //Let it rain!
// $(document).ready(function() {

// function stopLoad() {
//     $('#loadingbody').addClass('d-none')
//     $('#contentbody').removeClass('d-none')
//     $("#mainNav").animate({'opacity':'1'},5000);
// };

// $(window).on("load", function() {
//     setTimeout(stopLoad(), 1000);
// });

//   /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
    
//         /* Check the location of each desired element */
//         $('.hideme').each( function(i){
            
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
                
//                 $(this).animate({'opacity':'1'},1000);
                    
//             }
            
//         }); 
    
//     });

// });


// //scroll bar hide shit
// // document.documentElement.style.overflowX = 'hidden';

// $("#mainNav").animate({'opacity':'1'},5000);
// $("#viewwork").animate({'opacity':'1'},3000);
// 	//resizing shit
//        initialize();
//        function initialize() {
//            window.addEventListener('resize', resizeCanvas, false);
//            resizeCanvas();
//         }
//         function redraw() {
// 		    var ctx = canvas.getContext('2d');
// 		    var w = canvas.width;
// 		    var h = canvas.height;
// 		    ctx.strokeStyle = 'rgba(174,194,224,0.5)';
// 		    ctx.lineWidth = 1;
// 		    ctx.lineCap = 'round';
//         }
//         function resizeCanvas() {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//             redraw();        
//         }
 
// !function(a){"use strict";a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=a(this.hash);if((o=o.length?o:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({scrollTop:o.offset().top-54},1e3,"easeInOutExpo"),!1}}),a(".js-scroll-trigger").click(function(){a(".navbar-collapse").collapse("hide")}),a("body").scrollspy({target:"#mainNav",offset:56});var o=function(){a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-shrink"):a("#mainNav").removeClass("navbar-shrink")};o(),a(window).scroll(o),a(".portfolio-modal").on("show.bs.modal",function(o){a(".navbar").addClass("d-none")}),a(".portfolio-modal").on("hidden.bs.modal",function(o){a(".navbar").removeClass("d-none")})}(jQuery);