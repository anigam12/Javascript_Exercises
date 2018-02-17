/*PALINDROME*/
function palindrome()
{
var a,no,b,temp=0;

no=parseInt(document.getElementById("pal_num").value);

b=no;
while(no>0)
{
a=no%10;
no=parseInt(no/10);
temp=temp*10+a;
}
if(temp==b)
{
	document.getElementById("palindrome_answer").innerHTML= document.getElementById("palindrome_answer").innerHTML +" "+"A Palindrome";

}
else
{
	document.getElementById("palindrome_answer").innerHTML= document.getElementById("palindrome_answer").innerHTML + " " +"Not a Palindrome";
}
}