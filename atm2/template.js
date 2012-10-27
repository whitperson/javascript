
	var balance_checking = 1000;
	var balance_savings = 1000;

$(function(){ 

		$('#deposit_checking').click(depositchecking);
		$('#withdraw_checking').click(withdrawchecking);
		$('#deposit_savings').click(depositsavings);
		$('#withdraw_savings').click(withdrawsavings);
  	
  	//jquery click events to call functions for each button

});

	function depositchecking ()
	{
		var amount = $('#amount_checking').val();
		amount = parseInt(amount);
		balance_checking = balance_checking + amount;
		$('#balance_checking').text(balance_checking);

	}

	function withdrawchecking ()
	{
		var amount = $('#amount_checking').val();
		amount= parseInt(amount);

		if(amount <= balance_checking)
		{
			balance_checking = balance_checking - amount;
		}//technically don't need brackets for one line  if statement

		else if(amount <= (balance_checking + balance_savings))
		{	
			
			balance_savings = (balance_checking + balance_savings) - amount;
			balance_checking = 0;
		}
			$('#balance_checking').text(balance_checking);
			$('#balance_savings').text(balance_savings);
	}

		function depositsavings ()
	{
		var amount = $('#amount_savings').val();
		amount = parseInt(amount);
		balance_savings = balance_savings + amount;
		$('#balance_savings').text(balance_savings);
	}

	function withdrawsavings ()
	{
		var amount = $('#amount_savings').val();
		amount = parseInt(amount);

		if(amount <= balance_savings) 
		{
			balance_savings = balance_savings - amount;
			$('#balance_savings').text(balance_savings);
		}
	
	}




