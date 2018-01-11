var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function(b) {
	var element = document.createElement('li');
	var listLi = list.getElementsByTagName('li');
	var listLength = listLi.length;
	element.innerHTML = 'item' + listLength;
	list.appendChild(element);
});
