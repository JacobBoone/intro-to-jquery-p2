$(document).on('ready', function() {
  
	

	$("p").mouseover(function(){
  		$(this).css("color","hotpink");
		console.log('i am now pink');
	});


	$("p").mouseout(function(){
  		$(this).css("color","#000");
		console.log('i am now the default color');
	});


	$("h1").append("!");
		console.log('added a ! to headers');



	$("a").click(function(){
  	

		console.log('i am now restored');
	});

	// $('a').click(confirm('Do you want to visit this page?'))'

});