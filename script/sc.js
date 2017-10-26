var lang = "en";

var langs = {
	"en" : {
		"home" : "Home",
		"about" : "About",
		"portfolio" : "Portfolio",
		"contact" : "Contact",
	},
	"ru" : {
		"home" : "Главная",
		"about" : "О нас",
		"portfolio" : "Портфолио",
		"contact" : "Контакты",
	}
}

function getLang() {
	localStorage.getItem('language') === null ? setLang('en') : false;
}

function setLang(lang1) {
	localStorage.setItem('language', lang)
	lang = lang1
}

function setDefaultLang() {
	if (navigator.language === 'ru') {
		setLang("ru")
	}
}

window.onload = setDefaultLang;

var home = document.getElementById("home");
alert(langs[lang])
home.innerHTML = langs[lang]["home"]
