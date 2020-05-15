let cells = document.querySelectorAll('.row > div');
let player = "x";
let turnCounter = 0;
let isGameOver = false
let wins = [
	[ cells[0], cells[1], cells[2] ],
	[ cells[3], cells[4], cells[5] ],
	[ cells[6], cells[7], cells[8] ],
	[ cells[0], cells[3], cells[6] ],
	[ cells[1], cells[4], cells[7] ],
	[ cells[2], cells[5], cells[8] ],
	[ cells[0], cells[4], cells[8] ],
	[ cells[2], cells[4], cells[6] ]
];

for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', cellClicked);
}

function stopClick() {for (let i = 0; i < cells.length; i++) 
    cells[i].removeEventListener('click', cellClicked);

}

function cellClicked() {
	if (event.target.textContent == '') {
		event.target.textContent = player;
		turnCounter++;
		checkForWin();
		if (player == 'x') {
			player = 'o';
		} else {
			player = 'x';
		}
	} else if (event.target.textContent !== '') {
		alert('Sorry, That space is taken');
	}
}

function checkForWin() {
	for (i = 0; i < wins.length; i++) {
		let counter = 0;
		for (j = 0; j < wins[i].length; j++) {
			if (wins[i][j].innerHTML == player) {
				counter++;
			}
			if (counter == 3) {
                isGameOver = true
                alert(player + ' Wins!');
                stopClick();
            }
            
		}
    }
    if (turnCounter === 9 && !isGameOver) {
        alert ("It's Draw")
    }
    
} function gameReset () {
    if (!isGamOver) {
        turnCounter = 0
        player = "x"
        cells
    }
}