// Q9: Shopping Cart with Coupon Validation

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    applyCoupon(code) {
        if (!/^(SAVE|DISC)\d{2}$/i.test(code)) {
            return "Invalid Coupon!";
        }
        let percent = parseInt(code.match(/\d{2}/)[0]);
        let total = this.getTotal();
        return total - (total * percent) / 100;
    }
}

const cart = new Cart();
cart.addItem("Phone", 20000, 1);
cart.addItem("Case", 500, 2);

console.log("Total:", cart.getTotal());
console.log("After Coupon:", cart.applyCoupon("SAVE20"));
