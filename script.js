function sendEmail() {
    if(validateForm()){
    Email.send({
        SecureToken: "c97e579d-f879-4260-908a-8d96f6abcab7",
        To: 'vishnuspire@gmail.com',
        From: 'noreplyvishnuspire@gmail.com',
        Subject: "New Message to Vishnuspire",
        Body: "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Phone: " + document.getElementById("phone").value + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Successfully sent."),
        document.getElementById("temp").style.display = "block",
        document.getElementById("contact").style.display = "none"
    );
    }
}

function sendInternship() {
    if(validateForm()){
        Email.send({
            SecureToken: "c97e579d-f879-4260-908a-8d96f6abcab7",
            To: 'vishnuspire@gmail.com',
            From: 'noreplyvishnuspire@gmail.com',
            Subject: "Application for Internship",
            Body: "Name: " + document.getElementById("name1").value + "<br> Email: " + document.getElementById("email1").value + "<br> Phone: " + document.getElementById("phone1").value
            +document.getElementById("resume").value
        }).then(
            message => alert(message)
        );
    }
}

function displayChange() {
    document.getElementById("temp").style.display = "none";
    document.getElementById("contact").style.display = "block";
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
}

function validateForm() {
    const email = document.forms["myForm"]["email"].value;
    const phone = document.forms["myForm"]["phone"].value;

    if (!validateEmail(email)) {
        alert("Invalid email format");
        return false;
    }

    if (!validatePhone(phone)) {
        alert("Invalid phone number format");
        return false;
    }

    return true;
}

const header = document.querySelector('.header');
const scrollLine = document.querySelector('.line-move');

const windowHeight = window.innerHeight;
const docHeight = document.documentElement.scrollHeight - windowHeight;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollPercent = scrollTop / docHeight * 100;
  scrollLine.style.width = scrollPercent + '%';
});
