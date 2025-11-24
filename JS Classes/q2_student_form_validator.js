// Q2: Student Form Validator

function validateName(name) {
    return /^[A-Za-z ]+$/.test(name);
}

function validateEmail(email) {
    return /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email);
}

function validatePhone(phone) {
    return /^[0-9]{10}$/.test(phone);
}

function validatePassword(pass) {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(pass);
}

function validateForm(data) {
    return {
        nameValid: validateName(data.name),
        emailValid: validateEmail(data.email),
        phoneValid: validatePhone(data.phone),
        passValid: validatePassword(data.password)
    };
}

console.log(validateForm({
    name: "John",
    email: "john@mail.com",
    phone: "9876543210",
    password: "Pass@123"
}));
