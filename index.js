document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const btnOpen = document.getElementById('open');
    const btnReset = document.getElementById('reset');
    const valentine = document.getElementById('valentine');

    envelope.addEventListener('click', open);
    btnOpen.addEventListener('click', open);
    btnReset.addEventListener('click', close);

    function open() {
        envelope.classList.add('open');
        envelope.classList.remove('close');
        valentine.innerHTML = '';
    }

    function close() {
        envelope.classList.add('close');
        envelope.classList.remove('open');
        valentine.innerHTML = "Happy Valentine's Day!";
    }
});
