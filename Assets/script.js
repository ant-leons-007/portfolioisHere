document.addEventListener('DOMContentLoaded', function () {
    const gradient = document.getElementById('bg-gradient');

    function updateGradient() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

        const posX = scrollPercent * 100;
        const posY = scrollPercent * 100;
        gradient.style.backgroundPosition = `${posX}% ${posY}%`;
    }

    window.addEventListener('scroll', updateGradient, { passive: true });
    updateGradient();
});