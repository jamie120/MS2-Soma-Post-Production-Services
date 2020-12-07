$(document).ready(function(){

    var timedMaster = 
    `<h1 class='text-box-style hide-on-append' id='how-long-timed-master'>Maybe you could benefit from our timed mastering service. How long is your mix/podcast?</h1>
    <input class='text-box-style hide-on-append' id='minutes-input' type='text' placeholder='length in minutes'>
    <button class='text-box-style hide-on-append' id='calc-timed-master'>CALCULATE</button>`

    var requireMixing = 
    `<div class="row row__A>
        <div class="col">
            <h1 class='text-box-style' id='happy-with-mix'>Are you happy with the mix-down of the track?</h1>
        </div>
    </div>
    <div class="row row__A>
        <div class="col">
            <button class='button-option text-box-style' id='yes-mix-btn'>YES</button>
            <button class='button-option text-box-style' id='no-mix-btn'>NO</button>
        </div>
    </div>`

    var standardMastering = 
    `<div class="row">
        <div class="col">
            <h2 class='text-box-style' id="standard-mastering-suggestion">Our Standard Mastering service may be suited to your project. </h2></div></div>
    <div class="row">
        <div class="col">
            <div id="standard-master-calc"></div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3 class='text-box-style' id="priority-master">Priority Service (3 day turnaround) </h3>
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center">
            <button class='button-option text-box-style' id='yes-priority-btn'>YES</button>
        </div>
        <div class="col d-flex justify-content-center">
            <button class='button-option text-box-style' id='no-priority-btn'>NO</button>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3 class='text-box-style' id="vinyl-master">Vinyl Master </h3>
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center">
            <button class='button-option text-box-style' id='yes-vinyl-btn'>YES</button>
        </div>
        <div class="col d-flex justify-content-center">
            <button class='button-option text-box-style' id='no-vinyl-btn'>NO</button>
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center">
            <a href="mastering.html"><button class='text-box-style'>GOTO OUR MASTERING SERVICES PAGE</button></a>
        </div>
    </div>`

    // https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript  -SUPPORT FOR SETTING DELAY TAKEN FROM HERE

    $("#dj-btn").click(function() {
        fadeIcons();
        var delayInMilliseconds = 1000; //1 second
        setTimeout(function() {
            $("#question").html("<h1>You have selected DJ MIX</h1>");
            $(".button-option").css("display","none");
            $("#service-text-container").append(timedMaster);
            fadeInAllAfterFirst();
        }, delayInMilliseconds);
    });

    $("#podcast-btn").click(function() {
        fadeIcons();
        var delayInMilliseconds = 1000; //1 second
        setTimeout(function() {
            $("#question").html("<h1>You have selected PODCAST</h1>");
            $(".button-option").css("display","none");
            $("#service-text-container").append(timedMaster);
            fadeInAllAfterFirst();
        }, delayInMilliseconds);
    });

    $(document).on('click', '#calc-timed-master', function(){
        var min = $("#minutes-input").val();
        var price = ((min/60) * 40).toFixed(2);
        $("#how-long-timed-master").css("display","none");
        $("#minutes-input").css("display","none");
        $("#calc-timed-master").css("display","none");
        $("#service-text-container").append(`<h2 class='text-box-style' >Your mastering is estimated to cost: £${price} based on the length indicated by you of ${min} minutes </h2>`);
    });

    $("#live-btn").click(function() {
        $("#question").html("<h1>You have selected LIVE RECORDING</h1>");
        $(".button-option").css("display","none")
        $(".row__A").css("display","none");
        $(".row__B").css("display","none");
        $("#service-finder-content").append(requireMixing);
    });

    $("#electronic-btn").click(function() {
        $("#question").html("<h1>You have selected ELECTRONIC MUSIC</h1>");
        $(".button-option").css("display","none");
        $(".row__A").css("display","none");
        $(".row__B").css("display","none");
        $("#service-finder-content").append(requireMixing);
    });

    $(document).on('click', '#yes-mix-btn', function(){
        $(".button-option").css("display","none");
        $("#happy-with-mix").css("display","none");
        $("#service-text-container").append(`<h2 class='text-box-style' id="stem-mastering-suggestion">Are you interested in stem mastering? This can provide more precise mastering and tonal balance control?</h2>`);
        $("#service-text-container").append("<button class='button-option text-box-style' id='yes-stem-btn'>YES</button>");
        $("#service-text-container").append("<button class='button-option text-box-style' id='no-stem-btn'>NO</button>");
    });

    $(document).on('click', '#no-mix-btn', function(){
        $(".button-option").css("display","none");
        $("#happy-with-mix").css("display","none");
        $("#service-text-container").append(`<h2 class='text-box-style' id="mix-service-suggestion">Maybe you could benefit from our mixing services. How many tracks does your track have?</h2>`);
        $("#service-text-container").append(
            "<label class='text-box-style' id='amount-tracks-label' for='amount-tracks'>Choose amount of tracks:</label> \
            <select class='text-box-style' id='amount-tracks' name='tracks'> \
                <option value='1-10'>1-10</option> \
                <option value='11-20'>11-20</option> \
                <option value='21-30'>21-30</option> \
                <option value='31-40'>31-40</option> \
                <option value='41-50'>31-40</option> \
                <option value='51-60'>31-40</option> \
            </select>"); 
        $("#service-text-container").append("<button class='text-box-style' id='calc-mix'>CALCULATE</button>");

    });

    $(document).on('click', '#yes-stem-btn', function(){
        $(".button-option").css("display","none");
        $("#stem-mastering-suggestion").css("display","none");
        $("#service-text-container").append("<h2 class='text-box-style' id='how-many-stems'>How many stems will you provide for mastering?</h2>");
        $("#service-text-container").append(
            "<label class='text-box-style' id='amount-stems-label' for='amount-stems'>Choose amount of tracks:</label> \
            <select class='text-box-style' id='amount-stems' name='tracks'> \
                <option value='1-10'>1-10</option> \
                <option value='11-20'>11-20</option> \
                <option value='21-30'>21-30</option> \
                <option value='31-40'>31-40</option> \
                <option value='41-50'>31-40</option> \
                <option value='51-60'>31-40</option> \
            </select>");
        $("#service-text-container").append("<button class='text-box-style' id='calc-stem-master'>CALCULATE</button>");
    });

    $(document).on('click', '#no-stem-btn', function(){
        $(".button-option").css("display","none");
        $("#stem-mastering-suggestion").css("display","none");
        $("#question").css("display","none");
        $("#service-finder-content").append(standardMastering);
        checkSelector(vinyl, priority)
    });

    $(document).on('click', '#calc-stem-master', function(){
        alert("pressed")
        var tracks = $("#tracks").val();
        var price = ((tracks * 40).toFixed(2));
        $("#how-many-stems").css("display","none");
        $("#amount-stems").css("display","none");
        $("#amount-stems-label").css("display","none");
        $("#calc-stem-master").css("display","none");
        $("#service-text-container").append(`<h2 class='text-box-style' >You mastering is estimated to cost: £${price} based on ${tracks} number of stems provided by you </h2>`);
    });

    $(document).on('click', '#calc-mix', function(){
        alert("pressed")
        var tracks = $("#tracks").val();
        var price = ((tracks * 40).toFixed(2));
        $("#mix-service-suggestion").css("display","none");
        $("#amount-tracks").css("display","none");
        $("#amount-tracks-label").css("display","none");
        $("#calc-mix").css("display","none");
        $("#service-text-container").append(`<h2 class='text-box-style' >You mixing is estimated to cost: £${price} based on ${tracks} number of tracks provided by you </h2>`);
    });

    //CALCULATE MASTER LOGIC //

    var vinyl = false
    var priority = false
    var price = 25

    $(document).on('click', '#yes-vinyl-btn', function(){
        vinyl = true
        $("#standard-mastering-calc").html("");
        checkSelector(vinyl, priority)
    });

    $(document).on('click', '#no-vinyl-btn', function(){
        vinyl = false
        $("#standard-mastering-calc").html("");
        checkSelector(vinyl, priority)
    });

    $(document).on('click', '#yes-priority-btn', function(){
        priority = true
        checkSelector(vinyl, priority)
    });

    $(document).on('click', '#no-priority-btn', function(){
        priority = false
        checkSelector(vinyl, priority)
    });
    
    function checkSelector(vinyl, priority) {
        if (vinyl == true && priority == true) {
            $("#standard-master-calc").html("")
            $("#standard-master-calc").append(`<h2 class='text-box-style' id="standard-mastering-calc" >You mastering is estimated to cost: £${price + 30}. This price is per track, with vinyl and priority services attached </h2>`);
        } else if (vinyl == true && priority == false) {
            $("#standard-master-calc").html("")
            $("#standard-master-calc").append(`<h2 class='text-box-style' id="standard-mastering-calc" >You mastering is estimated to cost: £${price + 5}. This price is per track, with the vinyl mastering service. </h2>`);
        } else if (vinyl == false && priority == true) {
            $("#standard-master-calc").html("")
            $("#standard-master-calc").append(`<h2 class='text-box-style' id="standard-mastering-calc" >You mastering is estimated to cost: £${price + 25}. This price is per track, with the priority mastering service. </h2>`);
        } else {
            $("#standard-master-calc").html("")
            $("#standard-master-calc").append(`<h2 class='text-box-style' id="standard-mastering-calc" >You mastering is estimated to cost: £${price}. You can add 'vinyl" & 'priority' services by selecting them below for an updated estimate.`);
        }
    };

    //ANIMATION LOGIC //

    function fadeInAllAfterFirst() {
        $( ".hide-on-append:hidden" ).first().fadeIn( 800, function() {
            $( ".hide-on-append:hidden" ).fadeIn( 600 );
        });
    }

    function fadeIcons() {
        $(".row__A").fadeToggle( 1000, "linear" );
        $(".row__B").fadeToggle( 1000, "linear" );
    }

});


