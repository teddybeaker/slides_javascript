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
	function setDefaultTitle() {
		if (!document.title) {
			var title = "Example.com";
			/* #### ERROR ####
				forgot to write "var" before renderHeading -> polluted global 
				namespace (i.e. function that was defined in someLib.js) 
				instead of defining variable with local scope
			*/
			var renderHeading = document.getElementById('seoSummary');
			if (renderHeading) {
				title = renderHeading;
			}
			document.title = title;
		}
	}
	setDefaultTitle();
}());