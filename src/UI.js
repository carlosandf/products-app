// UI Constructor
export class UI {
    // Add a new Product
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body card-ind">
                    <div>
                        <strong>Product Name</strong>: ${product.name} 
                        <strong>Product Price</strong>: ${product.price} 
                        <strong>Product Year</strong>: ${product.year}
                    </div>
                    <button class="btn btn-danger" name="delete">Delete</button>
                </div>
            </div>   
        `;

        productList.appendChild(element);
    }

    resetform() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2 message`;
        div.appendChild(document.createTextNode(message));

        // Showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout( () => {
            document.querySelector('.alert').remove();
        }, 1800);

    }
}