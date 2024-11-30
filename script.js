var radioPlayer = document.getElementById('radioPlayer');

// Set the default volume to 0.1 when the page loads
radioPlayer.volume = 0.1;

// Ensure the volume slider and input reflect this default value
document.getElementById('volumeSlider').value = 0.1;
document.getElementById('volumeInput').value = 0.1;

// Function to toggle between play and pause
function togglePlayPause() {
    var radioSource = document.getElementById('radioSource');
    var icon = document.getElementById("playPauseIcon");

    var streamURL = 'https://stream.zeno.fm/xkpjkwiubidvv';

    // Check if the radio is already playing
    if (radioPlayer.paused || radioPlayer.currentTime === 0) {
        // Set the new stream URL and play it
        radioSource.src = streamURL;
        radioPlayer.load(); // Reload the player with the new source
        radioPlayer.play();
        // Update the icon to the pause icon
        icon.src = "img/pause.png";
        icon.alt = "Pause";
    } else {
        // Stop the radio and reset the icon to the play icon
        radioPlayer.pause();
        icon.src = "img/play.png";
        icon.alt = "Play";
    }
}

// Volume control logic
var volumeSlider = document.getElementById('volumeSlider');
var volumeInput = document.getElementById('volumeInput');

// Sync the slider and input box
volumeSlider.addEventListener('input', function () {
    radioPlayer.volume = volumeSlider.value;
    volumeInput.value = volumeSlider.value;
});

volumeInput.addEventListener('input', function () {
    var volume = parseFloat(volumeInput.value);
    if (volume >= 0 && volume <= 1) {
        radioPlayer.volume = volume;
        volumeSlider.value = volume;
    }
});
