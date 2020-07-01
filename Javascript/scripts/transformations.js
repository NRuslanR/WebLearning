function main()
{
	var depositAmount = parseInt(prompt("Deposit amount: "));

	if (isNaN(depositAmount) || depositAmount <= 0) {
			
		alert("Deposit amount isn't valid number");
		return;
	}
	
	var rate = parseFloat(prompt("Rate value: "));
	
	if (isNaN(rate) || rate <= 0) {
		
		alert("Deposit rate isn't valid number");
		return;
	}
	
	var depositDays = parseInt(prompt("Deposit days: "));

	if (isNaN(depositDays) || depositDays <= 0) {
		
		alert("Deposit days isn't valid number");
		return;
	}
	
	var depositAmountAfter = depositAmount + depositAmount * (rate * 0.01) * depositDays / 365;

	alert("Deposit amout after " + depositDays + " days will be " + depositAmountAfter);
	
}

main();