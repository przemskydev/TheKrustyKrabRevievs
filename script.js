const customerImage = document.querySelector("#customer-img"),
    customerName = document.querySelector("#customer-name"),
    customerOpinion = document.querySelector("#customer-text"),
    buttons = document.querySelectorAll(".btn");

class Customer {
    constructor(img, name, opinion) {
        this._img = img;
        this._name = name;
        this._opinion = opinion;
    }

    get name() {
        return this._name;
    }

    get opinion() {
        return this._opinion;
    }

    get picture() {
        return `"img/${this._img}.jpg"`;
    }
};

const patrickStar = new Customer(2, 'PAtrick', 'Is mayonnaise an instrument?');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('hej hej')
    })
})