document.addEventListener('DOMContentLoaded', () => {
    // --- Element Selectors ---
    const backgroundMusic = document.getElementById('backgroundMusic');
    const giftContainer = document.getElementById('giftContainer');
    const keyContainer = document.getElementById('keyContainer');
    const storybookContainer = document.getElementById('storybookContainer');
    const bookCover = document.getElementById('bookCover');
    const pages = document.querySelectorAll('.page');
    
    const steps = {
        step1: document.getElementById('step1'),
        step2: document.getElementById('step2'),
        step3: document.getElementById('step3'),
        step5: document.getElementById('step5'),
    };

    // --- Utility Function to Transition Steps ---
    function transitionToStep(targetStepId) {
        const currentActive = document.querySelector('.step.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        steps[targetStepId].classList.add('active');
    }

    // --- Step 1: Gift Box Interaction ---
    giftContainer.addEventListener('click', () => {
        giftContainer.classList.add('open');
        backgroundMusic.play().catch(e => console.error("Autoplay failed:", e));
        
        setTimeout(() => {
            transitionToStep('step2');
        }, 800); // Wait for lid animation
    });

    // --- Step 2: Key Interaction ---
    keyContainer.addEventListener('click', () => {
        keyContainer.classList.add('unlocking');
        
        setTimeout(() => {
            transitionToStep('step3');
            // Animate book into view
            setTimeout(() => {
                storybookContainer.classList.add('visible');
            }, 100);
        }, 600); // Wait for key animation

        // Start the storybook sequence after a delay
        setTimeout(startStorybookSequence, 2000);
    });

    // --- Step 3 & 4: Storybook Sequence ---
    function startStorybookSequence() {
        // 1. Center and enlarge the book
        storybookContainer.classList.add('opening');

        // 2. Open the cover
        setTimeout(() => {
            bookCover.classList.add('flipped');
        }, 1000);

        // 3. Turn pages sequentially
        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add('flipped');
            }, 2500 + (index * 2000)); // Stagger page turns
        });

        // 4. Transition to the final step after the last page turns
        const totalPageTurnTime = 2500 + (pages.length * 2000);
        setTimeout(() => {
            transitionToStep('step5');
        }, totalPageTurnTime);
    }
    
    // --- Particle Background Effect ---
    function createParticles() {
        const background = document.querySelector('.background-container');
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = `${Math.random() * 5 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animation = `float ${Math.random() * 20 + 10}s linear infinite`;
            background.appendChild(particle);
        }
    }

    // Add keyframe animation for particles dynamically
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes float {
            0% { transform: translateY(0) translateX(0); opacity: 0.7; }
            50% { transform: translateY(-20px) translateX(20px); opacity: 0.3; }
            100% { transform: translateY(0) translateX(0); opacity: 0.7; }
        }
    `;
    document.head.appendChild(styleSheet);

    createParticles();
});
