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


// id did this
	// $("a").click(function(){
 //  		// $(this).click('confirm("Do you wish to continue to site?")')
 //  		 return confirm("Do you wish to continue to site?");

	// });


// got help with this one
	$("a").click(function(){
		var loadPage = window.confirm('Do you wish to continue to site?');
		if (loadPage === false){
			$(this).remove();
			return false;
		}
	});


});