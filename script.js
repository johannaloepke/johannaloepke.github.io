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

	// changes the jumbotron picture to NASA's Astronomy Picture of the Day on hover
	$('.jumbotron').hover( 
		function() {
			$.ajax("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", {
	    		success: function (data) {
	      			$(".jumbotron").css("background", "url(" + data.url + ")");
	    		}
	    	});
		},
		function() {
			$(".jumbotron").css("position", "relative");
			$(".jumbotron").css("background", "#000 url(\"ocean.jpg\") center center");
			$(".jumbotron").css("width", "100%");
			$(".jumbotron").css("height", "500px");
			$(".jumbotron").css("background-size", "cover");
			$(".jumbotron").css("overflow", "hidden");
		}
	);
});
