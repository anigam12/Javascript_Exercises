/*FACTORIAL*/
function factorial(){

var i, no, fact;
fact=1;
no=parseInt(document.getElementById("num").value);
for(i=1; i<=no; i++)  
{
fact= fact*i;
}  
document.getElementById("factorial_answer").innerHTML= document.getElementById("factorial_answer").innerHTML + " " + fact;
}