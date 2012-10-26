$(function(){

	$('#input1').focus();
	$('#add').click(add_numbers);
	$('#add').hover(cg_background);
	$('#subtract').click(subtract_numbers);
	$('#subtract').hover(cg_background);
	$('#multiply').click(multiply_numbers);
	$('#multiply').hover(cg_background);
	$('#divide').click(divide_numbers);
	$('#divide').hover(cg_background);
	$('#clear').click(clear);

});

function add_numbers()
{	
	var input1 = $('#input1').val();
		num1 = parseInt(input1);
	var input2 = $('#input2').val();
		num2 = parseInt(input2);
		answer = (num1 + num2);
	$('#display').text('you added ' + input1 + ' and ' + input2 + ' and you got ' + answer + ' as a result ');
	
	var history = $('<div>'); //creates div for box
	history.text(input1 + ' + ' + input2 + ' = ' + answer);
	history.addClass('history');
	$('#history').prepend(history);

}

function subtract_numbers()
{
 	var input1 = $('#input1').val();
		input1 = parseInt(input1);
	var input2 = $('#input2').val();
		input2 = parseInt(input2);
		answer = (input1 - input2);
		$('#display').text('you subtracted ' + input1 + ' from ' + input2 + ' and you got ' + answer + ' as a result ');
		
	var history = $('<div>'); //creates div for box
	history.text(input1 + ' - ' + input2 + ' = ' + answer);
	history.addClass('history');
	$('#history').prepend(history);
}

function multiply_numbers()

{
  	var input1 = $('#input1').val();
		input1 = parseInt(input1);
	var input2 = $('#input2').val();
		input2 = parseInt(input2);
		answer = (input1 * input2);
		$('#display').text('you multiplied ' + input1 + ' and ' + input2 + ' and you got ' + answer + ' as a result ');
	
	var history = $('<div>'); //creates div for box
	history.text(input1 + ' X ' + input2 + ' = ' + answer);
	history.addClass('history');
	$('#history').prepend(history);
}

function divide_numbers()

{
  	var input1 = $('#input1').val();
		input1 = parseInt(input1);
	var input2 = $('#input2').val();
		input2 = parseInt(input2);
		answer = (input1/input2);
		$('#display').text('you divided ' + input1 + ' by ' + input2 + ' and you got ' + answer + ' as a result ');
	var history = $('<div>'); //creates div for box
	history.text(input1 + ' / ' + input2 + ' = ' + answer);
	history.addClass('history');
	$('#history').prepend(history);
}

function clear() 
{	
	$('#input1').val('');
	$('#input2').val('');
	$('#display').text('');
}

function cg_background() 
{
	$('#display').toggleClass(this.id);
}

/*
function cg_background()
{
	(this) 
	toggleClass('');
}

/*

var i = get_input;
answer = (input1 + input2);
$('#display').text(answer);

function get_value() 
{
	var input1 = $('#input1').val();
		input1 = parseInt(input1);
	var input2 = $('#input2').val();
		input2 = parseInt(input2); 
*/
