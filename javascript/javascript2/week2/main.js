console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

  renderProducts(products);
 let filterInput = document.getElementById('filter');
 filterInput.addEventListener('keyup', filterNames);
    function filterNames(){
    productsUl.innerHTML = " ";
     let filterValues = document.getElementById('filter').value.toLowerCase();
     let filter = products.filter(item =>item.name.toLowerCase().includes(filterValues));
     renderProducts(filter);
     }

   let filterPrice = document.getElementById('price');
   filterPrice.addEventListener('keyup', maxPrice);
   function maxPrice() {
    productsUl.innerHTML = " ";
    let filteredPrice = document.getElementById('price').value;
    let price = products.filter(item => item.price <= filteredPrice);
    renderProducts(price); 
   }