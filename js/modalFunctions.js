//  Modal Function For Donation Balance --------------


function getInputfieldValueById(id){

    const getInputAmount = parseFloat(document.getElementById(id).value);

    return getInputAmount;

}

// Time Function ---------------------

function showingTimeAndDate(){
    const TimeAndDateNow = new Date();
    const full_time_date = TimeAndDateNow.toString();

    return full_time_date
}