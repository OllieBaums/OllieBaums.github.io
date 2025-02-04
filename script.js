document.querySelectorAll('.yes-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('surprise').classList.remove('hidden');
        document.querySelector('.flowers').innerHTML = "🌸🌹💐🌷🌻🌼";
    });
});
