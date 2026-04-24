// Navbar Behavior
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        nav.style.height = "70px";
        nav.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
        nav.style.height = "80px";
        nav.style.background = "rgba(255, 255, 255, 0.85)";
    }
};

// Tabs
function openTab(evt, tabName) {
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let btn of tabBtns) btn.classList.remove("active");
    evt.currentTarget.classList.add("active");
}

// Reveal on Scroll
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.flight-card, .hotel-card').forEach(card => {
    revealObserver.observe(card);
});