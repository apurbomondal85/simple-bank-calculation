
const depositBtn = document.getElementById('deposit-btn');

depositBtn.addEventListener('click', ()=>{
    const totalDeposit = document.getElementById('total-deposit');
    const totalBalance = document.getElementById('total-balance');
    const depositInput = document.getElementById('deposit-input');
    const depositStringValue = parseFloat(depositInput.value);
    if (depositStringValue) {
        let depositValue = depositStringValue;
        // deposit add money
        let totalDepositValue = parseFloat(totalDeposit.innerText)
        totalDeposit.innerText = totalDepositValue + depositValue;
        // Balance add money
        let totalBalanceValue = parseFloat(totalBalance.innerText);
        totalBalance.innerText = totalBalanceValue + depositValue;
    }else{
        alert('Text is not allow. Please inter amount number');
    }
    
    depositInput.value = '';
    
})
