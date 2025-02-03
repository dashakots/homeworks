
const btnDown = document.querySelector('.download');
const divCards = document.querySelector('.cards');


btnDown.onclick = async () => {
	const response = await fetch('https://fakestoreapi.com/products');
	const products = await response.json();
	console.log(products);

products.forEach(product => { 
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    const img = document.createElement('image');
    img.classList.add('image');
    const h5 = document.createElement('h5');
    h5.classList.add('title');
    h5.innerText = product.title;
    const p1 = document.createElement('p'); 
    p1.createElement('category');
    p1.innerText = product.category;  
    const p2 = document.createElement('p');
    p2.createElement('description');
    p2.innerText = product.description;
    const p3 = document.createElement('p');
    p3.createElement('price');
    p3.innerText = `$${product.rating.count}`;
    const a = document.createElement('a');
    a.createElement('toSee');
    a.innerText = 'See More';

    btn.onclick = () => {
        console.log(console.log(product.id, product.title));
        };
        divCard.append(img, h5, p1, p2, p3, a);
        divCards.appendChild(divCard);

});
};

