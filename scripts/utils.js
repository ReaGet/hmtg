var utils = {};

utils.swipedetect = function(el, callback) {
	var touchsurface = el,
	    swipedir,
	    startX,
	    startY,
	    distX,
	    distY,
	    threshold = 150,
	    restraint = 100,
	    allowedTime = 300,
	    elapsedTime = 0,
	    startTime = 0,
	    handleswipe = callback || function(swipedir) { };

	var test;
			  
	touchsurface.addEventListener('touchstart', function(e) {
	    var touchobj = e.changedTouches[0];
	    
	    swipedir = 'none';
	    startX = touchobj.pageX;
	    startY = touchobj.pageY;
	    startTime = new Date().getTime();
	    
	    e.preventDefault();
	}, false);
			  
	touchsurface.addEventListener('touchmove', function(e) {
	    e.preventDefault();
	}, false);
			  
	touchsurface.addEventListener('touchend', function(e) {
	    var touchobj = e.changedTouches[0],
	        distX = touchobj.pageX - startX,
	        distY = touchobj.pageY - startY,
	        elapsedTime = new Date().getTime() - startTime;
	
	    if (elapsedTime <= allowedTime) {
	    	if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { 
	        	swipedir = (distX < 0)? 'left' : 'right';
			}
	        else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
	        	swipedir = (distY < 0)? 'up' : 'down';
	        }
	    }
			    
	    handleswipe(swipedir);
		e.preventDefault();
	}, false);
};