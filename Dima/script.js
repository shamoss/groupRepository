
class Product{
    imgLink;
    productName;
    productPrice;

    constructor(link,name,price){
        this.imgLink = link;
        this.productName = name;
        this.productPrice = price;
        const container = document.createElement("div");
        container.className = "card"
        container.innerHTML = `
        <img src = "${this.imgLink}">
        <h5>${this.productName}</h5>
        <h6>${this.productPrice}$</h6>
        <button>Купить</button>
        `
        document.body.append(container);
    }


}

new Product("https://kartinki.pics/uploads/posts/2022-03/thumbs/1646564796_1-kartinkin-net-p-kartinki-tsvetochkov-2.jpg", "cvetochek", 20);