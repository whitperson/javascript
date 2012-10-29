$(function(){

	$('#makecolors').click(makecolors);
	$('#colorboxes').on('hover' , '.box' , ch_bg);

});

function makecolors() 
{
	var createboxes = $('#colors_text').val();   //get the value of the colors
	createboxes = createboxes.split(', '); //turns string of colors into an array
	for(var i = 0; i < createboxes.length; i++) //loop based on array length
	
	{
		var box = $('<div>'); //creates div for box
		box.addClass('box');  //adds class to that new div
		box.text(createboxes[i]); //adds text of the index of the creatboxes of array as the text of box
		box.css('background-color', createboxes[i]); // changes css bg color  using the index of the array
		$('#colorboxes').append(box); 
	}
}

function ch_bg()
{
	var bg_color = $(this).css('background-color'); //hover for bg_color uses variable of bcolor, passes that var to other div
	$('#hoverbox').css('background-color', bg_color);
}

