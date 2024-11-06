// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Alert and redirect on Donate button click
const donateButton = document.getElementById('donateButton'); // Ensure you're selecting the correct button
if (donateButton) {
    donateButton.addEventListener('click', () => {
        console.log("clicked");
        alert('Thank you for considering a donation! You will be redirected to the donation page.');
        window.location.href = 'https://tinyurl.com/d3n2s4nj'; // Replace with your donation page URL
    });
}
const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
