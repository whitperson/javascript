$(function(){

	$('#make_boxes').click(display_boxes);

});

function display_boxes() 
{
	var box_number = $('#input').val();
	box_number = parseInt(box_number);

	for(var i = 1; i <= box_number; i++)  
	{
		var box = $('<div>'); //creates div for box
		box.text(i); //just giving text as count number
		box.addClass('box');
		$('#boxes').prepend(box);
	}
}