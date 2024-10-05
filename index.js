let firstNameInput = document.getElementById("first-name");
let emailInput = document.getElementById("email");
let nameErrorText = document.getElementById("name-error");
let emailErrorText = document.getElementById("email-error");
let subscriptionLable = document.getElementById("subscription-lable");
let masterCardBtn = document.getElementById("masterCardBtn");
let payPalBtn = document.getElementById("payPalBtn");
let visaBtn = document.getElementById("visaBtn");
let mySubmit = document.getElementById("mySubmit");
let paymentResult = document.getElementById("paymentResult");
let subResult = document.getElementById("subResult");



let isSubscribed = false;

subscriptionLable.addEventListener("click", function () {
    if (!isSubscribed) {
        isSubscribed = true;
        subscriptionLable.innerHTML = '<i class="fas fa-bell mr-2"></i>Subscribed';
        subscriptionLable.style.backgroundColor = "gray";
        subscriptionLable.style.color = "white";
    } else {
        subResult.innerHTML = `<span class="text-red-500">You are already subscribed!</span>`;
    }
});

mySubmit.addEventListener("click", function (event) {
    event.preventDefault(); 

    
    nameErrorText.classList.add("hidden")
    emailErrorText.classList.add("hidden",)

    let hasError = false; 

    // Validate Name
    if (!firstNameInput.value) {
      nameErrorText.textContent = "Name is required!";
      nameErrorText.classList.remove("hidden")
        hasError = true; // Set error flag
    }
    if (!emailInput.value) {
      emailErrorText.textContent = "email is required!";
      emailErrorText.classList.remove("hidden")
        hasError = true; // Set error flag
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    if (emailInput.value && !emailPattern.test(emailInput.value)) {
        emailErrorText.textContent = "Email is invalid.";
        emailErrorText.classList.remove("hidden");
        hasError = true; // Set error flag
    }
   
    if (!isSubscribed) {
        paymentResult.innerHTML = `<span class="text-red-500">You are not subscribed!</span>`;
        return; 
    }

   
    if (visaBtn.checked) {
        paymentResult.innerHTML = `You are paying with Visa <i class="fas fa-check text-blue-500 ml-1"></i>`;
    } else if (masterCardBtn.checked) {
        paymentResult.innerHTML = `You are paying with MasterCard <i class="fas fa-check text-blue-500 ml-1"></i>`;
    } else if (payPalBtn.checked) {
        paymentResult.innerHTML = `You are paying with PayPal <i class="fas fa-check text-blue-500 ml-1"></i>`;
    } else {
        paymentResult.innerHTML = `<span class="text-red-500">First select the payment method!</span>`;
    }


});
