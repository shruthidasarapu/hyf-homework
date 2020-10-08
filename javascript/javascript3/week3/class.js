function getCurrency() {
    return fetch('https://api.exchangerate-api.com/v4/latest/dkk')
         .then(response => response.json())
         
     }
  
 getCurrency()
 class Product {
     constructor(name, price) {
         this.name = name;
         this.price = price;
     }
    async  convertToCurrency(currency) {
         const rate = await getCurrency()
         return this.price * rate.rates[currency]
 
 
     }
 }
 async function getRate(){
     const plant = new Product('plant', 50);
      const money = await plant.convertToCurrency('USD')
     console.log(money)   
  }
  getRate()
 
 class ShoppingCart {
     constructor() {
         this.products = [];
 
     }
 
     addProduct(product) {
         // Implement functionality here
         return this.products.push(product);
     }
 
     removeProduct(product) {
         // Implement functionality here
         this.products = this.products.filter((productType) => productType.name !== product.name)
         
         return this.products;
     }
 
     searchProduct(productName) {
         // Implement functionality here
         this.products = this.products.filter((productType) => productType.name === productName.name)
         return this.products;
     }
 
     getTotal() {
         // Implement functionality here
         let total = 0;
         this.products.forEach((product) => 
         total += product.price
        )
        return total;
     }
 
     renderProducts() {
         // Implement functionality here
         const shoppingItems = document.getElementById('items')
         this.products.forEach((product) => {
            const li = document.createElement('li')
            li.innerHTML = `
            <div> product name: ${product.name} </div>
            <div> product price: ${product.price} </div>`
            shoppingItems.appendChild(li)
         })
         
     }
 
     getUser() {
         // Implement functionality here
         const promise = new Promise((resolve) => 
             resolve(fetch('https://jsonplaceholder.typicode.com/users/1')))
                 .then(response => response.json())
                 .then(data => {
                     console.log(data)
                     const name = document.getElementById('name')
                   const h2 = document.createElement('h2')
                    h2.innerHTML = `${data.name}`
                    name.appendChild(h2)
                 })
         }
 }
 const shoppingCart = new ShoppingCart();
 const flatscreen = new Product('flat-screen', 5000);
 const camera = new Product('camera', 4000);
 const hardDrive = new Product('hard-drive', 3000);

 shoppingCart.addProduct(flatscreen);
 shoppingCart.addProduct(camera);
 shoppingCart.addProduct(hardDrive);
 
 shoppingCart.removeProduct(flatscreen);

 shoppingCart.getUser();

 console.log(shoppingCart.getTotal());
 
 shoppingCart.renderProducts();