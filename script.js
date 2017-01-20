$(document).ready(function() {

	// creates a smooth scrolling effect for the different pages
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// changes the jumbotron picture to NASA's Astronomy Picture of the Day on click
	$('.jumbotron').toggle( 
		function() {
			$.ajax("https://api.nasa.gov/planetary/apod?api_key=639SL5aQsEnsUBZkjD6GobqRKpOmZ7s2K6qeUhGE", {
	    		success: function (data) {
	    			data.hd = true;
	      			$(".jumbotron").css("background", "url(" + data.url + ")");
	      			$(".jumbotron").css("background-size", "cover");
	    		}
	    	});
		},
		function() {
			$(".jumbotron").css("position", "relative");
			$(".jumbotron").css("background", "#000 url(Images/ocean.jpg) center center");
			$(".jumbotron").css("width", "100%");
			$(".jumbotron").css("height", "500px");
			$(".jumbotron").css("background-size", "cover");
			$(".jumbotron").css("overflow", "hidden");
		}
	);
});
