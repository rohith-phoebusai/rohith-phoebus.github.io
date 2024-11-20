const form = document.getElementById("form");
const formFields = form.querySelectorAll("input, select, textarea");
const submitButton = document.querySelector("button[type='submit']");

const url = new URL(window.location.href);

const firstName = url.searchParams.get("firstName")
const lastName = url.searchParams.get("lastName")
const userEmail = url.searchParams.get("email")
const product = url.searchParams.get("product")
// console.log(`${firstName} ${lastName} ${userEmail}`)

const firstNameField = document.getElementById("first-name");
const lastNameField = document.getElementById("last-name");
const emailField = document.getElementById("email");
const productField = document.getElementById("product")

if (firstName) {
    firstNameField.value = firstName;
    firstNameField.disabled = true
}
if (lastName) {
    lastNameField.value = lastName
    lastNameField.disabled = true
}
if (userEmail) {
    emailField.value = userEmail
    emailField.disabled = true
}
if(product) {
    productField.value = product
    productField.disabled = true
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission for demonstration
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    // const organization = document.getElementById("organization").value;
    const product = document.getElementById("product").value;
    const business = document.getElementById("business").value;
    const subject = document.getElementById("subject").value;
    const description = document.getElementById("description").value;

    
    window.parent.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
            event: {
                code: "userdetails",
                data: {
                    firstName,
                    lastName,
                    email,
                    product,
                    business,
                    subject,
                    description
                }
            }
        })
    }), '*');
    console.log('event submitted')

    formFields.forEach((field) => {
        field.disabled = true;
    });
    submitButton.disabled = true;
    // alert(`${name} ${email} ${phone} ${organization} ${product} ${business} ${subject} ${description}`);
});
