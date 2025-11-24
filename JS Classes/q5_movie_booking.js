// Q5: Movie Ticket Booking

function validateName(name) {
    return /^[A-Za-z ]+$/.test(name);
}

function validateEmail(email) {
    return /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email);
}

function validateSeats(seats) {
    return /^[1-9]|10$/.test(seats);
}

function bookTicket(name, email, seats) {
    if (!validateName(name) || !validateEmail(email) || !validateSeats(seats)) {
        console.log("Invalid data!");
        return;
    }

    const booking = { name, email, seats };
    console.log("Ticket Booked:", booking);
}

bookTicket("Rohan", "rohan@mail.com", "3");
