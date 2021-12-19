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
			var renderHeading = document.getElementById('seoSummary');
			if (renderHeading) {
				title = renderHeading;
			}
			document.title = title;
		}
	}
	setDefaultTitle();
}());