// Search functionality
const searchInput = document.querySelector('input[type="text"]');
searchInput.addEventListener("keyup", (event) => {
  console.log(`Searching for: ${event.target.value}`);
});

// Cart functionality placeholder
const cart = [];
function addToCart(book) {
  cart.push(book);
  console.log(`Added ${book} to cart. Cart:`, cart);
}
