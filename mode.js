let darkModeOn = false;
const modeButton = document.querySelectorAll('.mode li button');
const modeEl = document.querySelector('.mode');

if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', "false");
}

checkMode()

function checkMode() {
    if (localStorage.getItem('darkMode') === "true") {
        darkModeOn = true;
        document.body.classList.toggle("dark-mode");
    } else {
        darkModeOn = false;
    }
}

modeButton.forEach(el => {
    el.addEventListener('click', function(e) {
        if (document.getElementById('light').contains(e.target)) {
            // Clicked in box
            if (darkModeOn) {
                document.body.classList.toggle("dark-mode");
            }
            darkModeOn = false;
            localStorage.setItem('darkMode', "false");
        }
        if (document.getElementById('dark').contains(e.target)) {
            // Clicked in box
            if (!darkModeOn) {
                document.body.classList.toggle("dark-mode");
            }
            darkModeOn = true;
            localStorage.setItem('darkMode', "true");
        }
    });
});

