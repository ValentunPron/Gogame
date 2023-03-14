const burger = () => {
	if(document.querySelector('.header__burger')) {
		document.querySelector('.header__burger').addEventListener('click', e => {
			document.querySelector('.header__body').classList.toggle('active');
			document.body.classList.toggle('lock');
		});
	}
}

export default burger;