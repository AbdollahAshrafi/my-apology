document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after 2 seconds
    setTimeout(function() {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 2000);

    // Add random twinkling stars
    function addRandomStars() {
        const starsContainer = document.querySelector('.stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'random-star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = `${Math.random() * 3 + 1}px`;
            starsContainer.appendChild(star);
        }
    }

    // Create shooting stars
    function createShootingStar() {
        const starsContainer = document.querySelector('.stars');
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        // Random starting position (from top edge)
        const startX = Math.random() * 100;
        shootingStar.style.left = `${startX}%`;
        shootingStar.style.top = '0';
        
        // Random size and speed
        const size = Math.random() * 1.5 + 1.5; // 1.5-3px
        const speed = Math.random() * 2 + 2; // 2-4 seconds
        shootingStar.style.width = `${size}px`;
        shootingStar.style.height = `${size}px`;
        shootingStar.style.animationDuration = `${speed}s`;
        
        // Random brightness
        const brightness = Math.random() * 0.2 + 0.8; // 0.8-1.0
        shootingStar.style.opacity = brightness;
        
        starsContainer.appendChild(shootingStar);
        
        // Remove after animation
        setTimeout(() => {
            shootingStar.remove();
        }, speed * 1000);
    }

    // Create initial stars and shooting stars
    addRandomStars();
    
    // Create shooting stars at random intervals
    setInterval(() => {
        if (Math.random() > 0.3) { // 70% chance to create a new star
            createShootingStar();
        }
    }, 800);

    // Question navigation
    const questions = document.querySelectorAll('.question');
    const optionButtons = document.querySelectorAll('.option-btn');
    const restartButton = document.getElementById('restart');

    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentQuestion = this.closest('.question');
            const nextQuestionId = this.getAttribute('data-next');
            const nextQuestion = document.getElementById(nextQuestionId);

            currentQuestion.classList.remove('active');
            nextQuestion.classList.add('active');
        });
    });

    restartButton.addEventListener('click', function() {
        questions.forEach(question => {
            question.classList.remove('active');
        });
        questions[0].classList.add('active');
    });
}); 