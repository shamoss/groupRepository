class Product{
    imgLink;
    productName;
    productPrice;

    constructor(link, productName, productPrice ){
        this.imgLink = link;
        this.productName = productName;
        this.productPrice = productPrice;
        const asdfg = document.createElement('div');
        asdfg.className = "card";
        asdfg.innerHTML = 
        
        `
        <img src ="${this.imgLink}">
        <h4>Name: ${this.productName}</h4>
        <h4>Prise: ${this.productPrice}</h4>
        <button>Купить</button>
        `

    document.body.append(asdfg);
    }
}

new Product( "https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg","Ice-cream", 12000);