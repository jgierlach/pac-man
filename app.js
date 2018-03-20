	// 1 = <div class='wall'></div>
	// 2 = <div class='coin'></div>
	// 3 = <div class='ground'></div>
	// 4 = <div class='ghost'></div>
	// 5 = <div class='pacman'></div>
	
	var map = [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
		[1, 2, 1, 2, 1, 5, 1, 2, 1, 2, 1, 2, 1],
		[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
		[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
		[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
		[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
		[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],				
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	]

	var pacman = {
		x: 5,
		y: 2
	}

	var el = document.getElementById('world');
	
	//This function iterates through my array of arrays and draws the world by associating
	//The number values with certain css classes
	function drawWorld(){
		el.innerHTML = '';
		for(var y = 0; y < map.length ; y += 1) {
			for(var x = 0; x < map[y].length ; x += 1) {		
				if (map[y][x] === 1) {
					el.innerHTML += "<div class='wall'></div>";
				}
				else if (map[y][x] === 2) {
					el.innerHTML += "<div class='coin'></div>";
				}
				else if (map[y][x] === 3) {
					el.innerHTML += "<div class='ground'></div>";
				}
				else if (map[y][x] === 4) {
					el.innerHTML += "<div class='ghost'></div>";
				}
				else if (map[y][x] === 5) {
					el.innerHTML += "<div class='pacman'></div>";
				}
			}
			el.innerHTML += "<br>";
		}
	}

	drawWorld();


	document.onkeydown = function(e) {
	 	console.log(e.keyCode);
		 if(e.keyCode === 37) {
			if(map[pacman.y][pacman.x - 1] !== 1) {
		//pacman moves left by subtracting 1 from x axis
			map[pacman.y][pacman.x] = 3;
			pacman.x = pacman.x - 1;
			map[pacman.y][pacman.x] = 5;	
			drawWorld();
			}

		 } else if(e.keyCode === 38) {
		if(map[pacman.y - 1][pacman.x] !== 1) {
		//pacman moves up
		map[pacman.y][pacman.x] = 3;
			pacman.y = pacman.y - 1;
			map[pacman.y][pacman.x] = 5;	
			drawWorld();	
		 } 
		 }
		 else if(e.keyCode === 39) {
			if(map[pacman.y][pacman.x + 1] !== 1) {
		//pacman moves right by adding 1 to the x axis
		map[pacman.y][pacman.x] = 3;
			pacman.x = pacman.x + 1;
			map[pacman.y][pacman.x] = 5;	
			drawWorld();
			}	
	 
		 }
		 else if(e.keyCode === 40) {
			if(map[pacman.y + 1][pacman.x] !== 1) {
		//pacman moves down
			map[pacman.y][pacman.x] = 3;
			pacman.y = pacman.y + 1;
			map[pacman.y][pacman.x] = 5;	
			drawWorld();	 
			}
		 }
	}
	
	drawWorld();