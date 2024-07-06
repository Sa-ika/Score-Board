document.addEventListener('DOMContentLoaded', () => {
    const homeScoreElement = document.getElementById('h');
    const guestScoreElement = document.getElementById('g');

    const home1Btn = document.getElementById("home1-btn");
    const home2Btn = document.getElementById("home2-btn");
    const home3Btn = document.getElementById("home3-btn");

    const guest1Btn = document.getElementById("guest1-btn");
    const guest2Btn = document.getElementById("guest2-btn");
    const guest3Btn = document.getElementById("guest3-btn");

    let homeScore = 0;
    let guestScore = 0;

    home1Btn.addEventListener('click', function() {
        homeScore = addOne(homeScore);
        homeScoreElement.textContent = homeScore;
        updateColors();
    });

    home2Btn.addEventListener('click', function() {
        homeScore = addTwo(homeScore);
        homeScoreElement.textContent = homeScore;
        updateColors();
    });

    home3Btn.addEventListener('click', function() {
        homeScore = addThree(homeScore);
        homeScoreElement.textContent = homeScore;
        updateColors();
    });

    guest1Btn.addEventListener('click', function() {
        guestScore = addOne(guestScore);
        guestScoreElement.textContent = guestScore;
        updateColors();
    });

    guest2Btn.addEventListener('click', function() {
        guestScore = addTwo(guestScore);
        guestScoreElement.textContent = guestScore;
        updateColors();
    });

    guest3Btn.addEventListener('click', function() {
        guestScore = addThree(guestScore);
        guestScoreElement.textContent = guestScore;
        updateColors();
    });

    document.querySelector('.reset button').addEventListener('click', function() {
        reset();
    });

    function updateColors() {
        if (homeScore > guestScore) {
            homeScoreElement.style.color = '#00FF00'; // Green color for high score
            guestScoreElement.style.color = '#F94F6D'; // Original color for lower score
        } else if (guestScore > homeScore) {
            guestScoreElement.style.color = '#00FF00'; // Green color for high score
            homeScoreElement.style.color = '#F94F6D'; // Original color for lower score
        } else {
            homeScoreElement.style.color = '#F94F6D'; // Original color for tie
            guestScoreElement.style.color = '#F94F6D'; // Original color for tie
        }
    }

    function reset() {
        homeScore = 0;
        guestScore = 0;
        homeScoreElement.textContent = homeScore;
        guestScoreElement.textContent = guestScore;
        homeScoreElement.style.color = '#F94F6D'; // Reset to original color
        guestScoreElement.style.color = '#F94F6D'; // Reset to original color
    }

    function addOne(a) {
        return a + 1;
    }

    function addTwo(a) {
        return a + 2;
    }

    function addThree(a) {
        return a + 3;
    }
});
