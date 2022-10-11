// banking page
document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositValue = parseFloat(newDepositText);
    // console.log(depositValue);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositValue = depositTotal.innerText;

    const newDepositTotal = parseFloat(previousDepositValue) + newDepositValue;
    depositTotal.innerText = newDepositTotal;


    // update account balance 

    depositInput.value = '';
});


// handle withdraw 
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const newWidthdrawText = withdrawInput.value;
    const newWidthdrawValue = parseFloat(newWidthdrawText);


    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawValue = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawValue + newWidthdrawValue;
    withdrawTotal.innerText = newWithdrawTotal;
    withdrawInput.value = '';



})