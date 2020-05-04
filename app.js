// Query Selelectors
const costInput = document.querySelector('.cost');
const serviceInput = document.querySelector('.service');
const peopleInput = document.querySelector('.people');
const tip_btn = document.querySelector('#tip-btn');

// Event Listeners
tip_btn.addEventListener('click', generateTip);

// Code to do the math and generate the tip
function generateTip (){
    let cost = Number(costInput.value);
    let service = Number(serviceInput.value) / 100;
    let people = Number(peopleInput.value);
    let tip = (cost * service) / people;

// Line 19 uses a tiernary operator because it's much cleaner than using a if/else statement
    let tipElement = document.querySelector('.tip-wrap .tip');
    tipElement.innerText = '$' + tip.toFixed(2) + ((people > 1) ? ' each' : '');
   }

