var radioPlayer = document.getElementById('radioPlayer');

//Set the default volume to 0.1 when the page loads
radioPlayer.volume = 0.1;

//Ensure the volume slider and input reflects this default value
document.getElementById('volumeSlider').value = 0.1;
document.getElementById('volumeInput').value = 0.1;

document.getElementById('playButton').addEventListener('click', function() {
   
    var radioSource = document.getElementById('radioSource');

    // Replace this URL with the actual stream URL from Zeno.fm
    var streamURL = 'https://stream.zeno.fm/xkpjkwiubidvv';  // Your Zeno.fm stream URL

    // Check if the radio is already playing
    if (radioPlayer.paused || radioPlayer.currentTime === 0) {
        // Set the new stream URL and play it
        radioSource.src = streamURL;
        radioPlayer.load(); // Reload the player with the new source
        radioPlayer.play();
        document.getElementById('playButton').innerText = 'Stop Radio';
    } else {
        // Stop the radio and reset button
        radioPlayer.pause();
        document.getElementById('playButton').innerText = 'Play Radio';
    }
});

//Set the default volume to 0.1 when the page loads
radioPlayer.volume = 0.1;

//Ensure the volume slider and input reflects this default value
document.getElementById('volumeSlider').value = 0.1;
document.getElementById('volumeInput').value = 0.1;

// Volume control logic
var volumeSlider = document.getElementById('volumeSlider');
var volumeInput = document.getElementById('volumeInput');
var radioPlayer = document.getElementById('radioPlayer');

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