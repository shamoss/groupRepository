class Product {
    imgLink;
    productName;
    productPrice;

    constructor(link, name, price){
        this.imgLink = link;
        this.productName = name;
        this.productPrice = price;

        const product = document.createElement("div");
        CSSContainerRule.className = "card"
        product.innerHTML =
        `
        <img src="${this.imgLink}">
        <h5>${this.productName}</h5>
        <h6>${this.productPrice}</h6>
        <button>Купить</button>
        `
        document.body.append(product);
        
    }
}
let a = new Product("https://cdnn21.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg", "name", 20);