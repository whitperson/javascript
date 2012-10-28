var selected_color = null;

$(function(){

	$('#createboxes').click(add_node); // add node for boxes
	$('#newboxes').on('hover', '.box', bgChange);
	$('#newboxes').on('dblclick', '.box', remove); 
	$('#newboxes').on('click', '.box', select_color);
	$('#moveleft').click(moveleft);
	$('#moveright').click(moveright);
	/*
	ON function; do it on parent that is static on the page; 
	when in doubt, USE BODY; (1st item = mouse event, normal selector, function) */

});

function add_node()
{
	var createboxes = $('#inputcolors').val();   //get the value of the colors
	createboxes = createboxes.split(', '); //turns string of colors into an array
	for(var i = 0; i < createboxes.length; i++) //loop based on array length
	
	{
		var box = $('<div>'); //creates div for box
		box.addClass('box');  //adds class to that new div
		box.css('background-color', createboxes[i]); // changes bg color  using the index of the array
		$('#newboxes').append(box); 
	}
}


function bgChange()
{
	var bcolor = $(this).css('background-color'); //hover for bg color uses variable of bcolor, passes that variable to other div
	$('#inputcolors').css('background-color', bcolor);
}
  
function remove()
{
	$(this).remove();
}

function select_color() 
{
	if(selected_color != this) //selected color initially equal to null
	{
		$(selected_color).removeClass('selected'); //set up in case you've selected another box already
		selected_color = this; //the remembering part -- takes this div and puts it into "selected" and make it no longer null
		$(selected_color).addClass('selected'); //takes that selected div and puts it into .select class
	}

	else {
		$(selected_color).removeClass('selected'); //selected color is now equal to the div and removes class. then makes it null
		selected_color = null;
	}
}

function moveleft()
{
	if(selected_color != null) //makes sure a color is selected ; it is not null
	{
		var previous = $(selected_color).prev(); //creates variable for previous to highlight the div in front of selected
		previous.before(selected_color); // then takes previous and puts selcted before it

	} 
}

function moveright()
{
	if(selected_color != null) //makes sure a color is selected; it is not null
	{
		var next = $(selected_color).next();
		next.after(selected_color);

	} 
}