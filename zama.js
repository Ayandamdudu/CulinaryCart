// Define arrays to store product details
const productDetails = {
    'Fish taco': {
      title: 'Fish taco Information',
      ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4']
    },
    'seafood paella': {
      title: 'Seafood Paella Information',
      ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5', 'ingredient 6', 'ingredient 7', 'ingredient 8']
    },
    'pokebowl': {
      title: 'Pokebowl Information',
      ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4', 'ingredient 5', 'ingredient 6']
    },
    'shrimpscampi': {
      title: 'Shrimp Scampi Information',
      ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3', 'ingredient 4']
    }
  };
   
  // Function to display product information
  function showProductInfo(product) {
    // Store selected product info in sessionStorage
    sessionStorage.setItem('selectedProduct', product);
    // Redirect to product info page
    window.location.href = 'product_info.html';
  }
   
  // Retrieve selected product info from sessionStorage
  const selectedProduct = sessionStorage.getItem('selectedProduct');
   
  // Display product info based on the selected product
  const productInfoContainer = document.getElementById('productInfo');
   
  // Check if selected product exists in the productDetails array
  if (selectedProduct && productDetails[selectedProduct]) {
    const { title, ingredients } = productDetails[selectedProduct];
    productInfoContainer.innerHTML = `
  <h2>${title}</h2>
  <p>These are the items for ${selectedProduct}.</p>
  <ul>
        ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
  </ul>
    `;
  } else {
    productInfoContainer.innerHTML = '<p>No product information available.</p>';
  }