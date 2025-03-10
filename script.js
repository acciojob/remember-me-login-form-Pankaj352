document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingUserButton = document.getElementById("existing");

    // Check if credentials exist in localStorage
    if (localStorage.getItem("savedUsername") && localStorage.getItem("savedPassword")) {
        existingUserButton.style.display = "block";
    }

    // Handle form submission
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username && password) {
            alert("Logged in as " + username);
            if (rememberMeCheckbox.checked) {
                localStorage.setItem("savedUsername", username);
                localStorage.setItem("savedPassword", password);
            } else {
                localStorage.removeItem("savedUsername");
                localStorage.removeItem("savedPassword");
            }
            existingUserButton.style.display = localStorage.getItem("savedUsername") ? "block" : "none";
        }
    });

    // Handle existing user login
    existingUserButton.addEventListener("click", function () {
        const savedUsername = localStorage.getItem("savedUsername");
        if (savedUsername) {
            alert("Logged in as " + savedUsername);
        }
    });
});
