function togglehide() {
        // get the clock
        var myClock = document.getElementById('time');

        // get the current value of the clock's display property
        var displaySetting = myClock.style.display;

        // also get the clock button, so we can change what it says
        var clockButton = document.getElementById('togglehide');

        // now toggle the clock and the button text, depending on current state
        if (displaySetting == 'block') {
        // clock is visible. hide it
        myClock.style.display = 'none';
        // change button text
        clockButton.innerHTML = 'Show Time';
        }
        else {
        // clock is hidden. show it
        myClock.style.display = 'block';
        // change button text
        clockButton.innerHTML = 'Hide Time';
        }
    }
function togglehide1() {
        // get the clock
        var myClock = document.getElementById('time1');

        // get the current value of the clock's display property
        var displaySetting = myClock.style.display;

        // also get the clock button, so we can change what it says
        var clockButton = document.getElementById('togglehide1');

        // now toggle the clock and the button text, depending on current state
        if (displaySetting == 'block') {
        // clock is visible. hide it
        myClock.style.display = 'none';
        // change button text
        clockButton.innerHTML = 'Contact Us:';
        }
        else {
        // clock is hidden. show it
        myClock.style.display = 'block';
        // change button text
        // clockButton.innerHTML = 'Hide Time';
        }
    }