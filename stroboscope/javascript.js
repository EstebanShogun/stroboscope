active = false;
var stuveu;

function button() {
	active = !active;
	if (active){
		enableChangeBackground();
	}else{
		clearBackground();
	}
}

function enableChangeBackground() {	
	stuveu = setInterval(changeBackground, 300);
}

function changeBackground() {
	document.body.style.background = getRandomColor();
}

function clearBackground() {
	clearInterval(stuveu);
	document.body.style.background = 'white';
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}