/*FIBONACCI SERIES*/
function fibonacci()
{
	console.log('fibo');	
	
	n = parseInt( document.getElementById("fibo_limit").value);
	console.log(n);
	var a=0;
	var b=1;
	var c;
	document.getElementById("fibonacci_answer").innerHTML = document.getElementById("fibonacci_answer").innerHTML+"  "+a+" "+b;
	console.log(n.value);
	for(var i=2;i<n;i++)
	{
		
		c=a+b;
		console.log(a);
		document.getElementById("fibonacci_answer").innerHTML = document.getElementById("fibonacci_answer").innerHTML + " " + c;
		a=b;
		b=c;		
	}
}