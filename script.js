document.addEventListener("DOMContentLoaded", function() {
    let welcomeScreen = document.querySelector(".welcome");
    
    setTimeout(() => {
        welcomeScreen.style.opacity = "0";
        setTimeout(() => {
            welcomeScreen.style.display = "none";
        }, 1000);
    }, 2000);
});