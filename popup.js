function main(){
	var info =  '{"quoteee":[' +
			'{"id":1,"sen":" Life is about making an impact, not making an income.","author":" -Kevin Kruse"}]}';
	obj = JSON.parse(info);
	generate();
}
function generate(){
	var x = Math.floor((Math.random() * 3));
	console.log(x);
	document.getElementById("quote").innerHTML = "<blockquote>"+obj.quoteee[x].sen+"<br>"+obj.quoteee[x].author+"</blockquote>" ;
}

document.addEventListener('DOMContentLoaded', function () {	
	var lol = document.getElementById('lol');
	lol.addEventListener('click', clickHandler, false);
	main();
});

function clickHandler (e) {
	console.log('Clicked on');
	console.log(e.target);
}