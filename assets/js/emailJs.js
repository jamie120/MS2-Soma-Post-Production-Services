/** Initialise emailJS */

(function(){
            emailjs.init("user_ay2av5pwPBy3wqNOgCBCc");
        })();


/** Function to send email template 'joinMailList', created using emailJs.
 * Once the email is sent, the modal containing the subscribe button is hidden and the success modal (#modalJoinSuccess) is displayed on the screen.
 */       
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

/** Function to send email template 'contactForm', created using emailJs.
 * Once the email is sent, a confirmation modal (#modalContactSubmit) is displayed on the screen.
 */       
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
    document.getElementById('name').value=''; 
    document.getElementById('email').value=''; 
    document.getElementById('subject').value='';
    document.getElementById('message').value=''; 
    return false;
    
}