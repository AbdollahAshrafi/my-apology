document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    const restartBtn = document.getElementById('restart');
    const strawberry = document.querySelector('.strawberry');
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Hide loading screen after content is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    });
    
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
                currentQuestion.style.animation = 'fadeOut 0.5s ease-out forwards';
                setTimeout(() => {
                    currentQuestion.classList.remove('active');
                    const nextQuestion = document.getElementById(nextQuestionId);
                    nextQuestion.classList.add('active');
                    nextQuestion.style.animation = 'fadeIn 0.5s ease-out forwards';
                    
                    // Add some sparkle effect
                    createSparkle(e.target);
                    
                    // Make strawberry bounce
                    strawberry.style.animation = 'none';
                    strawberry.offsetHeight;
                    strawberry.style.animation = 'float 3s ease-in-out infinite';
                }, 500);
            }
        });
    });
    
    // Handle restart button
    restartBtn.addEventListener('click', () => {
        questions.forEach(q => {
            q.style.animation = 'fadeOut 0.5s ease-out forwards';
            q.classList.remove('active');
        });
        
        setTimeout(() => {
            document.getElementById('q1').classList.add('active');
            document.getElementById('q1').style.animation = 'fadeIn 0.5s ease-out forwards';
            
            // Reset strawberry animation
            strawberry.style.animation = 'none';
            strawberry.offsetHeight;
            strawberry.style.animation = 'float 3s ease-in-out infinite';
        }, 500);
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
    
    // Add some random twinkling stars
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
        let lastShootingStarTime = 0;
        
        function createShootingStar() {
            const now = Date.now();
            if (now - lastShootingStarTime < 1500) return; // Minimum 1.5 seconds between stars
            
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
            
            lastShootingStarTime = now;
        }
        
        // Create initial shooting stars
        for (let i = 0; i < 5; i++) {
            setTimeout(createShootingStar, i * 800);
        }
        
        // Create new shooting stars at random intervals
        setInterval(() => {
            if (Math.random() > 0.3) { // 70% chance to create a new star
                createShootingStar();
            }
        }, 800);
    }
    
    addRandomStars();
    addShootingStars();
}); 