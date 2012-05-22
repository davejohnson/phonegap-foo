(function() {
	window.hello = {
		say: function(win, fail) {
			cordova.exec(win, fail, 'Hello', 'say', []);
		}
	}
})();