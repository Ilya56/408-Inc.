var start = function()
{
	var n1=document.getElementById('in1').value;
	var n2=document.getElementById('in2').value;
	var sum = +n1 + +n2;
	alert(sum);
	//alert("n = "+n+"\nn! = "+fact(n));
	//document.getElementById('in').value="name";
}

var fact = function(a)
{
	if(a>1)
		return a*fact(a-1);
	else
		return 1;
}

var handleClick = function(Event)
{
	alert("Q");
}

document.getElementById('b2').addEventListener('click', handleClick);
