document.addEventListener("DOMContentLoaded", () => {
    const footer1 = document.getElementById('footer1');
    const newParagraph = document.createElement('p');
    const img = document.createElement('img');

    img.src = "images/ke.png";
    img.alt = "flag";
    img.width = 30;
    newParagraph.textContent = "©2025 💻 Lewis Ochieng' Ombaka 💻 Kenya ";
    newParagraph.append(img);
    footer1.append(newParagraph);

    // Hamburger menu
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Course filtering
    function filterButtons(selectedCategory) {
        const allCourses = document.querySelectorAll('.btn');
        allCourses.forEach(course => {
            if (selectedCategory === 'all' || course.getAttribute('data-category') === selectedCategory) {
                course.classList.remove('hidden');
                course.style.opacity = '1';
                course.style.transform = 'scale(1)';
            } else {
                course.style.opacity = '0';
                course.style.transform = 'scale(0.9)';
                setTimeout(() => course.classList.add('hidden'), 300);
            }
        });
    }

    window.filterButtons = filterButtons;
});
