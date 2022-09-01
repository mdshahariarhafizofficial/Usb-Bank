//  login Section

const loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener('click', function(){
    const mainSection = document.getElementById('main-section')
    mainSection.style.display = 'none'

    const balanceSection = document.getElementById('balance-section')
    balanceSection.style.display = 'block'
})

// Deposit Section

const depositBtn = document.getElementById('deposit-btn')
depositBtn.addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input').value
    const depositInputNumber = parseFloat(depositInput)

    const depositAmount = document.getElementById('deposit-amount').innerText
    const depositAmountNumber = parseFloat(depositAmount)

    const totalAmount = depositInputNumber+depositAmountNumber
    document.getElementById('deposit-amount').innerText = totalAmount
    document.getElementById('deposit-input').value = ""

    const currentBalance = document.getElementById('current-balance').innerText
    const currentBalanceNumber = parseFloat(currentBalance)

    const totalBalance = depositInputNumber+currentBalanceNumber
    document.getElementById('current-balance').innerText = totalBalance
})

// Withdraw Section

const withdrawBtn = document.getElementById('withdraw-btn')
withdrawBtn.addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input').value
    const withdrawInputNumber = parseFloat(withdrawInput)

    const withdrawAmount = document.getElementById('withdraw-amount').innerText
    const withdrawAmountNumber = parseFloat(withdrawAmount)

    const totalWithdraw = withdrawInputNumber+withdrawAmountNumber
    document.getElementById('withdraw-amount').innerText = totalWithdraw
    document.getElementById('withdraw-input').value = ""


    const currentBalance = document.getElementById('current-balance').innerText
    const currentBalanceNumber = parseFloat(currentBalance)

    const totalBalance = currentBalanceNumber-withdrawInputNumber
    document.getElementById('current-balance').innerText = totalBalance
    
})