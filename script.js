let compleannoShowed = false;
let mappaShowed = false;
let telShowed = false;
const nascondinoCompleanno = document.querySelector(".dropdown-nascosto-compleanno");
const nascondinoMappa = document.querySelector(".dropdown-nascosto-mappa");
const nascondinoTel = document.querySelector(".dropdown-nascosto-tel");

window.addEventListener('click', function(e){   
    if (document.getElementById('profile-candles').contains(e.target)){
      // Clicked in box
    } else {
      // Clicked outside the box
      if (compleannoShowed) {
        showHideCompleanno();
      }
    }
    if (document.getElementById('profile-location').contains(e.target)){
      // Clicked in box
    } else {
      // Clicked outside the box
      if (mappaShowed) {
        showHideMappa();
      }
    }
    if (document.getElementById('profile-phone').contains(e.target)){
      // Clicked in box
    } else {
      // Clicked outside the box
      if (telShowed) {
        showHideTel();
      }
    }
});

function showHideCompleanno() {
    nascondinoCompleanno.classList.toggle("hide");
    if (mappaShowed) {
        showHideMappa();
        mappaShowed = false;
    }
    if (telShowed) {
        showHideTel();
        telShowed = false;
    }
    compleannoShowed = !compleannoShowed;
}

function showHideMappa() {
    nascondinoMappa.classList.toggle("hide");
    if (compleannoShowed) {
        showHideCompleanno();
        compleannoShowed = false;
    }
    if (telShowed) {
        showHideTel();
        telShowed = false;
    }
    mappaShowed = !mappaShowed;
}

function showHideTel() {
    nascondinoTel.classList.toggle("hide");
    if (compleannoShowed) {
        showHideCompleanno();
        compleannoShowed = false;
    }
    if (mappaShowed) {
        showHideMappa();
        mappaShowed = false;
    }
    telShowed = !telShowed;
}