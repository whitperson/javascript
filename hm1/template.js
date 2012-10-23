$(function(){
	//started w/ shell of a prgram with variabls, two if statements, and console log for three arrays
	//use while loop for when you don't know how any times you need to loop
	//use a for loop for when you KNOW the number you need

	var animals = [];
	var people = [];
	var colors = []; //always make array variable names plural

	var response = prompt('(a)nimal, (p)oeple, or (c)olors or (q)uit?');
	while(response != 'q') 
	{
		var count = prompt('how many would you like to add?');
		count = parseInt(count);

		if(response == 'a') 
		{
			for(var i = 0; i < count; i++)
			{
				var selection =  prompt('enter an animial?');
				animals.push(selection);
			}

		}

		else if(response == 'p')
		{

			for(var i = 0; i < count; i++)
			{
				var selection =  prompt('enter a person?');
				people.push(selection);
			}
		}

		else if(response == 'c')
		{
			for(var i = 0; i < count; i++)
			{
				var selection =  prompt('enter a color?');
				colors.push(selection);
			}
		}

		response = prompt('(a)nimal, (p)oeple, or (c)olors or (q)uit?');
		
	}
		
		response = prompt('do you want to remove a (c)olor, (p)erson, (a)nimal or (q)uit?');
		while(response != 'q')
		{
			if(response == 'c')
			{
				console.log('colors: ' + colors);
				var del = prompt('which one do you want to delete?');
				var index = colors.indexOf(del);
				colors.splice(index, 1);
			}

			else if(response == 'p')
			{
				console.log('people: ' + people);
				var del = prompt('which one do you want to delete?');
				var index = people.indexOf(del);
				people.splice(index, 1);
			}

			else if(response == 'p')
			{
				console.log('animals: ' + animals);
				var del = prompt('which one do you want to delete?');
				var index = animals.indexOf(del);
				animals.splice(index, 1);
		}

		response = prompt('do you want to remove a (a)nimal, (p)oeple, or (c)olors or (q)uit?');
	}

console.log('here are your colors: ' + colors);
console.log('here are your animals: ' + animals);
console.log('here are your people: ' + people);

});