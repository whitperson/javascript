$(function(){

//use of functions in code

	var z = prompt('enter a number');
	z = parseInt(z);
	var y = square(z);
	console.log('the square of ' + z  + ' is ' + y);
	

	
	var a = volume(3, 5, 7);
	var b = volume(2, 9, 8);
	var c = volume(1, 8, 2);

	console.log('the volume of a is: ' + a); 
	console.log('the volume of a is: ' + b); 
	console.log('the volume of a is: ' + c); 

});

//DEFINE  FUNCTIONS BELOW

function square(x)
{
 var s = x * x;
 return s;
} // only defines the function 


function volume(l, w, h)
{
	return l * w * h;
}