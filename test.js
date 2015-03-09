$( document ).ready(function(){

	function tickHandler(){
		
		window.onclick = null;
		counter++;
		document.getElementById('counter').innerHTML = counter;
		document.getElementById('butt').childNodes[0].nodeValue = counter;
		
		if (counter >= 25) {
			//clearInterval(timer);
			//counter = 0;
			window.onclick = temp;
			obj.removeAttribute('disabled');
			obj.setAttribute('class', 'maroon');
		}
		//console.log(window.onclick);

	}
	function windowClickHandler(){
		clearInterval(timer);
		if (obj == null){
			obj = createObject();
			var rect = obj.getBoundingClientRect();
			obj.style.position = "absolute";
			obj.style.width = (rect.right - rect.left) + 'px'
			obj.style.height = (rect.bottom - rect.top) + 'px'
			obj.style.left = rect.left + "px";
			obj.style.top = rect.top + "px";
			obj.onclick = function()	{ 	counter = 0; 
											obj.setAttribute('class', 'butt');
										};
			dir[0] = 1; //setDirection();
			dir[1] = -1; //setDirection();
			moveTimer = setInterval(moveObject, 100);
		}
		obj.setAttribute("disabled", "");
		
		timer = setInterval(tickHandler, 100);
		
		temp = window.onclick;
	}

	function moveObject(step = 1){

		
		var x_move = step * dir[0];
		var y_move = step * dir[1];
		var posRect = obj.getBoundingClientRect();
		obj.style.width = (posRect.right - posRect.left) + step + "px";
		obj.style.height = (posRect.bottom - posRect.top) + step + "px";
		if(	posRect.left + x_move < 0 ||
			posRect.right + x_move > window.innerWidth){
			if(posRect.left <= 0 || posRect.right >= window.innerWidth){
				obj.style.left = "0px"
			}
			obj.style.width =  (posRect.right - posRect.left) / 2 + "px"
			dir[0] = -dir[0];
			x_move = step * dir[0];
		}
		if(	posRect.top + y_move < 0 ||
			posRect.bottom + y_move > window.innerHeight){
			if(	posRect.top <= 0 ||
				posRect.bottom > window.innerHeight){
				obj.style.top = "70px";
			}
			obj.style.height =  (posRect.bottom - posRect.top) / 2 + "px"
			dir[1] = -dir[1];
			y_move = step * dir[1];
		}
		
		//console.log(parseInt(obj.style.left) + x_move + "px");
		obj.style.left = parseInt(obj.style.left) + x_move + "px";
		obj.style.top = parseInt(obj.style.top) + y_move + "px";
	}
	function createObject(){
		var elem = document.getElementById('bouncer');
		var buttonElement = document.createElement("BUTTON");
		var buttonText = document.createTextNode("Bouncy");
		
		buttonElement.appendChild(buttonText);
		buttonElement.setAttribute("id", "butt");
		buttonElement.setAttribute("title", "bouncing button that grows, click to shrink!");
		buttonElement.setAttribute("disabled", "");
		//buttonElement.setAttribute("style", "font-size:16px");
		
		elem.appendChild(buttonElement);
		buttonElement.removeAttribute('style');
		buttonElement.setAttribute('class', 'butt');

		return buttonElement;
	}
	var counter = 0;
	var timer, temp, moveTimer
	var obj = null;

	var dir = [];

	$( "a" ).click(function( event ) {
 
        alert( "As you can see, the link no longer took you to jquery.com" );
 
        event.preventDefault();
 		//$( this ).hide( "slow" );
 		//window.open("file:///Volumes/Users/mehmetgerceker/workspace/jsWorkspace/js_scraps/untitled.html");
 		
 		$.get('http://pubapi.cryptsy.com/api.php?method=marketdatav2',
 			  function(data) { 	$('#place_holder').html(data);
 								console.log(data);
 							}, crossDomain = true);
		
 		//document.getElementById("place_holder").innerHTML = "abc";
 
    });

	 

	window.onclick = windowClickHandler;
	document.addEventListener('mousemove', function(e){ 
	    var mouse = {x: 0, y: 0};
	    mouse.x = e.clientX || e.pageX; 
	    mouse.y = e.clientY || e.pageY; 
	    document.getElementById("mouse_pos").innerHTML = "X: " + mouse.x + " Y: " + mouse.y;
	}, false);

});