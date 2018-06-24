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
					GameArray[i] = "y";
					e.target.innerText = GameArray[i];
					flag = true;
				}

				if (
					GameArray[0] === "x" && GameArray[1] === "x" && GameArray[2] === "x" ||
					GameArray[3] === "x" && GameArray[4] === "x" && GameArray[5] === "x" ||
					GameArray[6] === "x" && GameArray[7] === "x" && GameArray[8] === "x") {
					alert("win X")
					clearGame();
				}
			
				if (
					GameArray[0] === "x" && GameArray[3] === "x" && GameArray[6] === "x" ||
					GameArray[1] === "x" && GameArray[4] === "x" && GameArray[7] === "x" ||
					GameArray[2] === "x" && GameArray[5] === "x" && GameArray[8] === "x") {
					alert("win X")
					clearGame();
				}

				if (
					GameArray[0] === "x" && GameArray[4] === "x" && GameArray[8] === "x" ||
					GameArray[2] === "x" && GameArray[4] === "x" && GameArray[6] === "x") {
					alert("win X")
					clearGame();
				} 

				// for Y
				if (
					GameArray[0] === "y" && GameArray[1] === "y" && GameArray[2] === "y" ||
					GameArray[3] === "y" && GameArray[4] === "y" && GameArray[5] === "y" ||
					GameArray[6] === "y" && GameArray[7] === "y" && GameArray[8] === "y") {
					alert("win Y")
					clearGame();
				}
			
				if (
					GameArray[0] === "y" && GameArray[3] === "y" && GameArray[6] === "y" ||
					GameArray[1] === "y" && GameArray[4] === "y" && GameArray[7] === "y" ||
					GameArray[2] === "y" && GameArray[5] === "y" && GameArray[8] === "y") {
					alert("win Y")
					clearGame();
				}

				if (
					GameArray[0] === "y" && GameArray[4] === "y" && GameArray[8] === "y" ||
					GameArray[2] === "y" && GameArray[4] === "y" && GameArray[6] === "y") {
					alert("win Y")
					clearGame();
				}

			} else {
				console.log("Not");
			}
		});
	});
}