function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");

    userError.innerHTML = "";
    passError.innerHTML = "";

    let isValid = true;

    if (username.length < 5) {
        userError.innerHTML = "Username must be at least 5 characters";
        isValid = false;
    }

    if (password.length < 6) {
        passError.innerHTML = "Password must be at least 6 characters";
        isValid = false;
    } else if (!/\d/.test(password)) {
        passError.innerHTML = "Password must contain at least one number";
        isValid = false;
    }

    return isValid;
}
