const user = {
    name: "Deepak",
    showName: () => {
        console.log(this.name);
    }
};

user.showName(); // undefined because arrow functions don't bind their own "this".

const fixedUser = {
    name: "Deepak",
    showName() {
        console.log(this.name);
    }
};

fixedUser.showName();
