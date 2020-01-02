
window.addEventListener("load" , () => {
	const preload = document.querySelector(".preload");
	preload.classList.add("preload-finish");
});





const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')


let state = {}

function startGame(){
	state = {}
	showTextNode(1)
}

function showTextNode(textNodeIndex){
	const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)


		textElement.innerText = textNode.text

	while(optionButtonsElement.firstChild){
		optionButtonsElement.removeChild(optionButtonsElement.firstChild)
	}

	textNode.options.forEach(option => {
		if(showOption(option)){
		   	const button = document.createElement('button')
			button.innerText = option.text
		    button.classList.add('btn')
		    button.addEventListener('click' , () => selectOption(option))
			optionButtonsElement.appendChild(button)
		   }
	})
}
function showOption(option){
		return option.requiredState == null || option.requiredState(state)
	}

function selectOption(option){
	const nextTextNodeId = option.nextText
	if(nextTextNodeId <= 0){
		return window.location.href = "adventure.html";
	}
	state = Object.assign(state , option.setState)
	showTextNode(nextTextNodeId)
}


const textNodes = [
	{
		id: 1 ,
		text: 'Once upon a time on Mars, one U.F.O was Landed.' ,
		options: [
			{
				text: 'Next' ,
				setState: {blueGun: true} ,
				nextText: 2
			}
		]
	} ,
		{
		id: 2 ,
		text: 'Five tiny harmless looking aliens came out of it.' ,
		options: [
			{
				text: 'Next' ,
				setState: {blueGun: true} ,
				nextText: 3
			}
		]
	},

	{
		id: 3 ,
		text: 'The aliens went near a Biggest Mountain of Mars.' ,
		options: [
			{
				text: 'Next' ,
				setState: {blueGun: true} ,
				nextText: 4
			}
		]
	},
		{
		id: 4 ,
		text: 'And Suddenly they converted that Mountain into a Disco Dance Arena.' ,
		options: [
			{
				text: 'Next' ,
				setState: {blueGun: true} ,
				nextText: 5
			}
		]
	},
	{
		id: 5 ,
		text: 'And there they started playing Music.' ,
		options: [
			{
				text: 'Next' ,
				setState: {blueGun: true} ,
				nextText: -1
			}
		]
	}


]

startGame()
