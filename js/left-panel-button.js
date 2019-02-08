const ovBtn = document.getElementById('overviewBtn');
const budCont = document.getElementById('budgetCont');
const budBtn = document.getElementById('budgetBtn');
const ovCont = document.getElementById('overViewContainer');
const leftPanel = document.getElementById('pnlLft');


// add event listener

leftPanel.addEventListener('click', function(e) {
    // if e.target contains a class fa-tachometer-alt then hide budget content and show overview content
    if(e.target.classList.contains('fa-tachometer-alt')) {
            budCont.style.display = 'none';
            ovCont.style.display = 'flex';
    // if e.target contains a class fa-dollar-sign then hide a overview content and show budget content
    } else if(e.target.classList.contains('fa-dollar-sign')) {
            budCont.style.display = 'flex';
            ovCont.style.display = 'none';
            
    }
})


