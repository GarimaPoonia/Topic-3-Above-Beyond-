function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user1" && password === "garima") {
        window.location.href = "user1.html";
    } else if (username === "user2" && password === "vinu") {
        window.location.href = "user2.html";
    } else {
        alert("Invalid username or password");
    }
}

function logout() {
    window.location.href = "index.html";
}