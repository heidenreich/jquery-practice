

$('.activate-box').click(function(){
	console.log('the button clicked');

	$('.box').addClass('active');
});

$('.submit').click(function (){
	console.log('focused on input!');

	$('input').addClass('error'){
		if ($(this).val() == '') {
			$(this).addClass('error');
		}
	});

});