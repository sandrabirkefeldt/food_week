"use strict";

//Logo der toner frem i starten
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        document.querySelector('.splash').classList.add('display-none');
    }, 2000);

});

//Information-ikon: Pop-up vindue
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

//"Dag"-dropdown
  
//Når brugeren klikker på knappen skifter den mellem at vise og skjule indholdet
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//Lukker dropdown, hvis brugeren klikker udenfor knappen
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-knap')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Roterer dropdown-pilen, når brugeren klikker
function rotateFunction() {
    document.getElementById("arrowDropdown").classList.toggle("rotateArrow");
}

