var today = new Date();

var hours = today.getTimezoneOffset();


let day = document.querySelector('.day')
let night = document.querySelector('.night')

if (hours > 5 || hours < 13) {
    day.style.display = "block";
    night.style.display = "none";

}

if (hours < 5 || hours > 13) {
    day.style.display = "none";
    night.style.display = "block";
    
    let blurred = document.querySelector('h1')
    blurred.classList.add('blur');

}

