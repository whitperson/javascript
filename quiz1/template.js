$(function(){

	$('#add').click(sum);

});

function sum()

{
	var box1 = $('#box1').val();
	box1 = parseInt(box1);
	var box2 = $('#box2').val();
	box2 = parseInt(box2);
	balance = (box1 + box2);
	$('#sum_output').text(balance);

}