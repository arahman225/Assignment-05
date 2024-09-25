
// Sticky scroll -------------------------

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        document.querySelector('.btn-scroll').classList.add('bg-secondary', 'shadow-lg');
    } else {
        document.querySelector('.btn-scroll').classList.remove('bg-secondary','shadow-lg');
    }
});


// First Blog ---------- Start 

const modal = document.getElementById('my_modal_1');
const openModalBtn = document.getElementById('openModalBtn');



openModalBtn.addEventListener('click', function() {
   
    // Get the value from the input field
    
    const getAmountFromInput = getInputfieldValueById('input-amount-1');
    const balance = parseFloat(document.getElementById('balance').innerText)

    // Check -----------------------------
    if(isNaN(getAmountFromInput)){
        alert('Please enter a number')
        return;
    }

    // If OR Else -------------------- condition -------------------==============-

   if (getAmountFromInput >0 && getAmountFromInput <= balance) {
    // Showing the modal section by clicking
    modal.showModal(); 
    

    // Available Balance  && Donate Balance---------------------============

    const availAbleBalance = parseFloat(document.getElementById('balance').innerText);
    const donation_from_blance = availAbleBalance - getAmountFromInput;
    document.getElementById('balance').innerText = donation_from_blance;


    // Adding Balance from input amount

    const donationBalance1 = parseFloat(document.getElementById('donating-balance1').innerText);

    const addinBalanceFromInputAmount = donationBalance1 + getAmountFromInput;

    document.getElementById('donating-balance1').innerText = addinBalanceFromInputAmount;

    document.getElementById('input-amount-1').value = ''



    // Showing History -------------------------================================

    const div = document.createElement('div');
    div.classList.add('p-5','border', 'rounded-lg');

    const h2 = document.createElement('h2');
    h2.innerText = `${getAmountFromInput} Tk  is Donated for famine-2024 at Noakhali, Bangladesh`;
    h2.classList.add('font-bold');
    h2.classList.add('text-green-600');
    div.appendChild(h2);

    const p = document.createElement('p');
   p.innerText = `Date: ${showingTimeAndDate()}`

    div.append(p)

    document.getElementById('history-section').appendChild(div)
    
} 

else{
    alert("Please enter a valid donation amount. greater than 0 or less than available balance or equal balance !");
}

});


// First Blog ---------- End----------------------



// Second Blog ---------------------Start--------------------



const modal2 = document.getElementById('my_modal_4');
const openModalBtn2 = document.getElementById('openModalBtn2');



openModalBtn2.addEventListener('click', function() {
   
    // Get the value from the input field
    
    const getAmountFromInput2 = getInputfieldValueById('input-amount2');
    const main_balance = parseFloat(document.getElementById('balance').innerText)

    // Check -----------------------------
    if(isNaN(getAmountFromInput2)){
        alert('Please enter a number')
        return;
    }

    // If OR Else -------------------- condition --------------------=========

   if (getAmountFromInput2 >0 && getAmountFromInput2 <= main_balance) {
    // Showing the modal section by clicking
    modal2.showModal(); 
    

    // Available Balance  && Donate Balance---------------------

    const availAbleBalance = parseFloat(document.getElementById('balance').innerText);
    const donation_from_blance = availAbleBalance - getAmountFromInput2;
    document.getElementById('balance').innerText = donation_from_blance;



    // Adding Balance from input amount==================================

    const donationBalance1 = parseFloat(document.getElementById('donating-balance-two').innerText);

    const addinBalanceFromInputAmount = donationBalance1 + getAmountFromInput2;

    document.getElementById('donating-balance-two').innerText = addinBalanceFromInputAmount;

    document.getElementById('input-amount2').value = ''



    // Showing History And  -------------------------============================================

    const div = document.createElement('div');
    div.classList.add('p-5','border', 'rounded-lg');

    const h2 = document.createElement('h2');
    h2.innerText = `${getAmountFromInput2} Tk  is Donated for famine-2024 in Feni, Bangladesh`;
    h2.classList.add('font-bold');
    h2.classList.add('text-green-600');
    div.appendChild(h2);

    const p = document.createElement('p');
   p.innerText = `Date: ${showingTimeAndDate()}`

    div.append(p)

    document.getElementById('history-section').appendChild(div)
    
} 

else{
    alert("Please enter a valid donation amount. greater than 0 or less than available balance or equal balance !");
}

});


// Second Blog ---------------------End---------------------=========================




// Third Blog ----------================================ Start ===========================================

const modal3 = document.getElementById('my_modal_4');
const openModalBtn3 = document.getElementById('openModalBtn3');



openModalBtn3.addEventListener('click', function() {
   
    // Get the value from the input field
    
    const getAmountFromInput3 = getInputfieldValueById('input-amount3');
    const balance = parseFloat(document.getElementById('balance').innerText)

    // Check -----------------------------
    if(isNaN(getAmountFromInput3)){
        alert('Please enter a number')
        return;
    }

    // If OR Else -------------------- condition --------------------

   if (getAmountFromInput3 >0 && getAmountFromInput3 <= balance) {
    // Showing the modal section by clicking
    modal.showModal(); 
    
    // Available Balance  && Donate Balance---------------------

    const availAbleBalance = parseFloat(document.getElementById('balance').innerText);
    const donation_from_blance = availAbleBalance - getAmountFromInput3;
    document.getElementById('balance').innerText = donation_from_blance;


    // Adding Balance from input amount

    const donationBalance3 = parseFloat(document.getElementById('donating-balance-three').innerText);

    const addinBalanceFromInputAmount = donationBalance3 + getAmountFromInput3;

    document.getElementById('donating-balance-three').innerText = addinBalanceFromInputAmount;

    document.getElementById('input-amount3').value = ''



    // Showing History -------------------------


    const div = document.createElement('div');
    div.classList.add('p-5','border', 'rounded-lg');

    const h2 = document.createElement('h2');
    h2.innerText = `${getAmountFromInput3} Tk  is Donated Aid for Injured in the Quota Movement in Bangladesh`;
    h2.classList.add('font-bold');
    h2.classList.add('text-green-600');
    div.appendChild(h2);

    const p = document.createElement('p');
   p.innerText = `Date: ${showingTimeAndDate()}`

    div.append(p)

    document.getElementById('history-section').appendChild(div)

} 

else{
    alert("Please enter a valid donation amount. greater than 0 or less than available balance or equal balance !");
}

});

// Third Blog ----------================================ End ===========================================