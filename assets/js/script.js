document.querySelector(".container").addEventListener("submit", (e) => e.preventDefault(), false);

let result = false;

document.querySelector("button").addEventListener("click", () => {
    //check Name
    const name = document.querySelector("input[name=name]");
    checkNameValid(name);
    //check Email
    const email = document.querySelector("input[name=email]");
    checkEmailValid(email);

    //check re-typed Email
    const reEmail = document.querySelector("input[name=reEmail]");
    checkReEmailValid(email, reEmail);

    //check Phone
    const phone = document.querySelector("input[name=tel]");
    checkPhoneValid(phone);

    //check streetaddress
    const streetaddress = document.querySelector("textarea[name=street-address]");
    checkStreetValid(streetaddress);

    //check City
    const city = document.querySelector("input[name=city]");
    checkCityValid(city);

    //check Country
    const country = document.querySelector("input[name=country]");
    checkCityValid(country);

    // result ? alert("Your form info is valid and will be processed soon!")
    // : alert("Wrong Inputs");

})

function checkNameValid(name){
    const nameRegex = /^[A-Za-z\s]{5,30}$/;
    const nameResult = nameRegex.test(name.value);
    !nameResult ? name.classList.add("error") : name.classList.remove("error");
}

function checkPhoneValid(phone){
    const phoneRegex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/;
    const phoneResult = phoneRegex.test(phone.value);
    !phoneResult ? phone.classList.add("error") : phone.classList.remove("error");
}

function checkEmailValid(email){
    const emailRegex = /^[^0-9]\w*([\.-]\w+)?@\w+(\.(\w+-?\w+(\.\w+)?))$/;
    const emailResult = emailRegex.test(email.value); 
    //Match with:
    //a1603171@myy.haaga-helia.fi
    //khanh.2dbt@gmail.com
    //dkhanhnga@yahoo.com.vn
    !emailResult ? email.classList.add("error") : email.classList.remove("error");
}

function checkReEmailValid(email, reEmail){
    email.value !== reEmail.value || reEmail.value === '' ? reEmail.classList.add("error") : reEmail.classList.remove("error");
}

function checkStreetValid(street){
    const streetRegex = /^\w+(\s\w+)(\s\w+)?$/;
    //Match with: 
    //Kellosilta 2B
    //Vapaudenkatu 28 B
    const streetResult = streetRegex.test(streetRegex.innerText);
    !streetResult ?  street.classList.add("error-textarea") : street.classList.remove("error-textarea");
}

function checkCityValid(city){
    const cityRegex = /\w+/;
    const cityResult = cityRegex.test(city.value);
    !cityResult ? city.classList.add("error") : city.classList.remove("error");
}


