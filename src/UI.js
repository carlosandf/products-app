// UI Constructor
export class UI {
    // Add a new Product
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name} 
                    <strong>Product Price</strong>: ${product.price} 
                    <strong>Product Year</strong>: ${product.year} 
                </div>
            </div>   
        `;

        productList.appendChild(element);
    }

    resetform() {
        document.getElementById('product-form').reset();
    }

    deleteProduct() {

    }

    showMessage() {

    }
}