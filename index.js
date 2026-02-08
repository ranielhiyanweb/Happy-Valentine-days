document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const btnOpen = document.getElementById('open');
    const btnReset = document.getElementById('reset');
    const valentine = document.getElementById('valentine');

    const meowAudio = document.getElementById('audio');
    const bgAudio = document.getElementById('bgAudio');

    let timer;

    envelope.addEventListener('click', open);
    btnOpen.addEventListener('click', open);
    btnReset.addEventListener('click', close);

    function open() {
        envelope.classList.add('open');
        envelope.classList.remove('close');
        valentine.innerHTML = '';

        // delay 1 second
        timer = setTimeout(() => {
            bgAudio.pause();           // stop background
            meowAudio.currentTime = 0;
            meowAudio.play();          // play meow
        }, 3000);
    }

    function close() {
        clearTimeout(timer);

        envelope.classList.add('close');
        envelope.classList.remove('open');
        valentine.innerHTML = "Happy Valentine's Day!";

        // stop meow
        meowAudio.pause();
        meowAudio.currentTime = 0;

        // play background again
        bgAudio.play();
    }
});
