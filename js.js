"use strict";


document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        document.querySelector('.splash').classList.add('display-none');
    }, 2000);

});


// Modalboks

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

