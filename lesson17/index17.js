
const btnDown = document.querySelector('.download');
const divCards = document.querySelector('.cards');


btnDown.onclick = async () => {
	const response = await fetch('https://fakestoreapi.com/products');
	const products = await response.json();
	console.log(products);

products.forEach(product => { 
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    const img = document.createElement('img');
    img.classList.add('image');
    img.src = product.image;
    const h5 = document.createElement('h5');
    h5.classList.add('title');
    h5.innerText = product.title.slice(0, 30) + '...';
    const p1 = document.createElement('p'); 
    p1.classList.add('category');
    p1.innerText = product.category;
    p1.style.color = '#4b4453';
    const p2 = document.createElement('p');
    p2.classList.add('description');
    p2.innerText = product.description.slice(0, 50) + '...';
    p2.style.color = '#845ec2';
    const p3 = document.createElement('p');
    p3.classList.add('price');
    p3.innerText = `$${product.rating.count}`;
    p3.style.color = '#b0a8b9';
    const a = document.createElement('a');
    a.classList.add('toSee');
    a.innerText = 'See More';
    a.style.color = "#c34a36";

    

    a.onclick = () => {
        console.log(product.id, product.title);
        };
    
        divCard.append(img, h5, p1, p2, p3, a);
        divCards.appendChild(divCard);

});
};



