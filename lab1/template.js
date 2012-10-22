$(function(){

// this is a singe line comment

	/*
	* this is a multi-line comment (same as CSS)
	*/

var first = prompt('what is your first name?');
var last = prompt('what is your last name?');
var full = first + ' ' + last;

var age = prompt('what is your age?');
age = parseInt(age);
// parseInt tells it to treat age as integer

console.log('your full name is ' + full);
console.log('your real age is ' + (age + 10));

//if /else 

if(age < 18)
{
	console.log('you are a minor'); // true block
}
else {
	console.log('you are an adult'); // false block
}

if((first == 'marc') && ('last' != 'smith'))
	console.log('you are the winnner'); 

/* && must incldue all items while || would only need one of the total items*/


// LOOPS: 

for(var i = 0; i < 10; i++) // ++ is the increment operator

{
	console.log('you are on number : ' + i);
} // this is the loop
//will run until 10 and then it falls out of the loop

var response = prompt('enter a color or (q)uit?');

var colors = [];

while(response != 'q')
{
	colors.push(response);
	console.log('you just typed in :' + response);
	response = prompt('enter a color or (q)uit?');
}

console.log(colors); 

});







