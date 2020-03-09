(() => {

    const customerImage = document.querySelector("#customer-img"),
        customerName = document.querySelector("#customer-name"),
        customerOpinion = document.querySelector("#customer-text"),
        buttons = document.querySelectorAll("#arrowButtons"),
        newCustomersArr = [],
        modalWindow = document.querySelector("#staticBackdrop"),
        form = document.querySelector("#form"),
        newOpinionButton = document.querySelector("#newOpinionBtn"),
        newCustomerPic = document.querySelector("#newCustPic"),
        newCustomerName = document.querySelector("#name"),
        newCustomerOpinion = document.querySelector("#textarea"),
        listenerTest = document.querySelector('#newCustPic');

    const customerArray = [
        ['1ok', 'Spongebob', 'The Krabby Patty is what ties us all together! Without it, there will be a complete breakdown of social order!'],
        ['2ok', 'PAtrick', 'Is mayonnaise an instrument?'],
        ['3ok', 'Squidward', 'I order the food, you cook the food, the customer gets the food. We do that for forty years and than we die.'],
        ['4ok', 'Mr Krab', 'We shall never deny a guest even the most ridiculous request.'],
    ];

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
            if (this._img != '') {
                let image = this._img;
                let regex = /blob[:]/i;

                if (image.match(regex)) {
                    return `${this._img}`
                } else {
                    return `img/${this._img}.jpg`
                };

            } else {
                console.error("No img")
            };
        }
    };

    const createCustomer = function(img, name, opinion) {

        let customer = new Customer(img, name, opinion);
        newCustomersArr.push(customer);

    };

    customerArray.forEach(function(arrEl) {
        createCustomer(arrEl[0], arrEl[1], arrEl[2])
    });

    let i = 0;

    const changeOpinion = (e) => {

        if (e.target.parentNode.classList.contains('nextBtn')) {
            i--
            if (i < 0) {
                i = newCustomersArr.length - 1
            }
            customerImage.src = newCustomersArr[i].picture;
            customerName.textContent = newCustomersArr[i].name;
            customerOpinion.textContent = newCustomersArr[i].opinion;
        } else {
            i++;
            if (i == newCustomersArr.length) {
                i = 0
            }
            customerImage.src = newCustomersArr[i].picture;
            customerName.textContent = newCustomersArr[i].name;
            customerOpinion.textContent = newCustomersArr[i].opinion;
        }
    };

    let fileUrl;

    listenerTest.addEventListener('change', (e) => {
        fileUrl = URL.createObjectURL(e.target.files[0]);
    });

    const addNewOpinion = (picurl) => {

        let picsUrl = picurl,
            newName = newCustomerName.value,
            newOpinion = newCustomerOpinion.value;

        createCustomer(picsUrl, newName, newOpinion);

        $(modalWindow).modal('hide');

        form.reset();
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
        addNewOpinion(fileUrl);
    });

})();