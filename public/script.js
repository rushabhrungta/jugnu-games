const filterButtons = document.querySelectorAll('.filter-button');
const productList = document.getElementById('product-list');

// Select product items inside the productList only when needed
let productItems = productList.querySelectorAll('li');

filterButtons.forEach(button => {
    button.addEventListener('click', filterProducts);
});

function filterProducts(event) {
    // Remove the 'active' class from all buttons
    filterButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    event.target.classList.add('active');

    const selectedCategory = event.target.getAttribute('data-category');
    
    // Update the productItems selection here to ensure you get the current list
    productItems = productList.querySelectorAll('li');

    productItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (selectedCategory === 'all' || selectedCategory === itemCategory) {
            item.style.display = 'list-item';
        } else {
            item.style.display = 'none';
        }
    });
}
