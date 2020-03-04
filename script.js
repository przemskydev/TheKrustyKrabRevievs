const customerImage = document.querySelector("#customer-img"),
    customerName = document.querySelector("#customer-name"),
    customerOpinion = document.querySelector("#customer-text"),
    buttons = document.querySelectorAll("#arrowButtons"),
    newCustomersArr = [],
    modalWindow = document.querySelector("#staticBackdrop"),
    newOpinionButton = document.querySelector("#newOpinionBtn"),
    newCustomerPic = document.querySelector("#newCustPic"),
    newCustomerName = document.querySelector("#name"),
    newCustomerOpinion = document.querySelector("#textarea");

let i = 0;

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
        return `img/${this._img}.jpg`;
    }

};

const createCustomer = function(img, name, opinion) {

    let customer = new Customer(img, name, opinion);
    newCustomersArr.unshift(customer);

};

const customerArray = [
    ['1ok', 'Spongebob', 'The Krabby Patty is what ties us all together! Without it, there will be a complete breakdown of social order!'],
    ['2ok', 'PAtrick', 'Is mayonnaise an instrument?'],
    ['3ok', 'Squidward', 'I order the food, you cook the food, the customer gets the food. We do that for forty years and than we die.'],
    ['4ok', 'Mr Krab', 'We shall never deny a guest even the most ridiculous request.'],
    // [5, 'Yellow fish', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
    // [6, 'Weird fish', 'Aliquam lacus lectus, varius et mauris ut, ultricies scelerisque enim. Maecenas vehicula urna quis diam vehicula hendrerit.'],
    // [7, 'Disgusted fish', 'Vestibulum vel cursus arcu. Vestibulum laoreet velit ut tortor pulvinar semper'],
    // [8, 'Pulled-pants fish', 'Suspendisse potenti. Morbi porta elementum velit. Maecenas efficitur porttitor ornare.']
];

customerArray.forEach(function(arrEl) {
    createCustomer(arrEl[0], arrEl[1], arrEl[2])
});

const changeOpinion = (e) => {
    console.log(e.target.parentNode)
    if (e.target.parentNode.classList.contains('nextBtn')) {
        i++;
        if (i == newCustomersArr.length) {
            i = 0
        }
        customerImage.src = newCustomersArr[i].picture;
        customerName.textContent = newCustomersArr[i].name;
        customerOpinion.textContent = newCustomersArr[i].opinion;
    } else {
        i--
        if (i < 0) {
            i = newCustomersArr.length - 1
        }
        customerImage.src = newCustomersArr[i].picture;
        customerName.textContent = newCustomersArr[i].name;
        customerOpinion.textContent = newCustomersArr[i].opinion;
    }
};

const addNewOpinion = () => {

    let newPic = newCustomerPic.files[0].name,
        newName = newCustomerName.value,
        newOpinion = newCustomerOpinion.value,
        indexOfDot = newPic.indexOf('.'),
        fileName = newPic.slice(0, indexOfDot);

    createCustomer(fileName, newName, newOpinion);

    $(modalWindow).modal('hide')

};

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.parentNode.classList.contains('nextBtn')) {
            changeOpinion(e);
        } else {
            changeOpinion(e);
        }
    })
});

newOpinionButton.addEventListener('click', (e) => {
    addNewOpinion();
});