// EDUCATION/EXPERIENCE show and hide information
var infoContainer = document.querySelectorAll('.infoContainer'),
	seeMore = document.querySelectorAll('.seeMore');

function clickHandler(button, i){
	button.addEventListener('click', function(e){
		var info = document.querySelector('.sm-' + i);
		var infoClass = info.getAttribute("class");
		info.className = infoClass == "seeMore hide sm-" + i ? "seeMore show sm-" + i : "seeMore hide sm-" + i;
	}, false)
}

for(var i = 0; i < seeMore.length; i++){
	seeMore[i].className = "seeMore hide sm-" + i;
}

for(var i = 0; i < infoContainer.length; i++){
	infoContainer[i].className = "infoContainer clear smb-" + i;
	clickHandler(infoContainer[i], i);
}
	

//PROJECTS


//DETECT INTERNET EXPLORER
/* if (navigator.userAgent.indexOf('MSIE') != -1)
  var detectIEregexp = /MSIE (\d+\.\d+);/ //test for MSIE x.x
 else // if no "MSIE" string in userAgent
  var detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/ //test for rv:x.x or rv x.x where Trident string exists
  var isIE = detectIEregexp.test(navigator.userAgent);

if(!isIE){
var xhr = new XMLHttpRequest();
var projectCycle = [];

function previousButton(button, i){
	
	return button.addEventListener('click', function(e){

		if(i > 0){
			viewProject(i - 1);
		}
		else{
			viewProject(projectCycle.length - 1);
		}
	});
}

function nextButton(button, i){
	
	return button.addEventListener('click', function(e){

		if(i < projectCycle.length - 1){
			viewProject(i + 1);
		}
		else{
			viewProject(0);
		}
	});
}

function viewProject(index){
	document.querySelector('.projects').innerHTML = "";
	document.querySelector('.projects').appendChild(projectCycle[index]);
}


xhr.onreadystatechange = function(){
	if(xhr.readyState === 4 && xhr.status === 200){
		var projects = JSON.parse(xhr.responseText);
		for(var i = 0, len = projects.length; i < len; i++){
			var rowDiv = document.createElement('div');
			rowDiv.className = "row project";
			
			var arrowColumn1 = document.createElement('div');
			arrowColumn1.className = "half column";
			var arrowBack = document.createElement('div');
			arrowBack.className = "arrow";
			arrowBack.setAttribute('title', 'Previous Project');
			previousButton(arrowBack, i);
			arrowColumn1.appendChild(arrowBack);
			rowDiv.appendChild(arrowColumn1);
			
			var columnDiv1 = document.createElement('div');
			columnDiv1.className = "five columns";
			
			var pictureLink = document.createElement('a');
			pictureLink.setAttribute('href', projects[i].url);
			pictureLink.setAttribute('target', '_blank');
			
			var img = document.createElement('img');
			img.setAttribute('src', projects[i].img);
			img.setAttribute('alt', projects[i].alt);
			pictureLink.appendChild(img);
			columnDiv1.appendChild(pictureLink);
			
			var columnDiv2 = document.createElement('div');
			columnDiv2.className = "six columns";

			var heading = document.createElement('h4');
			heading.innerHTML = projects[i].title;
			columnDiv2.appendChild(heading);
			
			var info = document.createElement('p');
			info.innerHTML = projects[i].desc;
			columnDiv2.appendChild(info);
			
			var link = document.createElement('a');
			link.setAttribute('href', projects[i].url);
			link.setAttribute('target', '_blank');
			link.innerHTML = "<p>" + projects[i].link + "</p>";
			columnDiv2.appendChild(link);
			
			rowDiv.appendChild(columnDiv1);
			rowDiv.appendChild(columnDiv2);
			
			var arrowColumn2 = document.createElement('div');
			arrowColumn2.className = "half column";
			var arrowForward = document.createElement('div');
			arrowForward.className = "arrow next";
			arrowForward.setAttribute('title', 'Next Project');
			nextButton(arrowForward, i);
			arrowColumn2.appendChild(arrowForward);
			rowDiv.appendChild(arrowColumn2);
			
			projectCycle.push(rowDiv);
			//document.querySelector('.projects').appendChild(rowDiv);
		}

			viewProject(0);
		
	   }
	else if(xhr.status === 404){
		document.querySelector('.projects').innerHTML = "There was a problem retrieving the files! Please try again.";
	}
};
xhr.open("GET", "data/projects.json");
xhr.send();
}*/
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