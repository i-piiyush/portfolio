const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

gsap.from(".upper .right a",{
    opacity:0,
    y: 40,
    delay:.2,
    stagger:0.2
})

const btn = document.querySelector(".btn")
console.log(btn);
function sendMessage() {
    // Get the value of the input field
    const message = document.getElementById('message').value;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = '+919478260725';

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open the WhatsApp URL in a new window/tab
    window.open(whatsappURL, '_blank');
}
btn.addEventListener("click",sendMessage)
document.getElementById("sendEmailButton").addEventListener("click", function() {
    var email = "piyushchhabra3578@gmail.com"; // Replace with your email
    var mailto_link = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email);
    
    window.open(mailto_link, '_blank');
});