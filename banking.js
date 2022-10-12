function getInputValue(inputValue) {
    const depositInput = document.getElementById(inputValue);
    const newDepositText = depositInput.value;
    const newDepositValue = parseFloat(newDepositText);
    depositInput.value = '';

    return newDepositValue;

}






// banking page
// handle deposit
document.getElementById('deposit-button').addEventListener('click', function () {

    // const depositInput = document.getElementById('deposit-input');
    // const newDepositText = depositInput.value;
    // const newDepositValue = parseFloat(newDepositText);
    const newDepositValue = getInputValue('deposit-input');

    //    deposit field

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositValue = depositTotal.innerText;
    // total deposit
    const newDepositTotal = parseFloat(previousDepositValue) + newDepositValue;
    depositTotal.innerText = newDepositTotal;


    // update account balance with deposit
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceValue = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceValue + newDepositValue;

    balanceTotal.innerText = newBalanceTotal;

    // depositInput.value = '';
});


// handle withdraw 
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const newWidthdrawText = withdrawInput.value;
    const newWidthdrawValue = parseFloat(newWidthdrawText);


    // withdraw field

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawValue = parseFloat(previousWithdrawText);

    // total widthdraw
    const newWithdrawTotal = previousWithdrawValue + newWidthdrawValue;
    withdrawTotal.innerText = newWithdrawTotal;


    // balance update

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceValue = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceValue - newWidthdrawValue;

    balanceTotal.innerText = newBalanceTotal;


    withdrawInput.value = '';



});



