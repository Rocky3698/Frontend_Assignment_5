function toggleToHistory() {
    const historyBtn = document.getElementById('historyBtn');
    const donationBtn = document.getElementById('donationBtn');
    historyBtn.classList.add('bg-action');
    donationBtn.classList.remove('bg-action');
    const donationCardContainer = document.getElementById('donationCardContainer');
    donationCardContainer.classList.add('hidden');
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.classList.remove('hidden');
}

function toggleToDonation() {
    const historyBtn = document.getElementById('historyBtn');
    const donationBtn = document.getElementById('donationBtn');
    donationBtn.classList.add('bg-action');
    historyBtn.classList.remove('bg-action');
    const donationCardContainer = document.getElementById('donationCardContainer');
    donationCardContainer.classList.remove('hidden');
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.classList.add('hidden');
}

function createHistory(amount, title) {
    const historyContainer = document.getElementById('historyContainer');
    const history = document.createElement('div');
    history.classList.add('border', 'w-4/5', 'mx-auto', 'shadow-sm', 'p-4', 'rounded-md');
    history.innerHTML = `
                <p class="font-semibold text-lg">
                    ${amount} tk is donated for ${title}
                </p>
                <small>${Date()}</small>
    `;
    historyContainer.appendChild(history);
}


function validate(amount,balance) {
    if (amount == '') {
        alert('Please Enter a valid Amount');
        return false;
    }
    if (isNaN(amount)) {
        alert('Invalid Amount. Amount must be positive Integer');
        return false;
    }

    amount = parseFloat(amount);
    balance - parseFloat(balance);
    if (amount > balance) {
        alert("Insufficient Balance!");
        return false;
    }
    if (amount <= 0) {
        alert('Amount must be positive');
        return false;
    }
    return true;
}

function handleNoakhaliDonation(event) {
    event.preventDefault()
    let amount = document.getElementById('noakhaliDonationAmount').value;
    let balance = parseFloat(document.getElementById('balance').innerText);
    document.getElementById('noakhaliDonationAmount').value = '';

    if (!validate(amount,balance)) return;

    amount = parseFloat(amount);

    let totalDonation = document.getElementById('noakhaliDonatedAmount').innerText;
    totalDonation = parseFloat(totalDonation)

    document.getElementById('noakhaliDonatedAmount').innerText = amount + totalDonation
    document.getElementById('balance').innerText = balance - amount;

    const title = document.getElementById('NoakhaliTitle').innerText;
    createHistory(amount, title);

    document.getElementById('modal').show();
}

function handleFeniDonation(event) {
    event.preventDefault()
    let amount = document.getElementById('feniDonationAmount').value;
    let balance = parseFloat(document.getElementById('balance').innerText);
    document.getElementById('feniDonationAmount').value = '';

    if (!validate(amount,balance)) return;

    amount = parseFloat(amount);

    let totalDonation = document.getElementById('feniDonatedAmount').innerText;
    totalDonation = parseFloat(totalDonation)

    document.getElementById('feniDonatedAmount').innerText = amount + totalDonation
    document.getElementById('balance').innerText = balance - amount;

    const title = document.getElementById('FeniTitle').innerText;
    createHistory(amount, title);

    document.getElementById('modal').show();
}

function handleQuotaDonation(event) {
    event.preventDefault()
    let amount = document.getElementById('quotaDonationAmount').value;
    let balance = parseFloat(document.getElementById('balance').innerText);
    document.getElementById('quotaDonationAmount').value = '';

    if (!validate(amount,balance)) return;

    amount = parseFloat(amount);

    let totalDonation = document.getElementById('quotaDonatedAmount').innerText;
    totalDonation = parseFloat(totalDonation)

    document.getElementById('quotaDonatedAmount').innerText = amount + totalDonation
    document.getElementById('balance').innerText = balance - amount;

    const title = document.getElementById('QuotaTitle').innerText;
    createHistory(amount, title);

    document.getElementById('modal').show();
}