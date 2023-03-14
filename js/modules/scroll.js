const scroll = () => {
	const smoothLinks = document.querySelectorAll('.header__link');
	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', function (e) {
			e.preventDefault();
			document.body.classList.add('lock')
			const id = smoothLink.getAttribute('href');

			if(document.querySelector('.header__burger')) {
				document.querySelector('.header__body').classList.toggle('active');
				document.body.classList.toggle('lock');
			}
			document.querySelector(id).scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			});
		});
	};
}

export default scroll;