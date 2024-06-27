document.addEventListener('DOMContentLoaded', function() {
   
    const products = document.querySelectorAll('.card'); 
    
    products.forEach(product => {
        
        const trashBtn = product.querySelector(".far.fa-times-circle");
        const totalPriceElement = document.querySelector('#Subtotal');
        const price = document.querySelector('.price');
        const quantityElement = document.querySelector('.article');
        let quantity = parseInt(quantityElement.textContent);
        
        if (trashBtn) {
           
            trashBtn.addEventListener('click', function() {
                
                product.remove(); 
            });
        } else {
            console.warn("Trash button not found in the product card:", product);
        }
        console.log(totalPriceElement)       
         function updateTotalPrice() {
             let total = 1;
            products.forEach(prod => {
                
                 total += quantity * price;
                 console.log(quantity)
                 console.log(price)
             });
            totalPriceElement.textContent = total.toFixed(2) + ' $';
     }

     quantityElement.addEventListener('change', function() {
                
        updateTotalPrice(); 
    });

    });
}); 
