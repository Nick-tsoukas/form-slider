
$(document).ready(function() {
 const width = $(window).width();


 $('body').attr('style', `width:${width * 3}px`);

 $('#q1').on('click', function(e) {
   $('section').attr('style',`transform: translate(-${width}px)`);

 });

 $('#q2').on('click', function(e) {
   $('section').attr('style',`transform: translate(-${width *2}px)`);
   width = $(window).width();
   console.log(width)
 });

 $('#q3').on('click', function(e) {
   $('section').attr('style',`transform: translate(0px)`)
 });

});
