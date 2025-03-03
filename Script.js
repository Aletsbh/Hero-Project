const nav = document.querySelector('.top-nav');
const navItems = nav.querySelectorAll('a');
const signupBtn = nav.querySelector('.btn-signup');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.style.background = 'rgba(255, 255, 255, 0.9)';
            navItems.forEach(item => item.style.color = 'black');
            signupBtn.style.color = 'white';
            signupBtn.style.backgroundColor = 'black';
        } else {
            nav.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))';
            navItems.forEach(item => item.style.color = '#efeee7');
            signupBtn.style.color = 'black';
            signupBtn.style.backgroundColor = '#efeee7';
        }
    });
}, { threshold: 0 });

observer.observe(document.querySelector('.article-hero'));

// Lottie Animation
lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'files/slow-logo.json'
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
