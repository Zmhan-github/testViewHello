window.onload = () => {

	const buttons = document.getElementsByClassName('item');

	const GameArray = [];

	let flag = true;

	function clearGame(){
		flag = true;
		for(let i = 0; i < buttons.length; i++){
			buttons[i].innerText = "";
			GameArray[i] = i;
		}	
	}

	function isWin(figura){
		for (let i = 0; i < 7; i += 3) {
			if ((GameArray[i] === figura && GameArray[i + 1] === figura && GameArray[i + 2] === figura) ||
				(GameArray[i / i] === figura && GameArray[i / i + 3] === figura && GameArray[i / i + 6] === figura)){
				clearGame();
				return true;
			}
		}

		if ((GameArray[0] === figura && GameArray[4] === figura && GameArray[8] === figura) ||
			(GameArray[2] === figura && GameArray[4] === figura && GameArray[6] === figura)) {
			clearGame();
			return true;
		}
	}


	Array.from(buttons).forEach((button, i) => {

		GameArray.push(i);

		button.addEventListener('click', (e) =>{
			e.preventDefault();


			if (!e.target.innerText){

				if(flag){
					GameArray[i] = "x";
					e.target.innerText = GameArray[i];
					flag = false;
				} else {
					GameArray[i] = "o";
					e.target.innerText = GameArray[i];
					flag = true;
				}


				if (isWin("x")){
					alert("Win X");
				}

				if (isWin("o")){
					alert("Win O");
				}

			} else {
				alert("Фигура поставлена, выберите свободное поле.")
			}
		});
	});
}