

// First part Modal ----------

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

    // If OR Else -------------------- condition --------------------

   if (getAmountFromInput >0 && getAmountFromInput <= balance) {
    // Showing the modal section by clicking
    modal.showModal(); 
    
    // Available Balance  && Donate Balance---------------------

    const availAbleBalance = parseFloat(document.getElementById('balance').innerText);
    const donation_from_blance = availAbleBalance - getAmountFromInput;
    document.getElementById('balance').innerText = donation_from_blance;


    // Adding Balance from input amount

    const donationBalance1 = parseFloat(document.getElementById('donating-balance1').innerText);

    const addinBalanceFromInputAmount = donationBalance1 + getAmountFromInput;

    document.getElementById('donating-balance1').innerText = addinBalanceFromInputAmount;

    document.getElementById('input-amount-1').value = ''



    // Showing Exact Time and Date ------------------start



    // Showing Exact Time and Date ------------------ end


    // Showing History And  -------------------------



    const div = document.createElement('div');
    div.classList.add('p-5','border', 'rounded-lg');

    const h2 = document.createElement('h2');
    h2.innerText = `${addinBalanceFromInputAmount} Tk  is Donated for famine-2024 at Noakhali, Bangladesh`;
    div.appendChild(h2);

    const p = document.createElement('p');
   p.innerText = `Date: ${showingTimeAndDate()}`

    div.append(p)

    document.getElementById('history-section').appendChild(div)
    


} 

else{
    alert("Please enter a valid donation amount greater than 0 or less than available balance !");
}

});



// Second ------------------------------------------




const modal2 = document.getElementById('my_modal_5');
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

    // If OR Else -------------------- condition --------------------

   if (getAmountFromInput2 >0 && getAmountFromInput2 <= main_balance) {
    // Showing the modal section by clicking
    modal2.showModal(); 
    
    // Available Balance  && Donate Balance---------------------

    const availAbleBalance = parseFloat(document.getElementById('balance').innerText);
    const donation_from_blance = availAbleBalance - getAmountFromInput2;
    document.getElementById('balance').innerText = donation_from_blance;


    // Adding Balance from input amount

    const donationBalance1 = parseFloat(document.getElementById('donating-balance-two').innerText);

    const addinBalanceFromInputAmount = donationBalance1 + getAmountFromInput2;

    document.getElementById('donating-balance-two').innerText = addinBalanceFromInputAmount;

    document.getElementById('input-amount2').value = ''



    // Showing Exact Time and Date ------------------start

    const TimeAndDateNow = new Date();
    const full_time_date = TimeAndDateNow.toString();

    // Showing Exact Time and Date ------------------ end


    // Showing History And  -------------------------

    const showingHistory = document.getElementById('history-section');

    const div = document.createElement('div');
    div.classList.add('p-5','border', 'rounded-lg');

    const h2 = document.createElement('h2');
    h2.innerText = `${addinBalanceFromInputAmount} Tk  is Donated for famine-2024 in Feni, Bangladesh`;
    div.appendChild(h2);

    const p = document.createElement('p');
   p.innerText = `Date: ${full_time_date}`

    div.append(p)

    document.getElementById('history-section').appendChild(div)
    


    console.log(full_time_date)

} 

else{
    alert("Please enter a valid donation amount greater than 0 or less than available balance !");
}

});


