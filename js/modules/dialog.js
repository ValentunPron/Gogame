const dialog = () => {
	document.querySelectorAll('.button').forEach((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			document.body.classList.add('lock')

			document.querySelector('.wrapperDialog').innerHTML = `
				<div class="dialog">
					<span>This is a demo layout so many features and buttons are not working</span>
					<button class="dialog__button button">OK</button>
				</div>
			`
			document.querySelector('.dialog__button').addEventListener('click', () => {
				document.querySelector('.wrapperDialog').classList.remove('active');
				document.body.classList.remove('lock');
			})
			document.querySelector('.wrapperDialog').classList.add('active');
		})
	})

	document.querySelector('#ruls').addEventListener('click', (e) => {
		e.preventDefault();
		document.body.classList.add('lock');

		document.querySelector('.wrapperDialog').innerHTML = `
		<div class="dialog ruls">
			<ol class="dialog__list">
				<li class="dialog__item">To start playing, the user must select the type of game (if there are multiple available) as well as game settings, which may include difficulty level, number of players, etc.</li>
				<li class="dialog__item">Players can make moves or control the device if it is within their capabilities. If the wrong buttons are pressed or actions are taken that are not permitted, the player may receive an error message and skip their turn.</li>
				<li class="dialog__item">If a mistake is made during the game, players may undo their previous move or use other special features that allow the game to be restored to its previous state.</li>
				<li class="dialog__item">Players may save their games and other settings for future use and restoration.</li>
				<li class="dialog__item">The website may provide users with the ability to contact support in case of problems or malfunctions with the devices or games.</li>
				<li class="dialog__item">Rules for using devices and games should be clear and accessible to all users. The website may provide instructions and reference materials to help users understand the devices and the game.</li>
			</ol>
			<button class="dialog__button button">OK</button>
		</div>
		`

		document.querySelector('.dialog__button').addEventListener('click', () => {
			document.querySelector('.wrapperDialog').classList.remove('active');
			document.body.classList.remove('lock');
		})
		document.querySelector('.wrapperDialog').classList.add('active');
	})
}

export default dialog;