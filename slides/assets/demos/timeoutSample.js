var clickme = document.getElementById("clickme");
clickme.addEventListener('click',clickHandler);

blip.sampleLoader()
    .samples({
        'blipLow': 'assets/audio/Blip_Select4.wav',
        'blipHigh': 'assets/audio/Blip_Select8.wav'
    })
    .done(audioLoaded)
    .load();


var clock = $('.countdown').FlipClock({
    countdown: true,
    autoStart: false,
    callbacks: {
        interval: intervalHandler
    }
});

function audioLoaded() {
    blipLow = blip.clip().sample('blipLow');
    blipHigh = blip.clip().sample('blipHigh');
}

function clickHandler(e) {
    clock.setTime(10);
    clock.start();
}

function intervalHandler(e) {
    if (clock.getTime() < 3 && document.hidden)
        blipHigh.play(0);
    else if (clock.getTime() < 5 && document.hidden)
        blipLow.play(0);
}