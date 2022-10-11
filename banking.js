// banking page
document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;
    console.log(depositValue);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositValue;
    depositInput.value = '';
})