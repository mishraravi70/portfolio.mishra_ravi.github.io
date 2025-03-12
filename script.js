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
    toggleButton.classList.add("toggle-button");
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
    achievementsButton.classList.add("achievements-button");
    document.body.appendChild(achievementsButton);
    
    achievementsButton.addEventListener("click", function () {
        alert("Achievements:\n" + achievements.join("\n"));
    });
    
    // Apply CSS for buttons
    const style = document.createElement("style");
    style.textContent = `
        .toggle-button, .achievements-button {
            position: fixed;
            top: 10px;
            right: 10px;
            padding: 10px;
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 14px;
        }
        .achievements-button {
            top: 50px;
            background: #28a745;
        }
        .dark-mode {
            background-color: #222;
            color: #fff;
        }
    `;
    document.head.appendChild(style);
});
