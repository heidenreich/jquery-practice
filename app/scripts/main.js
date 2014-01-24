
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
	$(this).addClass('change');
});


//TWENTY-FIVE 

$('.twenty-five').hover(function() {

	$(this).toggleClass('arrow');	
});

//TWENTY-SIX


$('.twenty-six').hover(function() {

	$(this).addClass('super-border');	
});


//TWENTY-SEVEN

$('.twenty-seven').hover(function() {

	$(this).addClass('super-shadow');	
});

//TWENTY-EIGHT


$('.twenty-eight').hover(function(){

	$(this).addClass('hidden')
})

//TWENTY-NINE

$('.twenty-nine').hover(function(){

  	$(this).fadeOut(1000);
});

// THIRTY

$('.thirty').hover(function(){

	$(this).addClass('final')
})

