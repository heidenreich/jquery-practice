
// OHHH SNAP

$('.button-one').click(function(){
  console.log('the button clicked');
 
  $(this).addClass('active');
});

// EXAMPLE TWO

$('.button-two').click(function(){
	console.log('Fade Away!');

	$(this).fadeOut(2000);	
});

// EXAMPLE THREE

$('.button-three').click(function(){

	$(this).addClass('grow');
});


// EXAMPLE FOUR

$('.four').hover(function(){
   console.log("We be fading");
   $(this).fadeTo(300, .33);

});

// EXAMBLE FIVE

$('.click-here' ).click(function() {

  $('.box:hidden:first').fadeIn(3000);
});


// EXAMPLE SIX
$('.disappear').hover(function(){

 	$('.six').slideUp(3000);
});

//EXAMPLE SEVEN

$('.seven').delegate('p','click',function(){

	$(this).after('<p>HEY NOW</p>');
});

//EXAMPLE EIGHT

$('.eight').mouseleave(function(){

	$(this).removeClass('leave'); 
});

//EXAMPLE NINE

$('.nine').hover(function(){

	$(this).fadeOut(1000);
});

//EXAMPLE TEN AND ELEVEN

$('.ten-eleven').click(function(){

	$(this).append("<span style='color:red;'>I AM TIRED</span>");
   
});

// EXAMPLE TWELVE

$('.twelve').dblclick(function(){
   
   $(this).fadeTo(300, .33);
});

//EXAMPLE THIRTEEN & FOURTEEN

$('.thirteen-fourteen').blur(function(){

	$(this).css('background-color', 'gray')
})

$('.thirteen-fourteen').focus(function(){

	$(this).css('background-color', 'yellow')
})

//FIFTEEN

$('td').click(function(){
	$(this).toggleClass('data-toggle');
});

//SIXTEEN

$('.button-trigger').click(function(){

	$('.input-trigger').trigger('focus');

});


//SEVENTEEN

$('.seventeen').hover(function(){

  	$(this).addClass('get-big');
});


//EIGHTEEN

$('.eighteen').hover(function(){

  	$(this).addClass('eighteen-grow');
});

//NINETEEN

$('.nineteen').hover(function(){

  	$(this).slideUp();
});

//TWENTY

$('.twenty').hover(function(){

  	$(this).addClass('widen');
});

//TWENTY_ONE
$('.run').click(function() {

	$('.twenty-one').addClass('bigger');	
});

//TWENTY-TWO

$('.twenty-two').mouseover(function(){
   $('.input-field').focus();

})


//TWENTY-THREE

$('.twenty-three').click(function() {

	$('.example').toggleClass('border-all');	
});


//TWENTY-FOUR

$('.twenty-four').click(function(){
	$(this).toggleClass('.toggle-class');
});


//TWENTY-FIVE























// $('.activate-box').click(function(){
//   console.log('the button clicked');

//   $('.box').addClass('active');        
// });

// // $('.expandable').focus(function(){
// //         console.log('focused on an input!');

// //         $(this).addClass('error');
// // })

// $('.submit').click(function(){
//         console.log('focused on an input');

//         $('.expandable').each(function(){
//                 if ($(this).val() == '') {
//                         $(this).addClass('error');
//                 }
//         });
// });

// //Example 1
// $('.hide-this').click(function(){
//   $(this).slideUp();
// });

// //Example 2
// $('.get-big').hover(function(){
//   $(this).addClass('get-bigger');
// });

// //Example 3
// $('.text-field').mouseenter(function(){
//   $(this).addClass('mouse-enter');
// });

// //Example 4
// $('.change-up').bind( "mouseenter mouseleave", function(){
//   $(this).toggleClass('change');
// });

// //Example 5
// $('.dbl-click-this').dblclick(function(){
//   $(this).addClass('dbl-click');
// });




// //Example 9
// $('.button-trigger').click(function(){
//   $('.input-trigger').trigger('focus');
// });

// //Example 10
// $('.loser').mouseleave(function(){
//   $(this).removeClass('we-lose');
// });

// //Example 11
// $('.hide-me').dblclick(function(){
//   $(this).hide('slow');
// });

// //Example 12
// $('.fade-away').hover(function(){
//   $(this).fadeOut('fast');
// });

// //Example 13
// $('a').click(function(){
//   $('.pswd').fadeIn(1000,function(){
//     $('span').fadeIn(100);
//   });
//   return false;
// });

// //Example 14 & 15
// $('.find-me span').click(function(){
//   $(this).fadeOut(500, function(){
//     $('.find-me div').text('"' + $(this).text() + '" has faded out!');
//     $(this).remove();
//   });
// });
// $('.find-me span').hover(function(){
//   $(this).addClass('hilite');
// }, function(){
//   $(this).removeClass('hilite');
// });

// //Example 16
// $('.what-up').dblclick(function(){
//   alert("Couldn't resist!");
// });

// //Example 17
// $('.start-here').mouseup(function(){
//   if ($('.circle:first').is(':hidden') ) {
//     $('.circle').slideDown('fast');
//   } else {
//     $('.circle').hide();
//   }  
// });

// //example 18 & 19
// $('.question')
//   .mousedown(function(){
//     $(this).append("<span style='color:purple;'>A BUTTLOAD!</span>");
//   })
//   .mouseup(function(){
//     $(this).append("<span style='color:red;'> For cereal!</span>");
//   });

// //example 20 & 21
// $('.grr p').focusin(function(){
//   $(this).find('span').css('display','inline').fadeOut(2000);
// });

// //example 22
// $('.ur-mom').click(function(){
//   $('.target').blur();
// });

// //example 23

// //example 24
// $('.box-yo').hover(function(){
//   $(this).addClass('box-yo-move');
// });

// //example 25
// $('.switch-aroo').toggle(
//   function(){
//     $(this).addClass('switch-ster');
//   }, function(){
//     $(this).removeClass('switch-ster');
//   } 
// );

