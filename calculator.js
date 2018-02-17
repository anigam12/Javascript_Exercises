/*CALCULATOR*/
function calculator()
{	
	
	o1 = parseInt( document.getElementById("operand1").value);
	o2 = parseInt( document.getElementById("operand2").value);
	var c;
	if (choose_operator.value=='add') {
		c=o1+o2;
		document.getElementById("calculator_answer").innerHTML = document.getElementById("calculator_answer").innerHTML+"  "+c;
	}
	else if (choose_operator.value=='sub') {
		c=o1-o2;
		document.getElementById("calculator_answer").innerHTML = document.getElementById("calculator_answer").innerHTML+"  "+c;
	}
	else if (choose_operator.value=='multiply') {
		c=o1*o2;
		document.getElementById("calculator_answer").innerHTML = document.getElementById("calculator_answer").innerHTML+"  "+c;
	}
	else if (choose_operator.value=='divide') {
		c=o1/o2;
		document.getElementById("calculator_answer").innerHTML = document.getElementById("calculator_answer").innerHTML+"  "+c;
	}
	
}