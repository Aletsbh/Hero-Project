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
