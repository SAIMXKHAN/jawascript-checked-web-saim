let subscriptionLable = document.getElementById("subscription-lable");
let myCheckBox = document.getElementById("myCheckBox");
let submitBtn  = document.getElementById("mySubmit")

console.log(submitBtn)


console.log(myCheckBox);
console.log(subscriptionLable);

let hammad = "hammad"
console.log(hammad)


// continue to payment

function subscription(event){
  event.preventDefault();

  if (myCheckBox.checked) {
    console.log(myCheckBox);
    subscriptionLable.classList.remove("bg-red-600");
    subscriptionLable.classList.add("bg-gray-400");
    subResult.textContent = `You are Subscribed!`;
    subResult.classList.remove("text-red-500");
    subResult.classList.add("text-green-500");
    subResult.classList.remove("font-semibold");
    subResult.classList.add("font-bold");
  } else {
    subResult.textContent = `You are NOT Subscribed!`;
    subResult.classList.remove("text-green-500");
    subResult.classList.add("text-red-500");
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
}


// submitBtn.addEventListener("mouseleave",payment)

subscriptionLable.addEventListener("click",subscription)