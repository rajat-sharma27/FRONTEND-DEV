// Q6 - E-Commerce Inventory System

const products = [
  { id: 1, name: "Phone", category: "Electronics", price: 20000, stock: 2 },
  { id: 2, name: "Shoes", category: "Fashion", price: 3000, stock: 20 },
  { id: 3, name: "Laptop", category: "Electronics", price: 60000, stock: 1 },
  { id: 4, name: "T-shirt", category: "Fashion", price: 800, stock: 100 }
];

function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
  return products.sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((total, p) => total + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
