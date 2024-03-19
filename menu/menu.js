 
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
} 

 else if (selectedProduct === 'pokebowl') {
  product2_details(selectedProduct) 
}

 else if (selectedProduct === 'shrimpscampi') {
  product3_details(selectedProduct)
}

 else if (selectedProduct === 'seafood paella') {
  product4_details(selectedProduct)
 }

 else if (selectedProduct === 'pretzel crusted catfish') {
  product5_details(selectedProduct)
 
}

else if (selectedProduct === 'salmon kebabs') {
  product6_details(selectedProduct)
 
}

else if (selectedProduct === 'baked tilapia with parmesan crust') {
  product7_details(selectedProduct)
 
}

else if (selectedProduct === 'grilled butterfish and quinoa') {
  product8_details(selectedProduct)
 
}

else if (selectedProduct === 'sardines on toast') {
  product9_details(selectedProduct)
 
}

else if (selectedProduct === 'tilapa fish tacos') {
  product8_details(selectedProduct)
 
}

 
else {
  productInfoContainer.innerHTML = '<p>No product information available.</p>';
}
 
function product1_details(selectedProduct) {
    productInfoContainer.innerHTML = `
    <h2>Fish Taco Information</h2>
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
    <h2>Pokebowl Information</h2>
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
  <h2>Shrimpscampi Information</h2>
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
  <h2>Seafoood Paella Information</h2>
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
  <h2>Pretzel Crusted Catfish Information</h2>
  <p>these are your the items for ${selectedProduct}.</p>
  <ul>
      <li>ingrediant 1</li>
      <li>ingrediant 2</li>
      <li>ingrediant 3</li>
      <li>ingrediant 4</li>
  </ul>
`;
}

function product6_details(selectedProduct) {
  productInfoContainer.innerHTML = `
  <h2>Salmon Kebabs Information</h2>
  <p>these are your the items for ${selectedProduct}.</p>
  <ul>
      <li>ingrediant 1</li>
      <li>ingrediant 2</li>
      <li>ingrediant 3</li>
      <li>ingrediant 4</li>
  </ul>
`;
}

function product7_details(selectedProduct) {
  productInfoContainer.innerHTML = `
  <h2>Baked Tilapia with Parmesan Crust Information</h2>
  <p>these are your the items for ${selectedProduct}.</p>
  <ul>
      <li>ingrediant 1</li>
      <li>ingrediant 2</li>
      <li>ingrediant 3</li>
      <li>ingrediant 4</li>
  </ul>
`;
}

function product8_details(selectedProduct) {
  productInfoContainer.innerHTML = `
  <h2>Baked Tilapia with Parmesan Crust Information</h2>
  <p>these are your the items for ${selectedProduct}.</p>
  <ul>
      <li>ingrediant 1</li>
      <li>ingrediant 2</li>
      <li>ingrediant 3</li>
      <li>ingrediant 4</li>
  </ul>
`;
}

function product9_details(selectedProduct) {
  productInfoContainer.innerHTML = `
  <h2>Sardine on Toast</h2>
  <p>these are your the items for ${selectedProduct}.</p>
  <ul>
      <li>ingrediant 1</li>
      <li>ingrediant 2</li>
      <li>ingrediant 3</li>
      <li>ingrediant 4</li>
  </ul>
`;
}

function product10_details(selectedProduct) {
  productInfoContainer.innerHTML = `
  <h2>Tilapia Fish Tacos</h2>
  <p>these are your the items for ${selectedProduct}.</p>
  <ul>
      <li>ingrediant 1</li>
      <li>ingrediant 2</li>
      <li>ingrediant 3</li>
      <li>ingrediant 4</li>
  </ul>
`;
}


