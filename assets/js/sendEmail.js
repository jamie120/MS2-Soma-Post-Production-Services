console.log("Helo")

function sendMail(contactForm) {
    console.log(contactForm.email.value)
    emailjs.send("gmail", "joinMailList", {
        from_email: contactForm.email.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    $('#modalJoinMail').modal('hide');
    $('#modalJoinSuccess').modal('show');
    return false;
}
