
const depositBtn = document.getElementById('deposit-btn');


function bankCalculation1() {
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
}


depositBtn.addEventListener('click', ()=>{
    bankCalculation1();
})

document.addEventListener('keyup',(event)=>{
    const depositInput = document.getElementById('deposit-input');
    const depositStringValue = parseFloat(depositInput.value);
    if (depositStringValue) {   
        let keyValue = event.key;
        if (keyValue === "Enter") {
            bankCalculation1();
        }
    }
})

