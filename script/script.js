//SCROLLING ANIMATION

var links = document.querySelectorAll('.scroll');
var body = (navigator.userAgent.toLowerCase().indexOf('chrome') !== -1)  ? document.body : document.documentElement;

function scrollTo(link, section){
	//Animation script provided by http://www.cssscript.com/smooth-scroll-to-animation-with-anchor-scrolling-js-library/ , modified by me
	var easeInOutCubic = function(t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b
	};

	link.addEventListener('click', function(e){
		var sectionItem = document.querySelector(section);

		var startTime;
		var startPos = document.body.scrollTop;
		var endPos = (sectionItem.offsetTop - sectionItem.scrollTop + sectionItem.clientTop);
		var maxScroll = body.scrollHeight - window.innerHeight;
		var scrollEndValue = startPos + endPos < maxScroll ? endPos : maxScroll - startPos;
		var duration = 1400;
		var scroll = function(timestamp) {
			startTime = startTime || timestamp;
			var elapsed = timestamp - startTime;
			var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration);
			body.scrollTop = progress;
			elapsed < duration && requestAnimationFrame(scroll)
		};
		requestAnimationFrame(scroll);
		e.preventDefault();

	}, false)
}


for(var j = 0, len = links.length; j < len; j++){
	var section = links[j].getAttribute('href');
	scrollTo(links[j], section);
}