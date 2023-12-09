class Product{
    imgLink;
    productName;
    productPrice;

constructor(imgLink, productName, productPrice){
    this.imgLink = imgLink;
    this.productName = productName;
    this.productPrice = productPrice;
    const container = document.createElement("div");
    container.innerHTML = 
    `
        <img src ="${this.imgLink}">
        <h4>${this.productName}</h4>
        <h5>${this.productPrice}</h5>
        <buttnon>Купить</button>
    `
    document.body.append(container);
}
}
new Product("link", "Nano machine son.....", 20035)