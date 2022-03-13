var gameLayer;
window.onload = pageLoad;

function pageLoad()
{
	document.getElementById("start").onclick = startGame;
	gameLayer = document.getElementById("game-layer");
}

function startGame()
{
	var allbox = document.querySelectorAll("#squares-layer div");

	if(allbox.length != 0)
    {
		clearScreen();
	}

	alert("GO!!");
	addBox();
	timeStart();
}

var timer = null;

function timeStart()
{
	var TIMER_TICK = 1000;	
	var min = 0.5;
	var second = min*60;
	var x = document.getElementById('clock');

	if(timer != null)
	clearInterval(timer);
	x.innerHTML = second;
	timer = setInterval(timeCount,TIMER_TICK)
	

	function timeCount()
    {
		var allbox = document.querySelectorAll("#squares-layer div");
		second -= 1;
		x.innerHTML = second;

		if(second <= 0)
		{
			clearInterval(timer);
			clearScreen();
			alert("Game Over")
		}

		if(second >= 0 && allbox.length === 0)
		{
			clearInterval(timer);
			alert("WIN!!!")
		}	
	}
}

function addBox()
{
	var numbox = document.getElementById("numbox").value;
	document.getElementById("numbox").value = null;
	gameLayer.id = "squares-layer"

	var colorDrop = document.getElementById("color").value;

	for (var i =0; i<numbox; i++)
    {
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;

		gameLayer.appendChild(tempbox)
		bindBox(tempbox);
	}
}

function bindBox(box)
{
	box.onclick = function(){ box.parentNode.removeChild(box); }
}

function clearScreen()
{
	var allbox = document.querySelectorAll("#squares-layer div");

	for (var i=0;i<allbox.length;i++)
    {
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}