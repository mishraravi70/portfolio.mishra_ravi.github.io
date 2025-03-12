document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded!");
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
    
    // Dark mode toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.background = "#007bff";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
    
    // Displaying an alert for achievements
    const achievements = [
        "Qualified IIT JAM Mathematics 2023 - AIR 1279",
        "Volunteer at ICCST 2023 - DIAT, Pune",
        "Participated in PuneCon-2024 & IEEE Conference"
    ];
    
    const achievementsButton = document.createElement("button");
    achievementsButton.textContent = "Show Achievements";
    achievementsButton.style.position = "fixed";
    achievementsButton.style.top = "50px";
    achievementsButton.style.right = "10px";
    achievementsButton.style.padding = "10px";
    achievementsButton.style.background = "#28a745";
    achievementsButton.style.color = "white";
    achievementsButton.style.border = "none";
    achievementsButton.style.cursor = "pointer";
    document.body.appendChild(achievementsButton);
    
    achievementsButton.addEventListener("click", function () {
        alert("Achievements:\n" + achievements.join("\n"));
    });
});
