document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const btnOpen = document.getElementById('open');
    const btnReset = document.getElementById('reset');
    const valentine = document.getElementById('valentine');
    const audio = document.getElementById('audio');

    if (!audio) {
        console.error('Audio element not found');
        return;
    }

    envelope.addEventListener('click', open);
    btnOpen.addEventListener('click', open);
    btnReset.addEventListener('click', close);

    function open() {
        envelope.classList.add('open');
        envelope.classList.remove('close');
        valentine.innerHTML = '';
        setTimeout(() => {
            audio.play().catch(e => console.error('Audio play error:', e));
        }, 2000);
    }

    function close() {
        envelope.classList.add('close');
        envelope.classList.remove('open');
        valentine.innerHTML = "Happy Valentine's Day!";
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }
});
