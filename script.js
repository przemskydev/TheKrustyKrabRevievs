const customerImage = document.querySelector("#customer-img"),
    customerName = document.querySelector("#customer-name"),
    customerOpinion = document.querySelector("#customer-text"),
    buttons = document.querySelectorAll(".btn"),
    newCustomersArr = [];

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

// const patrickStar = new Customer(2, 'PAtrick', 'Is mayonnaise an instrument?');

const createCustomer = function(img, name, opinion) {

    let customer = new Customer(img, name, opinion);
    newCustomersArr.push(customer);

};

createCustomer(1, 'Spongebob', 'Hahahahahahahaha');
createCustomer(2, 'PAtrick', 'Is mayonnaise an instrument?');
createCustomer(3, 'Squidward', 'I order the food, you cook the food, the customer gets the food. We do that for forty years and than we die.');
createCustomer(4, 'Mr Krab', 'We shall never deny a guest even the most ridiculous request.');
createCustomer(5, 'Yellow fish', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
createCustomer(6, 'Weird fish', 'Aliquam lacus lectus, varius et mauris ut, ultricies scelerisque enim. Maecenas vehicula urna quis diam vehicula hendrerit.');
createCustomer(7, 'Disgusted fish', 'Vestibulum vel cursus arcu. Vestibulum laoreet velit ut tortor pulvinar semper');
createCustomer(8, 'Pulled-pants fish', 'Suspendisse potenti. Morbi porta elementum velit. Maecenas efficitur porttitor ornare.');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.parentNode.classList.contains('prevBtn')) {
            console.log('prev btn fn');
        } else {
            console.log('right btn fn');
        }
    })
})