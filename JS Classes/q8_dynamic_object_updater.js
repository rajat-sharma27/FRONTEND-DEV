// Q8: Dynamic Object Updater

let user = { name: "John", email: "john@mail.com", age: 21 };

function updateUser(field, value) {
    user[field] = value;
    console.log("Updated User:", user);
}

updateUser("name", "Johnny");
updateUser("age", 22);
