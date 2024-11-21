// Dynamic Year and Last Modified Date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// Responsive Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
    navMenu.querySelector('ul').classList.toggle('active');
});

// Course List Array and Filtering
const courses = [
    { id: 1, name: "WDD 130", type: "WDD" },
    { id: 2, name: "WDD 131", type: "WDD" },
    { id: 3, name: "WDD 231", type: "WDD" },
    { id: 4, name: "CSE 110", type: "CSE" },
    { id: 5, name: "CSE 111", type: "CSE" },
    { id: 6, name: "CSE 210", type: "CSE" }
];

function displayCourses(filterType = 'all') {
    const container = document.getElementById('courseContainer');
    container.innerHTML = ''; // Clear previous content

    const filteredCourses = filterType === 'all' ? courses : courses.filter(course => course.type === filterType);

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.textContent = course.name;
        container.appendChild(courseDiv);
    });
}

// Initial Display of All Courses
displayCourses();

// Function to Filter Courses
function filterCourses(type) {
    displayCourses(type);
}
