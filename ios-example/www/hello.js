(function() {
    var Hello = function() {
        return {
            say: function(win, fail) {
                cordova.exec(win, fail, 'Hello', 'say', [  ]);
            }
        }
    };
    
    window.hello = Hello();
})();