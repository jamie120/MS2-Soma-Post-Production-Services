"use strict";

$(document).ready(function () {

  /** Const numbers  */
  const DELAY_400 = 400;
  const DELAY_600 = 600;
  const DELAY_800 = 800;
  const DELAY_1000 = 1000;

  /** SUPPORT TAKEN FROM THIS THREAD, TO LEARN THE BEST APPROACH WHEN APPENDING HTML TO THE PAGE USING JQUERY
   * https://stackoverflow.com/questions/10759426/appending-large-block-of-html-with-append
   
   *The following site was used for reference on template literals//
   *https://flaviocopes.com/javascript-template-literals/

   *Babel https://babeljs.io/ was used with template literal plugin to parse code, to increase compatibility with IE 11
   */
 
  var timedMaster = "<div class=\"row\">\n        <div class=\"col\">\n   <h1 class='text-box-style hide-on-append' id='how-long-timed-master'>Maybe you could benefit from our timed mastering service. How long is your mix/podcast?</h1>\n      </div>\n     </div>\n         <div class=\"row\">\n            <div class=\"col d-flex justify-content-center\">\n  <input class='text-box-style hide-on-append' id='minutes-input' type='text' placeholder='length in minutes'>\n  </div>\n        </div>\n      <div class=\"row\">\n      <div class=\"col d-flex justify-content-center\">\n   <button class='service-btn hide-on-append hover-blue' id='calc-timed-master'>CALCULATE</button>\n  <button type=\"button\" class='service-btn hover-blue' data-toggle=\"modal\" data-target=\"#modalReset\">RESET CHOICES</button>\n  </div>\n        </div>\n       <div class=\"row\">\n            <div class=\"col d-flex justify-content-center\">\n           <a href=\"rates.html\"><p class='text-link'>GOTO OUR RATES PAGE TO SEE MORE ABOUT TIMED MASTERING</p></a>\n            </div>\n        </div>\n  ";
  var requireMixing = "<div class=\"d-flex justify-content-center row row__A>\n        <div class=\"col\">\n            <h1 class='text-box-style hide-on-append' id='happy-with-mix'>Are you happy with the mix-down of the track?</h1>\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-center row row__A>\n        <div class=\"col\">\n            <button class='button-option text-box-style hide-on-append hover-blue' id='yes-mix-btn'>YES</button>\n            <button class='button-option text-box-style hide-on-append hover-blue' id='no-mix-btn'>NO</button>\n        </div>\n    </div>";
  var standardMastering = "<div class=\"row\">\n        <div class=\"col\">\n            <h2 class='text-box-style' id=\"standard-mastering-suggestion\">Our Standard Mastering service may be suited to your project. </h2></div></div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div id=\"standard-master-calc\"></div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3 class='text-box-style' id=\"priority-master\">Priority Service (3 day turnaround) </h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n            <button class='button-option text-box-style hover-blue' id='yes-priority-btn'>YES</button>\n        </div>\n        <div class=\"col d-flex justify-content-center\">\n            <button class='button-option text-box-style hover-blue' id='no-priority-btn'>NO</button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3 class='text-box-style' id=\"vinyl-master\">Vinyl Master </h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n            <button class='button-option text-box-style hover-blue' id='yes-vinyl-btn'>YES</button>\n        </div>\n        <div class=\"col d-flex justify-content-center\">\n            <button class='button-option text-box-style hover-blue' id='no-vinyl-btn'>NO</button>\n        </div>\n    </div>\n      <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n     <button type=\"button\" class='service-btn hover-blue' data-toggle=\"modal\" data-target=\"#modalReset\">RESET CHOICES</button>\n\n     </div>\n   </div>\n   <div class=\"row\">\n     <div class=\"col d-flex justify-content-center\">\n       <a href=\"mastering.html\"><p class='text-link'>GOTO OUR MASTERING SERVICES PAGE</p></a>\n        </div>\n    </div>";
  var calcStems = "<div class=\"row\">\n        <div class=\"col\">\n            <h2 class='text-box-style hide-on-append layer-3-q' id='how-many-stems'>How many stems will you provide for mastering?</h2>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n            <label class='service-btn hide-on-append layer-3-q' id='amount-stems-label' for='amount-stems'>Choose amount of tracks:</label>  \n            <select class='service-btn hide-on-append layer-3-q' id='amount-stems' name='tracks'>\n                <option value='1-4'>1-4</option>\n                <option value='5-8'>5-8</option>\n                <option value='9-12'>9-12</option>\n                <option value='1-4-V'>1-4 Vinyl Master</option>\n                <option value='5-8-V'>5-8 Vinyl Master</option>\n                <option value='9-12-V'>9-12 Vinyl Master</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n            <div id=\"stem-calc-text\"></div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n            <button class='service-btn hide-on-append layer-3-q hover-blue' id='calc-stem-master'>CALCULATE</button>\n   <button type=\"button\" class='service-btn hover-blue' data-toggle=\"modal\" data-target=\"#modalReset\">RESET CHOICES</button>\n\n     </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n            <a href=\"stem-mastering.html\"><p class='text-link'>GOTO OUR STEM-MASTERING SERVICES PAGE</p></a>\n        </div>\n    </div>";
  var calcMix = "<div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n            <h2 class='text-box-style hide-on-append layer-2-q' id=\"mix-service-suggestion\">Maybe you could benefit from our mixing services. How many tracks does your track have?</h2>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">   \n            <label class='service-btn hide-on-append layer-2-q' id='amount-tracks-label' for='amount-tracks'>Choose amount of tracks:</label>\n            <select class='service-btn hide-on-append layer-2-q' id='amount-tracks' name='tracks'>\n                <option value='1-10'>1-10</option>\n                <option value='11-20'>11-20</option>\n                <option value='21-30'>21-30</option>\n                <option value='31-40'>31-40</option>\n                <option value='41-50'>41-50</option>\n                <option value='51-60'>51-60</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n            <div id=\"mix-calc-text\"></div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n            <button class='hide-on-append service-btn layer-2-q hover-blue' id='calc-mix'>CALCULATE</button>\n            <button type=\"button\" class='service-btn hover-blue' data-toggle=\"modal\" data-target=\"#modalReset\">RESET CHOICES</button>\n\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col d-flex justify-content-center\">\n            <a href=\"mixing.html\"><p class='text-link'>GOTO OUR MIXING SERVICES PAGE</p></a>\n        </div>\n    </div>";   
  // https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript  -SUPPORT FOR SETTING DELAY TAKEN FROM HERE//

  /** INITIAL USER SELECTION LOGIC 
   * Four code blocks, each serves an intitial user choice.
   * Content is appended and hidden from the page, depending on user choice.
   * JQuery fade toggle is used to create pleasing effect.
   * Functions are used to add staggered animation and flow to how the content is displayed, this are referenced from line 313 onwards.
  */

  $("#dj-btn").click(function () {
    fadeIcons();

    setTimeout(function () {
      $("#question").text("You have selected DJ Mix");
      $(".button-option").css("display", "none");
      $("#refresh-btn").fadeToggle(800, "linear");
      $("#service-finder-content").append(timedMaster);
      fadeInAllAfterFirst();
    }, DELAY_1000);
  });

  $("#podcast-btn").click(function () {
    fadeIcons();

    setTimeout(function () {
      $("#question").text("You have selected Podcast");
      $(".button-option").css("display", "none");
      $("#refresh-btn").fadeToggle(800, "linear");
      $("#service-finder-content").append(timedMaster);
      fadeInAllAfterFirst();
    }, DELAY_1000);
  });

  $("#live-btn").click(function () {
    fadeIcons();

    setTimeout(function () {
      $("#question").text("You have selected Live Recording");
      $(".button-option").css("display", "none");
      $("#service-finder-content").append(requireMixing);
      fadeInAllAfterFirst();
    }, DELAY_1000);
  });

  $("#electronic-btn").click(function () {
    fadeIcons();
  
    setTimeout(function () {
      $("#question").text("You have selected Electronic Music");
      $(".button-option").css("display", "none");
      $(".row__A").css("display", "none");
      $(".row__B").css("display", "none");
      $("#service-finder-content").append(requireMixing);
      fadeInAllAfterFirst();
    }, DELAY_1000);
  }); 
  
  /** USER CHOICES - STEM & MIXING 
   * Four code blocks, targeting 'yes' and 'no' buttons for questions posed to users. 
   * Content is appended and hidden from the page, depending on user choice.
   * JQuery fade toggle is used in combination with setTimeout function to create pleasing effect.
   * Functions are used to add staggered animation and flow to how the content is displayed, this are referenced from line 313 onwards.
  */

  $(document).on('click', '#yes-mix-btn', function () {
    $(".button-option").fadeToggle(800, "linear");
    $("#happy-with-mix").fadeToggle(800, "linear");
    setTimeout(function () {
      $("#service-text-container").append("<h2 class='text-box-style hide-on-append layer-2-q' id=\"stem-mastering-suggestion\">Are you interested in stem mastering? This can provide more precise mastering and tonal balance control?</h2>");
      $("#service-text-container").append("<button class='button-option hide-on-append hover-blue layer-2-q text-box-style' id='yes-stem-btn'>YES</button>");
      $("#service-text-container").append("<button class='button-option hide-on-append hover-blue layer-2-q text-box-style' id='no-stem-btn'>NO</button>");
      fadeInAllAfterFirstSecond();
    }, DELAY_400);
  });

  $(document).on('click', '#no-mix-btn', function () {
    $("#yes-mix-btn").fadeToggle(600, "linear");
    $("#no-mix-btn").fadeToggle(600, "linear");
    $("#happy-with-mix").fadeToggle(600, "linear");
    $("#refresh-btn").fadeToggle(800, "linear");
    setTimeout(function () {
      $("#service-finder-content").append(calcMix);
      fadeInAllAfterFirstSecond();
    }, DELAY_400);
  });

  $(document).on('click', '#yes-stem-btn', function () {
    $("#yes-stem-btn").fadeToggle(600, "linear");
    $("#no-stem-btn").fadeToggle(600, "linear");
    $("#stem-mastering-suggestion").fadeToggle(600, "linear");
    $("#refresh-btn").fadeToggle(800, "linear");
    setTimeout(function () {
      $("#service-finder-content").append(calcStems);
      fadeInAllAfterFirstThird();
    }, DELAY_1000);
  });

  $(document).on('click', '#no-stem-btn', function () {
    $(".button-option").css("display", "none");
    $("#stem-mastering-suggestion").css("display", "none");
    $("#refresh-btn").fadeToggle(800, "linear");
    $("#service-finder-content").append(standardMastering);
    checkSelector(vinyl, priority);
  }); 
  
  /** CALCULATION BUTTONS 
   * Three calculations, each for a difference calculate button.
   * Calculation functions are called for 'stem' and 'mix' pricing.
   * User input is captured in variable.
   * Calculation is made and saved to new variable (price)
   * Price is appened to HTML, to display to user on the page.
   */


   /** Calculation function 'calculateStemPrice' is called to calculate pricing. ref line 193 */

   $(document).on('click', '#calc-stem-master', function () {
    var choice = $("#amount-stems").val();
    var price = 40;
    $("#calc-stem-master").text("RECALCULATE");
    setTimeout(function () {
      calculateStemPrice(choice, price);
    }, DELAY_600);
  });

    /** Calculation function 'calculateMixPrice' is called to calculate pricing. ref line: 174 */

  $(document).on('click', '#calc-mix', function () {
    var choice = $("#amount-tracks").val();
    var price = 60;
    $("#calc-mix").text("RECALCULATE");
    setTimeout(function () {
      calculateMixPrice(choice, price);
    }, DELAY_600);
  }); 

  $(document).on('click', '#calc-timed-master', function () {
    var min = $("#minutes-input").val();
    var price = (min / 60 * 40).toFixed(0);
    $("#how-long-timed-master").css("display", "none");
    $("#minutes-input").css("display", "none");
    $("#calc-timed-master").css("display", "none");
    $("#service-text-container").append("<h2 class='text-box-style' >Your mastering is estimated to cost: \xA3".concat(price, " based on a length of ").concat(min, " minutes. </h2>"));
  });

  /** CALCULATE MIX LOGIC */

  function calculateMixPrice(choice, price) {
    if (choice == "1-10") {
      $("#mix-calc-text").html("<h2 class='text-box-style' id=\"mix-calc-text\" >You mixing is estimated to cost: \xA3".concat(price, " based on ").concat(choice, " number of tracks provided by you </h2>"));
    } else if (choice == "11-20") {
      $("#mix-calc-text").html("<h2 class='text-box-style' id=\"mix-calc-text\" >You mixing is estimated to cost: \xA3".concat(price + 20, " based on ").concat(choice, " number of tracks provided by you </h2>"));
    } else if (choice == "21-30") {
      $("#mix-calc-text").html("<h2 class='text-box-style' id=\"mix-calc-text\" >You mixing is estimated to cost: \xA3".concat(price + 40, " based on ").concat(choice, " number of tracks provided by you </h2>"));
    } else if (choice == "31-40") {
      $("#mix-calc-text").html("<h2 class='text-box-style' id=\"mix-calc-text\" >You mixing is estimated to cost: \xA3".concat(price + 60, " based on ").concat(choice, " number of tracks provided by you </h2>"));
    } else if (choice == "41-50") {
      $("#mix-calc-text").html("<h2 class='text-box-style' id=\"mix-calc-text\" >You mixing is estimated to cost: \xA3".concat(price + 80, " based on ").concat(choice, " number of tracks provided by you </h2>"));
    } else {
      $("#mix-calc-text").html("<h2 class='text-box-style' id=\"mix-calc-text\" >You mixing is estimated to cost: \xA3".concat(price + 100, " based on ").concat(choice, " number of tracks provided by you </h2>"));
    }
  } 

  /** CALCULATE STEM MASTER LOGIC */


  function calculateStemPrice(choice, price) {
    if (choice == "1-4-V" || choice == "5-8-V" || choice == "9-12-V") {
      if (choice == "1-4-V") {
        $("#stem-calc-text").html("<h2 class='text-box-style' id=\"stem-calc-text\" >Your mastering is estimated to cost: \xA3".concat(price, " based on 1-4 stems provided by you, with Vinyl Services attached </h2>"));
      } else if (choice == "5-8-V") {
        $("#stem-calc-text").html("<h2 class='text-box-style' id=\"stem-calc-text\" >Your mastering is estimated to cost: \xA3".concat(price + 10, " based 5-8 stems provided by you, with Vinyl Services attached </h2>"));
      } else {
        $("#stem-calc-text").html("<h2 class='text-box-style' id=\"stem-calc-text\" >Your mastering is estimated to cost: \xA3".concat(price + 20, " based on 9-12 stems provided by you, with Vinyl Services attached </h2>"));
      }
    } else if (choice == "1-4") {
      $("#stem-calc-text").html("<h2 class='text-box-style' id=\"stem-calc-text\" >You mastering is estimated to cost: \xA3".concat(price, " based on ").concat(choice, " number of stems provided by you </h2>"));
    } else if (choice == "5-8") {
      $("#stem-calc-text").html("<h2 class='text-box-style' id=\"stem-calc-text\" >You mastering is estimated to cost: \xA3".concat(price + 10, " based on ").concat(choice, " number of stems provided by you </h2>"));
    } else {
      $("#stem-calc-text").html("<h2 class='text-box-style' id=\"stem-calc-text\" >You mastering is estimated to cost: \xA3".concat(price + 20, " based on ").concat(choice, " number of stems provided by you </h2>"));
    }
  } 
  
  /** CALCULATE STANDARD MASTER LOGIC 
   * Separate code block for standard mastering, due to increased complexity.
   * User can toggle two services in the page, to amend price (priority, vinyl).
   * User choices are captured in variables as Booleans. These are then used to toggle style classes, append text on the page accordingly.
  */
  //https://stackoverflow.com/questions/5783280/jquery-check-if-div-with-certain-class-name-exists//


  var vinyl = false;
  var priority = false;

  /** Base Mastering Price */
  const price = 25;

  /** Vinyl Service Buttons 
   * Styles are toggled to provide visual feedback to the user, which service is active.
  */

  $(document).on('click', '#yes-vinyl-btn', function () {
    vinyl = true;
    $("#standard-mastering-calc").html("");
    checkSelector(vinyl, priority);
    $('#yes-vinyl-btn').toggleClass("text-box-style").toggleClass("text-box-active");
    $('#no-vinyl-btn').toggleClass(function () {
      if ($(this).hasClass('text-box-active')) {
        $('#no-vinyl-btn').toggleClass("text-box-style");
        return "text-box-active";
      } else {
        return "";
      }
    });
  });

  $(document).on('click', '#no-vinyl-btn', function () {
    vinyl = false;
    $("#standard-mastering-calc").html("");
    checkSelector(vinyl, priority);
    $('#no-vinyl-btn').toggleClass("text-box-style").toggleClass("text-box-active");
    $('#yes-vinyl-btn').toggleClass(function () {
      if ($(this).hasClass('text-box-active')) {
        $('#yes-vinyl-btn').toggleClass("text-box-style");
        return "text-box-active";
      } else {
        return "";
      }
    });
  });

  /** Priority Service Buttons 
   * Styles are toggled to provide visual feedback to the user, which service is active.
  */

  $(document).on('click', '#yes-priority-btn', function () {
    priority = true;
    checkSelector(vinyl, priority);
    $('#yes-priority-btn').toggleClass("text-box-style").toggleClass("text-box-active");
    $('#no-priority-btn').toggleClass(function () {
      if ($(this).hasClass('text-box-active')) {
        $('#no-priority-btn').toggleClass("text-box-style");
        return "text-box-active";
      } else {
        return "";
      }
    });
  });
  $(document).on('click', '#no-priority-btn', function () {
    priority = false;
    checkSelector(vinyl, priority);
    $('#no-priority-btn').toggleClass("text-box-style").toggleClass("text-box-active");
    $('#yes-priority-btn').toggleClass(function () {
      if ($(this).hasClass('text-box-active')) {
        $('#yes-priority-btn').toggleClass("text-box-style");
        return "text-box-active";
      } else {
        return "";
      }
    });
  });

  /** Price calculation for Standard mastering
   * Content is appended, based on users choice of 'priority' & 'vinyl' services.
   * Variables containing Booleans are used to identify user input.
  */

  function checkSelector(vinyl, priority) {
    if (vinyl == true && priority == true) {
      $("#standard-master-calc").html("");
      $("#standard-master-calc").append("<h2 class='text-box-style' id=\"standard-mastering-calc\" >You mastering is estimated to cost: \xA3".concat(price + 30, ". This price is per track, with vinyl and priority services attached </h2>"));
    } else if (vinyl == true && priority == false) {
      $("#standard-master-calc").html("");
      $("#standard-master-calc").append("<h2 class='text-box-style' id=\"standard-mastering-calc\" >You mastering is estimated to cost: \xA3".concat(price + 5, ". This price is per track, with the vinyl mastering service. </h2>"));
    } else if (vinyl == false && priority == true) {
      $("#standard-master-calc").html("");
      $("#standard-master-calc").append("<h2 class='text-box-style' id=\"standard-mastering-calc\" >You mastering is estimated to cost: \xA3".concat(price + 25, ". This price is per track, with the priority mastering service. </h2>"));
    } else {
      $("#standard-master-calc").html("");
      $("#standard-master-calc").append("<h2 class='text-box-style' id=\"standard-mastering-calc\" >You mastering is estimated to cost: \xA3".concat(price, ". You can add 'vinyl\" & 'priority' services by selecting them below for an updated estimate."));
    }
  } 
  
  /** SUPPORTING ANIMATION FUNCTIONS */

  function fadeInAllAfterFirst() {
    $(".hide-on-append:hidden").first().fadeIn(800, function () {
      $(".hide-on-append:hidden").fadeIn(600);
    });
  }

  function fadeInAllAfterFirstSecond() {
    $(".layer-2-q:hidden").first().fadeIn(600, function () {
      $(".layer-2-q:hidden").fadeIn(600);
    });
  }

  function fadeInAllAfterFirstThird() {
    $(".layer-3-q:hidden").first().fadeIn(600, function () {
      $(".layer-3-q:hidden").fadeIn(600);
    });
  }

  function fadeIcons() {
    $(".row__A").fadeToggle(1000, "linear");
    $(".row__B").fadeToggle(1000, "linear");
  }
});