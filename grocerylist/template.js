$(function(){

	$('#textbox').focus();
	$('#add').click(add_to_list);

});

function add_to_list() 
{
	var list_item_text = $('#textbox').val();
	var list_item = $('<div>');
	list_item.addClass('list_item');
	list_item.text(list_item_text);
	$('#listdisplay').append(list_item); 
}


