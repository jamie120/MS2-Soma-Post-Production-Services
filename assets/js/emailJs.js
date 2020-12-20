(function(){
            emailjs.init("user_ay2av5pwPBy3wqNOgCBCc");
        })();

function sendMail(contactForm) {
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

function sendCopyMail(contactForm) {
    emailjs.send("gmail", "contactForm", {
        from_name: contactForm.name.value,
        from_email: contactForm.email.value,
        from_subject: contactForm.subject.value,
        from_message: contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    $('#modalContactSubmit').modal('show');
    return false;
}