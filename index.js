document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const btnOpen = document.getElementById('open');
    const btnReset = document.getElementById('reset');
    const valentine = document.getElementById('valentine');

    const meowAudio = document.getElementById('audio');
    const bgAudio = document.getElementById('bgAudio');
    const startBtn = document.getElementById('startAudio');

    let timer;

    // ✅ REAL user interaction
    startBtn.addEventListener('click', () => {
        bgAudio.play();
        startBtn.style.display = 'none'; // optional
    });

    envelope.addEventListener('click', open);
    btnOpen.addEventListener('click', open);
    btnReset.addEventListener('click', close);

    function open() {
        envelope.classList.add('open');
        envelope.classList.remove('close');
        valentine.innerHTML = '';
        

        timer = setTimeout(() => {
           // bgAudio.pause();
            bgAudio.volume = 0.3;
            meowAudio.currentTime = 0;
            meowAudio.volume = 1;
            meowAudio.play();
        }, 3000);
    }

    function close() {
        clearTimeout(timer);

        envelope.classList.add('close');
        envelope.classList.remove('open');
        valentine.innerHTML = "Happy Valentine's Day!";

        meowAudio.pause();
        meowAudio.currentTime = 0;
        bgAudio.play();
        bgAudio.volume = 1;
    }
});
