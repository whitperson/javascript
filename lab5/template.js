
var display = 0;

$(function (){

	$('#plus10').click(plusTen);
	$('#plus20').click(plusTwenty);
	$('#plus30').click(plusThirty);
	$('#neg10').click(negTen);
	$('#neg20').click(negTwenty);
	$('#neg30').click(negThirty);
	$('#blue').click(turnBlue);
	$('#red').click(turnRed);
	$('#display').click(reset);

});

function plusTen ()

	{
		display = display + 10;
		$('#display').text(display);
	}

function plusTwenty ()

	{
		display = display + 20;
		$('#display').text(display);
	}

function plusThirty ()

	{
		display = display + 30;
		$('#display').text(display);
	}

function negTen ()

	{
		display = display - 10;
		$('#display').text(display);
	}

function negTwenty ()

	{
		display = display - 20;
		$('#display').text(display);
	}

function negThirty ()

	{
		display = display - 30;
		$('#display').text(display);
	}

function turnBlue ()

{
	$('#display').css('background', 'blue');

}

function turnRed ()
{
	$('#display').css('background', 'red');
}

function reset ()
{
	$('#display').css('background' , 'white');
	display = 0;
	$('#display').text(display);

}