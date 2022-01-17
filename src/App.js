import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
    .getElementById('product-form')
    .addEventListener("submit", (e) => {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        const product = new Product(name, price, year);

        const ui = new UI()
        ui.addProduct(product)

        e.preventDefault();
    });