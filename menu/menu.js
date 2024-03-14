

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
if (selectedProduct === 'Fish taco') {
  product1_details(selectedProduct)

} else if (selectedProduct === 'seafood paella') {
  product2_details(selectedProduct)

} else if (selectedProduct === 'pokebowl') {
  product3_details(selectedProduct)
  
} else if (selectedProduct === 'shrimpscampi') {
  product4_details(selectedProduct)

}

else {
  productInfoContainer.innerHTML = '<p>No product information available.</p>';
}

function product1_details(selectedProduct) {
    productInfoContainer.innerHTML = `
    <h2>Product 1 Information</h2>
    <p>these are your the items for ${selectedProduct}.</p>
    <ul>
        <li>ingrediant 1</li>
        <li>ingrediant 2</li>
        <li>ingrediant 3</li>
        <li>ingrediant 4</li>
    </ul>
  `;
}

function product2_details(selectedProduct) {
    productInfoContainer.innerHTML = `
    <h2>Product 2 Information</h2>
    <p>these are your the items for ${selectedProduct}.</p>
    <ul>
        <li>ingrediant 1</li>
        <li>ingrediant 2</li>
        <li>ingrediant 3</li>
        <li>ingrediant 4</li>
        <li>ingrediant 5</li>
        <li>ingrediant 6</li>
        <li>ingrediant 7</li>
        <li>ingrediant 8</li>
    </ul>
  `;
}

function product3_details(selectedProduct) {
  productInfoContainer.innerHTML = `
  <h2>Product 1 Information</h2>
  <p>these are your the items for ${selectedProduct}.</p>
  <ul>
      <li>ingrediant 1</li>
      <li>ingrediant 2</li>
      <li>ingrediant 3</li>
      <li>ingrediant 4</li>
      <li>ingrediant 5</li>
      <li>ingrediant 6</li>
  </ul>
`;
}

function product4_details(selectedProduct) {
  productInfoContainer.innerHTML = `
  <h2>Product 1 Information</h2>
  <p>these are your the items for ${selectedProduct}.</p>
  <ul>
      <li>ingrediant 1</li>
      <li>ingrediant 2</li>
      <li>ingrediant 3</li>
      <li>ingrediant 4</li>
  </ul>
`;
}

function product5_details(selectedProduct) {
  productInfoContainer.innerHTML = `
  <h2>Product 1 Information</h2>
  <p>these are your the items for ${selectedProduct}.</p>
  <ul>
      <li>ingrediant 1</li>
      <li>ingrediant 2</li>
      <li>ingrediant 3</li>
      <li>ingrediant 4</li>
  </ul>
`;
}