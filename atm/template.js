$(function(){

	var balance = 1000; // declares variable blance of 1000
	var response = prompt('do you want to (d)eposit or (w)ithdrawal or (q)uit?');
while(response != 'q')

{
	var amount = prompt("how much?");
	amount = parseInt(amount);

	if(response == 'd') 

	{
		balance = balance + amount;
		console.log('you just deposited $ ' + amount + '.00 and your balance is $' + balance);
	}

	else
	{
		balance = balance - amount; 
		console.log('you just withdrew $ ' + amount + '.00 and your balance is $' + balance);
	}

	response = prompt('do you want to (d)eposit or (w)withdrawal or (q)uit?');
}

console.log('thank you for ATMing with us, your balanace is : $' + balance + '.00');

});