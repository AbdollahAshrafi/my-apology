document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    const restartBtn = document.getElementById('restart');
    const strawberry = document.querySelector('.strawberry');
    
    // Add strawberry seeds
    function addStrawberrySeeds() {
        const seedCount = 20;
        for (let i = 0; i < seedCount; i++) {
            const seed = document.createElement('div');
            seed.className = 'seed';
            
            // Position seeds in a circular pattern
            const angle = (i / seedCount) * Math.PI * 2;
            const radius = 40;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;
            
            seed.style.left = `${x}%`;
            seed.style.top = `${y}%`;
            seed.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            strawberry.appendChild(seed);
        }
    }
    
    addStrawberrySeeds();
    
    // Handle question navigation
    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const currentQuestion = e.target.closest('.question');
            const nextQuestionId = e.target.dataset.next;
            
            if (nextQuestionId) {
                currentQuestion.classList.remove('active');
                document.getElementById(nextQuestionId).classList.add('active');
                
                // Add some sparkle effect
                createSparkle(e.target);
                
                // Make strawberry bounce
                strawberry.style.animation = 'none';
                strawberry.offsetHeight; // Trigger reflow
                strawberry.style.animation = 'float 3s ease-in-out infinite';
            }
        });
    });
    
    // Handle restart button
    restartBtn.addEventListener('click', () => {
        questions.forEach(q => q.classList.remove('active'));
        document.getElementById('q1').classList.add('active');
        
        // Reset strawberry animation
        strawberry.style.animation = 'none';
        strawberry.offsetHeight;
        strawberry.style.animation = 'float 3s ease-in-out infinite';
    });
    
    // Create sparkle effect
    function createSparkle(element) {
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDelay = `${Math.random() * 0.5}s`;
            element.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }
    
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
    
    // Add shooting stars
    function addShootingStars() {
        const starsContainer = document.querySelector('.stars');
        setInterval(() => {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            shootingStar.style.left = `${Math.random() * 100}%`;
            shootingStar.style.top = `${Math.random() * 50}%`;
            shootingStar.style.animationDelay = `${Math.random() * 2}s`;
            starsContainer.appendChild(shootingStar);
            
            setTimeout(() => {
                shootingStar.remove();
            }, 3000);
        }, 3000);
    }
    
    addRandomStars();
    addShootingStars();
}); 