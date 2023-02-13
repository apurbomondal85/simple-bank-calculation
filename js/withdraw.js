

const withdrawBtn = document.getElementById('withdraw-btn');


function bankCalculation(){
    const totalWithdraw = document.getElementById('total-withdraw');
    const totalBalance = document.getElementById('total-balance');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawStringValue = parseFloat(withdrawInput.value);
    if (withdrawStringValue) {
        let withdrawValue = withdrawStringValue;
        let totalWithdrawValue = parseFloat(totalWithdraw.innerText)
        let totalBalanceValue = parseFloat(totalBalance.innerText);
        if (withdrawValue < totalBalanceValue) {
            // withdraw add money
            totalWithdraw.innerText = totalWithdrawValue + withdrawValue;
            // Balance sub money
            totalBalance.innerText = totalBalanceValue - withdrawValue;
        }else{
            alert(`You have not ${withdrawValue} balance available.`);
        }
    }else{
        alert('Text is not allow. Please inter amount number');
    }
    
    withdrawInput.value = '';
}

withdrawBtn.addEventListener('click', ()=>{
     bankCalculation();
})

document.addEventListener('keyup',(event)=>{
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawStringValue = parseFloat(withdrawInput.value);
    if (withdrawStringValue) {   
        let keyValue = event.key;
        console.log(keyValue);
        if (keyValue === "Enter") {
            bankCalculation();
        }
    }
})