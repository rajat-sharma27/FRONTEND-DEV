// Q7: Login Form Validation

function validateUsername(username) {
    return /^.{5,}$/.test(username);
}

function validatePassword(password) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
}

function login(username, password) {
    if (!validateUsername(username)) return "Username too short!";
    if (!validatePassword(password)) return "Weak password!";
    return "Login Successful!";
}

console.log(login("admin123", "Pass@1234"));
