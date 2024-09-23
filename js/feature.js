

// Showing histroy by clicking button 

const historyButton = document.getElementById('history-btn');
const donationButton = document.getElementById('donation-btn')


historyButton.addEventListener('click', function(){
    
    // Class hidden in the history section
    const historySectino = document.getElementById('history-section');
    historySectino.classList.remove('hidden');
    historyButton.style.background= '#B4F461'
    historyButton.style.border = 'none'
    // Class "hidden" add in the history section

    const homeSection = document.getElementById('home-secton');
    homeSection.classList.add('hidden')
    donationButton.classList.remove('bg-primary')
    // remove color "bg-color"

})


donationButton.addEventListener('click', function(){

    // add class "hidden"
    document.getElementById('history-section').classList.add('hidden');
    historyButton.style.background= ''
    
    // remove class "hidden"

    document.getElementById('home-secton').classList.remove('hidden');
    donationButton.classList.add('bg-primary')
})