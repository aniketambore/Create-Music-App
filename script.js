window.addEventListener('load' , ()=> {
	const sounds = document.querySelectorAll('.sound');
	const pads = document.querySelectorAll('.pads-container .pads-grid div');

	pads.forEach((pad , index) => {
		pad.addEventListener("click" , function(){
			sounds[index].currentTime = 0;
			sounds[index].play();			
			pad.classList.add('active')
			sounds[index].addEventListener('ended' , () => {
				pad.classList.remove('active')
			});
		});
	});
	
	
});