const dialog = () => {
	document.querySelectorAll('.button').forEach((item) => {
		console.log(item)
		item.addEventListener('click', (e) => {
			e.preventDefault();
	
			document.querySelector('.wrapperDialog').classList.toggle('active');
		})
	})
}

export default dialog;