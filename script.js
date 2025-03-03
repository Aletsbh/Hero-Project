// Lottie Animation
lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'files/slow-logo-gray.json'
});

// Mouse movement effect for chamber-hero
document.addEventListener('mousemove', (e) => {
    const chamberHero = document.querySelector('.chamber-hero');
    const rect = chamberHero.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (normalized from -1 to 1)
    const rotateX = (e.clientY - centerY) / (window.innerHeight / 2);
    const rotateY = (centerX - e.clientX) / (window.innerWidth / 2);
    
    // Calculate position shift (maximum 5 pixels)
    const moveX = ((e.clientX - centerX) / window.innerWidth) * 5;
    const moveY = ((e.clientY - centerY) / window.innerHeight) * 5;
    
    // Apply rotation and position shift
    chamberHero.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX * 3}deg) 
        rotateY(${rotateY * 3}deg)
        translate(${moveX}px, ${moveY}px)
    `;
});

// Navigation scroll effect
const nav = document.querySelector('.top-nav');
const navItems = nav?.querySelectorAll('a');
const signupBtn = nav?.querySelector('.btn-signup');
const heroElement = document.querySelector('.article-hero');

if (nav && navItems && signupBtn) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.style.background = 'rgba(255, 255, 255, 0.9)';
                navItems.forEach(item => item.style.color = 'black');
                signupBtn.style.color = 'white';
                signupBtn.style.backgroundColor = 'black';
            } else {
                nav.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))';
                navItems.forEach(item => item.style.color = '#fff4d7');
                signupBtn.style.color = 'black';
                signupBtn.style.backgroundColor = '#fff4d7';
            }
        });
    }, { threshold: 0 });

    if (heroElement) {
        observer.observe(heroElement);
    }
}

// Stars animation
function generateBoxShadows(n) {
    let value = [];
    for (let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        value.push(`${x}px ${y}px #fff4d7`);
    }
    return value.join(', ');
}

// Generate shadows for each star layer
const smallStars = generateBoxShadows(700);
const mediumStars = generateBoxShadows(200);
const bigStars = generateBoxShadows(100);

// Apply shadows to elements
const stars1 = document.getElementById('stars');
const stars2 = document.getElementById('stars2');
const stars3 = document.getElementById('stars3');

if (stars1) stars1.style.boxShadow = smallStars;
if (stars2) stars2.style.boxShadow = mediumStars;
if (stars3) stars3.style.boxShadow = bigStars;
