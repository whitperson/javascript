

$(function (){

	$('#textbox').focus();
	$('#clear').click(clear);
	$('#normal').dblclick(normalText); //sublime doesn't recognize dblclick
	$('#big').hover(bigType);
	$('#small').hover(smallType);
	$('#reverse').hover(reverseWord);
	$('#black').click(turnBlack);
	$('#yellow').click(turnYellow);

});

function clear ()

{
	$('#textbox').val("");
}

function normalText ()
{
	var writtentext = $('#textbox').val();
	$('.outputbox').text(writtentext);
	$('#textbox').val("");
}

function bigType () 
{
	$('.outputbox').toggleClass('big');
}

function smallType () 
{
	$('.outputbox').toggleClass('small');
}

function reverseWord () 
{
	var t = $('.outputbox').text();
	var trev = t.split('').reverse().join('');
 	$('.outputbox').text(trev);

}


function turnBlack ()
{
	$('.outputbox').toggleClass('black');
}

function turnYellow ()
{
	$('.outputbox').toggleClass('yellow');
}