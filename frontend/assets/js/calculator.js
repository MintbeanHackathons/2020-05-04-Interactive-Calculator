document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    document.getElementById('split').addEventListener('click', () => {
        split();
    });

    document.getElementById('clear').addEventListener('click', () => {
        clear();
    });
}

function split() {
    let amount = document.getElementById('amount');
    let people = document.getElementById('people');

    let message = document.getElementById('message');
    let result = 'Each person will pay you = ';

    if(people.value === '' && amount.value === '') {
        message.textContent = 'Please Enter valid value';
        return;
    }

    if(people.value != 0) {
        result += amount.value / people.value;
    }
    else {
        result += amount.value;
    }

    message.textContent = result;
}

function clear() {
    let amount = document.getElementById('amount');
    let people = document.getElementById('people');
    let message = document.getElementById('message');

    amount.value = '';
    people.value = '';
    message.textContent = '';
}