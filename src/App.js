import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
    .getElementById('product-form')
    .addEventListener("submit", (e) => {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        const product = new Product( { name, price, year } );

        const ui = new UI()

        if (name === '' || price === '' || year === '') {
            e.preventDefault();
            return ui.showMessage('Complete Fields Please', 'danger')
        }
        ui.addProduct(product);
        ui.resetform();
        ui.showMessage('Product Added Successfully', 'success');

        e.preventDefault();
    });

document
    .getElementById('product-list')
    .addEventListener("click", (e) => {
        const ui = new UI();
        ui.deleteProduct(e.target);
        if(e.target.name === 'delete') {
            ui.showMessage('Product Deleted Successfully', 'info');
        }
    });