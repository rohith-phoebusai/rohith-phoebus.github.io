const form = document.getElementById("form");
const formFields = form.querySelectorAll("input, select, textarea");
const submitButton = document.querySelector("button[type='submit']");

const url = new URL(window.location.href);

const userName = url.searchParams.get("name")
const userEmail = url.searchParams.get("email")
const userPhone = url.searchParams.get("phone")

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");

if (userName) {
    document.getElementById("name").value = userName;
    nameField.disabled = true
}
if (userEmail) {
    document.getElementById('email').value = userEmail
    emailField.disabled = true
}
if (userPhone) {
    document.getElementById('phone').value = userPhone
    phoneField.disabled = true
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission for demonstration
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const organization = document.getElementById("organization").value;
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
                    name,
                    phone,
                    email,
                    organization,
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
