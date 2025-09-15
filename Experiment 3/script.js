const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Smartphone", category: "electronics" },
  { name: "Headphones", category: "electronics" },
  { name: "T-Shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Jacket", category: "clothing" }
];

const grid = document.getElementById('products-grid');
const categorySelect = document.getElementById('category');

function renderProducts(list) {
  grid.innerHTML = '';
  list.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.textContent = product.name;
    grid.appendChild(card);
  });
}

categorySelect.addEventListener('change', () => {
  const value = categorySelect.value;
  renderProducts(value === 'all' ? products : products.filter(p => p.category === value));
});

window.addEventListener('DOMContentLoaded', () => renderProducts(products));
