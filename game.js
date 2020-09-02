var player;
//===============================================
var bow;
var spacePressed = false;
//===============================================
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
//====================================================
var playerTopLeft
var playerTopRight
var playerBottomLeft
var playerBottomRight
//===============================================
var fireX;
var fireY;
//==================================================
var up1 = [];
var down1 =[];
var right1 = [];
var left1 = [];
var playerPosition = [];
var top1 = [];
var side1 = [];
var playersXaxis;
var playersYaxis;
var j;
var down2;
var val;
console.log('same variable in global variable')
//console.log(up1[0])
//console.log(j);
//console.log(right1[0])
//console.log(side1[0]);
//console.log(left1[0]);
//console.log(top1[0]);
//console.log(down1[0]);
console.log(down2);

//===================================================

function setPlayerDirection(dir) {
	//Display the walk animation for the correct direction, remove the other directions
	//to ensure the player does not have both "left" and "right" applied at the same time
	player.classList.remove('up');
	player.classList.remove('left');
	player.classList.remove('right');
	player.classList.remove('down');

	player.classList.add(dir);
}//this function switches between removing and adding the keyUp or Keydown event on the move function

function keyUp(event) {
	if (event.keyCode == 37) {
		leftPressed = false;
	}

	if (event.keyCode == 39) {
		rightPressed = false;
	}

	if (event.keyCode == 38) {
		upPressed = false;
	}

	if (event.keyCode == 40) {
		downPressed = false;
	}

}


/*
var playersXaxis = playerPosition[0].offsetLeft;
console.log(down1[0])
var playersYaxis = playerPosition[0].offsetTop;

fireX = bow.offsetLeft; //== playersXaxis;
fireY = bow.offsetTop;
*/

//===My shooting Code======

function spaceCheck() {
	fireX = bow.offsetLeft; //this works
	console.log(bow)
	//console.log(fireX);
	fireY = bow.offsetTop;	//this works
	playersXaxis = side1[0];
	//console.log(playersXaxis);
	//console.log(side1[0])
	playersYaxis = top1[0];
		if(right1[0] < side1[0]){
			shootR();
		}
		if(left1[0] > side1[0]){
			shootL();
		}
		if(up1[0] > top1[0]){
			shootU();
		}
		if(down1[0] < top1[0]){
			shootD();
		}
}



function shootR(){

	var speed = setInterval(frame, 5);
	function frame() {
		if (fireX == 700){
			clearInterval(speed);
			bow.style.display = 'none';
		}else {
			fireX = fireX + 5;
			bow.style.left = fireX + 'px';
		}
		if (fireX >680){
			bow.style.left = playersXaxis + 'px';
			bow.style.top = playersYaxis + 'px';
			bow.style.display = 'block'
		}

	}
	/*
	var weapon = document.getElementById('shoot');
	if (weapon.style.display === 'none') {
		weapon.style.display = 'block';
	}else {
		weapon.style.display = 'none';
	}
	*/
}

function shootD(){

	var speed = setInterval(frame, 5);
	function frame() {
		if (fireY == 700){
			clearInterval(speed);
			bow.style.display = 'none';
		}else {
			fireY = fireY + 5;
			bow.style.left = fireY + 'px';
		}
		if (fireY > 680){
			bow.style.left = playersXaxis + 'px';
			bow.style.top = playersYaxis + 'px';
			bow.style.display = 'block'
		}

	}

}

function shootU(){

	var speed = setInterval(frame, 5);
	function frame() {
		if (fireY == -50){
			clearInterval(speed);
			bow.style.display = 'none';
		}else {
			fireY = fireY - 5;
			bow.style.left = fireY + 'px';
		}
		if (fireY < -40){
			bow.style.left = playersXaxis + 'px';
			bow.style.top = playersYaxis + 'px';
			bow.style.display = 'block'
		}

	}

}

function shootL(){

	var speed = setInterval(frame, 5);
	function frame() {
		if (fireX == -50){
			clearInterval(speed);
			bow.style.display = 'none';
		}else {
			fireX = fireX - 5;
			bow.style.left = fireY + 'px';
		}
		if (fireX < -40){
			bow.style.left = playersXaxis + 'px';
			bow.style.top = playersYaxis + 'px';
			bow.style.display = 'block'
		}

	}

}


//=========================


