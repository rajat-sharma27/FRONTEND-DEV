// === File: q6_product_fetcher.js ===
// Fetch from Fake Store API and log product details
// Works in browsers and Node 18+. If using older Node, install node-fetch.
async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Network response was not ok');
    const products = await res.json();

    products.forEach(p => {
      console.log(`Product: ${p.title}`);
      console.log(`Price: $${p.price}`);
      console.log(`Image: ${p.image}`);
      console.log('---');
    });

    return products;
  } catch (err) {
    console.error('Failed to load products. Please try again.');
    throw err;
  }
}

// Bonus: create DOM product cards (only works in browser)
function createProductCards(products) {
  if (typeof document === 'undefined') return;
  const container = document.createElement('div');
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
  container.style.gap = '12px';

  products.forEach(p => {
    const card = document.createElement('div');
    card.style.border = '1px solid #ccc';
    card.style.padding = '8px';
    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.title;
    img.style.width = '100%';
    const title = document.createElement('h4');
    title.textContent = p.title;
    const price = document.createElement('p');
    price.textContent = `$${p.price}`;
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    container.appendChild(card);
  });

  document.body.appendChild(container);
}

if (require.main === module) {
  // Node or browser: try fetch and log
  fetchProducts().catch(() => {});
}



