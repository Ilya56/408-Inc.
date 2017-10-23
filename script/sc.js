var start = function()
{
	var n1=document.getElementById('in1').value;
	var n2=document.getElementById('in2').value;
	var sum = +n1 + +n2;
	alert(sum);
	//alert("n = "+n+"\nn! = "+fact(n));
	//document.getElementById('in').value="name";
};

var fact = function(a)
{
	if(a>1)
		return a*fact(a-1);
	else
		return 1;
};

var handleClick = function(Event)
{
	alert("Q");
};

/*document.getElementById('home').addEventListener('click', handleClick);*/

var lang;
function getLang() {
	localStorage.getItem('language') === null ? setLang('en') : false;

}

function setLang(lang1) {
	localStorage.setItem('language', lang)
	lang = lang1
}

function setLang() {
	if navigator.language == 'ru' {
		setLang('lang.ru.js')
	}
	alert(lang.home)
}

window.onload = s;
