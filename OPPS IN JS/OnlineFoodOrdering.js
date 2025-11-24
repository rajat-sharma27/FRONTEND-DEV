// Q2 - Online Food Ordering

const menu = {
  pizza: 300,
  burger: 150,
  fries: 100,
  coke: 50
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) throw new Error(`❌ Invalid item ordered: ${item}`);
      return menu[item];
    });

    const total = prices.reduce((sum, p) => sum + p, 0);
    console.log(`Total Bill: ₹${total}`);

  } catch (err) {
    console.error(err.message);
  }
}

calculateBill(["pizza", "burger"]);
calculateBill(["pizza", "icecream"]);