function move() {
	var left= player.offsetLeft;
	var top = player.offsetTop;
	val;
console.log('same variable in funx move() local variable');
//console.log(up1[0])
//console.log(j);
//console.log(right1[0])
//console.log(side1[0]);
//console.log(left1[0]);
//console.log(top1[0]);
//console.log(down1[0])
console.log(down2);

function push(){
	window.down2 = val
}
push();
	if (downPressed) {
		setPlayerDirection('down');
		val = top;
		window.down2 = val;//change made
		down1.splice(0, 1, val);
		top = top + 1;
		top1.splice(0, 1, top);

		//fireY == Yaxis;
		firePosition();
		//console.log(playersYaxis);
		//console.log('Here is your bow Y-axis: ' + fireY);
		//console.log(down1[0])
		//console.log(top);
		//console.log(top1[0]);

	}

	if (upPressed) {
		setPlayerDirection('up');
		val = top;
		up1.splice(0, 1, val);
		//window.up1 = up1;
		console.log(up1);
		top = top - 1;
		top1.splice(0, 1, top);
		//window.top1 = top1;
		console.log(top1);
		firePosition();
	}

	if (leftPressed) {
		setPlayerDirection('left');
		val = left;
		window.j = val;
		console.log(j);
		left1.splice(0, 1, val);
		left = left - 1;
		side1.splice(0, 1, left);
		firePosition();
		//console.log(left1[0]);
		//console.log(side1[0]);
		//console.log(left);

		//console.log('Here is the left value = '+ left)
	}

	if (rightPressed) {
		setPlayerDirection('right');
		val = left;
		right1.splice(0, 1, val);
		left = left + 1;
		side1.splice(0, 1, left);
		firePosition();
	}


//=========Need Understanding of this code Righ here======================================

	//Get the element at the coordinates for where the play will move to
	//All 4 corners of the player are required to check there is no collision on any side
	playerTopLeft = document.elementFromPoint(left, top);
	//console.log(playerTopLeft.offsetLeft);
	playerPosition.splice(0, 1, playerTopLeft);
	playerTopRight = document.elementFromPoint(left+32, top);
	playerBottomLeft = document.elementFromPoint(left, top+48);
	playerBottomRight = document.elementFromPoint(left+32, top+48);


	//this function manages the animation of the arrow
	function firePosition() {
		if (leftPressed) {
			document.getElementById("bow").style.WebkitTransform = "rotate(180deg)"

		}
		if (upPressed){
			document.getElementById("bow").style.WebkitTransform = "rotate(-90deg)"
		}
		if (downPressed){
			document.getElementById("bow").style.WebkitTransform = "rotate(90deg)"
		}
		if (rightPressed) {
			document.getElementById("bow").style.WebkitTransform = "rotate(0deg)"
		}

	}

//======================================================================================


	//If the element that the player is about to walk over contains the class "blocking" then
	// the player is not moved.
	// The player will only be moved to coordinates `top` and `left` if the element in that position is not blocking

	if (!playerTopLeft.classList.contains('blocking') && !playerTopRight.classList.contains('blocking')
		&& !playerBottomLeft.classList.contains('blocking') && !playerBottomRight.classList.contains('blocking')) {
		player.style.left = left + 'px';
		player.style.top = top + 'px';

	}

	//If any of the keys are being pressed, display the walk animation
	if (leftPressed || rightPressed || upPressed || downPressed) {
		player.classList.add('walk');
		player.classList.remove('stand');
	}
	//Otherwise, no keys are being pressed, display stand
	else {
		player.classList.add('stand');
		player.classList.remove('walk');
	}

}


function keyDown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}

	if (event.keyCode == 39) {
		rightPressed = true;
	}

	if (event.keyCode == 38) {
		upPressed = true;
	}

	if (event.keyCode == 40) {
		downPressed = true;
	}

}
/*
//this condition handles the blocking collision
function block(){
    if (!playerTopLeft.classList.contains('blocking') && !playerTopRight.classList.contains('blocking')
            && !playerBottomLeft.classList.contains('blocking') && !playerBottomRight.classList.contains('blocking')) {
            player.style.left = left + 'px';
            player.style.top = top + 'px';

        }
}
*/

//===========this function pulls and pushes from and to the html====================================
function gameStart() {
	player = document.getElementById('player');
	setInterval(move, 10);//how does it work?
	document.addEventListener('keydown', keyDown);
	document.addEventListener('keyup', keyUp);


}
document.addEventListener('DOMContentLoaded', gameStart);
//=====================================================================================================



//============code for both buttons =================================================================================


				//=====================Restart button================
document.getElementById("restart").addEventListener("click", gameRestart);

function gameRestart(){
	window.location.reload()
}
				//====================================================

				//=====================Congratulation button + toggle of the congrats message ================
function congratulations() {
	var congratsMessage = document.getElementById("flik");
	if (congratsMessage.style.display === "none") {
		congratsMessage.style.display = "block";
	  } else {
		congratsMessage.style.display = "none";
	  }
}
				//====================================================
//======================================================================================================================
document.getElementById('player').addEventListener("click", shoot);


bow = document.getElementById('bow');
console.log(top1[0])
