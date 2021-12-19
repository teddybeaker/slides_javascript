(function(){
	if (typeof window.console === 'undefined') {
		window.console = {
			log: function(msg) {}
		};
	}
	if (window.innerWidth < 800) {
		console.log("display to small");
		window.location = "http://mobile.example.com";
	}
	/* #### ERROR ####
	assigned $ instead of testing against it */
	if (typeof $  === 'undefined') {
		console.log("can not use jquery");
		window.location = "http://example.com/errors/missing_javascript.html";
	}
}());