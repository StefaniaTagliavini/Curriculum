let darkModeOn = false;
const modeButton = document.querySelectorAll('.mode li button');
const modeEl = document.querySelector('.mode');

modeButton.forEach(el => {
    el.addEventListener('click', function(e) {
        modeEl.querySelector('.modeActive').classList.remove('modeActive');
        el.classList.add('modeActive');
        if (document.getElementById('light').contains(e.target)) {
            // Clicked in box
            if (darkModeOn) {
                document.body.classList.toggle("dark-mode");
            }
            darkModeOn = false;
        }
        if (document.getElementById('dark').contains(e.target)) {
            // Clicked in box
            if (!darkModeOn) {
                document.body.classList.toggle("dark-mode");
            }
            darkModeOn = true;
        }
    });
});

