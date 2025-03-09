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

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true // Mark as completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: true // Mark as completed
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Function to display courses dynamically
function displayCourses(filter = 'all') {
    const coursesContainer = document.querySelector('.coursesBox');
    coursesContainer.innerHTML = `
        <h3>Web and Computer Programming Certificate</h3>
        <div class="button titles">
            <button onclick="displayCourses('all')">All</button>
            <button onclick="displayCourses('CSE')">CSE</button>
            <button onclick="displayCourses('WDD')">WDD</button>
        </div>
        <div class="coursesList"></div>
        <p class="totalCredits"></p>
    `;

    const filteredCourses = courses.filter(course => filter === 'all' || course.subject === filter);
    const coursesList = document.querySelector('.coursesList');

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) courseCard.classList.add('completed');

        courseCard.innerHTML = `
            <h4>${course.subject} ${course.number}: ${course.title}</h4>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p>${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
        `;

        coursesList.appendChild(courseCard);
    });

    // Calculate and display total credits dynamically
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.querySelector('.totalCredits').textContent = `Total Credits: ${totalCredits}`;
}

// Run displayCourses on page load
document.addEventListener("DOMContentLoaded", function () {
    displayCourses();
});

// Last modified date
document.addEventListener("DOMContentLoaded", function() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
});