var btn = document.getElementById('enter')
var input = document.getElementById('userInput');
var ul = document.querySelector('ul')

// By click button only no need of text box text
/*
btn.addEventListener('click', function(){

	var li = document.createElement('li')
	li.appendChild(document.createTextNode('New Text for li'))
	ul.appendChild(li);
})
*/

function inputLength() {
	// body...
	return input.value.length
}

function addLi() {

	if(inputLength() > 0 )
{
	console.log(input.value);
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

	
}


//By click button + from text from textbox

btn.addEventListener('click', function(){
 addLi()


})

input.addEventListener('keypress',function(event){
 if(event.keyCode === 13)
 addLi()


})