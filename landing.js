// Landing Page JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Hearts Animation
    const heartsContainer = document.getElementById('hearts');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '♥';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }
    
    setInterval(createHeart, 800);

    // Envelope Animation
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const continueBtn = document.getElementById('continueBtn');
    const landingPage = document.getElementById('landingPage');
    const timelinePage = document.getElementById('timelinePage');
    let envelopeOpened = false;

    envelopeWrapper.addEventListener('click', function(e) {
        if (!envelopeOpened && !e.target.classList.contains('continue-btn')) {
            envelopeOpened = true;
            envelopeWrapper.classList.add('opening');
        }
    });

    continueBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        landingPage.classList.add('hidden');
        setTimeout(() => {
            timelinePage.classList.add('visible');
            window.scrollTo(0, 0);
        }, 500);
    });

    // Add flowers around card message
    const cardMessage = document.getElementById('cardMessage');
    const flowers = ['🌸', '🌺', '🌼', '🌷', '🌹', '💐'];
    const flowerPositions = [
        { top: '-15px', left: '10px' },
        { top: '-10px', right: '15px' },
        { top: '20px', left: '-20px' },
        { top: '25px', right: '-15px' },
        { top: '50px', left: '5px' },
        { top: '55px', right: '10px' },
        { bottom: '20px', left: '-15px' },
        { bottom: '15px', right: '-20px' },
        { bottom: '-5px', left: '20px' },
        { bottom: '-10px', right: '25px' }
    ];

    flowerPositions.forEach((pos, index) => {
        const flower = document.createElement('span');
        flower.className = 'flower';
        flower.textContent = flowers[index % flowers.length];
        flower.style.top = pos.top || 'auto';
        flower.style.bottom = pos.bottom || 'auto';
        flower.style.left = pos.left || 'auto';
        flower.style.right = pos.right || 'auto';
        flower.style.animationDelay = `${Math.random() * 2}s`;
        cardMessage.appendChild(flower);
    });
});