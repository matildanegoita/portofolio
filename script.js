document.addEventListener("DOMContentLoaded", () => {
    const projectGrid = document.getElementById("project-grid");

    // Fetch the JSON file with project data
    fetch('myprojects.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                // Create the HTML for each project dynamically
                const projectItem = document.createElement("div");
                projectItem.classList.add("project-item");

                projectItem.innerHTML = `
                    <img src="${project.image}" alt="${project.title}">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="project-link">View Project</a>
                `;

                // Append the project item to the grid
                projectGrid.appendChild(projectItem);
            });
        })
        .catch(error => {
            console.error('Error loading project data:', error);
            projectGrid.innerHTML = "<p>Unable to load projects at the moment.</p>";
        });
});
