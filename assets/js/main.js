/** Logic for updating the price estimates on each of the service pages.
 * - Code changes text content of html element, based on the users choice from a select menu.
 */

/** MASTERING */

$("#mastering-prices").change(function(){
     var status = this.value;
   if(status=="standard") {
     $('#price-box-text').text("£25");
   } else if(status=="priority") {
     $('#price-box-text').text("£50");
   } else if(status=="vinyl") {
     $('#price-box-text').text("£30");
   }
});

$("#mastering-prices").chosen({disable_search_threshold: 10});

/** STEM MASTERING */

$("#stem-mastering-prices").change(function(){
     var status = this.value;
   if(status=="1-4") {
     $('#price-box-text').text("£40");
   } else if(status=="5-8") {
     $('#price-box-text').text("£50");
   } else if(status=="9-12") {
     $('#price-box-text').text("£60");
   }
});

$("#stem-mastering-prices").chosen({disable_search_threshold: 10});

/** MIXING */

$("#mixing-prices").change(function(){
     var status = this.value;
   if(status=="1-10") {
     $('#price-box-text').text("£60");
   } else if(status=="11-20") {
     $('#price-box-text').text("£80");
   } else if(status=="21-30") {
     $('#price-box-text').text("£100");
   } else if(status=="31-40") {
     $('#price-box-text').text("£120");
   } else if(status=="41-50") {
     $('#price-box-text').text("£140");
   } else if(status=="51-60") {
     $('#price-box-text').text("£160");
   }
});

$("#mixing-prices").chosen({disable_search_threshold: 10});

/** Logic for displaying the desired rates table on the rates.html page. 
 * All table elements exist in rates.html, with display: none.
 * Based on user input from a select menu, the desired menu is displayed. Using JQuery fadeIn() effect.
*/

$("#rates-table").change(function(){
    $("#rates-initial-text").css("display", "none");
    var status = this.value;
   if(status=="mastering") {
        $("#mastering-table, #stem-mastering-table, #mixing-table, #timed-mastering-table, #rates-hr").css("display", "none");
        $( "#mastering-table" ).fadeIn( "slow" );
   } else if(status=="stem-mastering") {
        $("#mastering-table, #stem-mastering-table, #mixing-table, #timed-mastering-table, #rates-hr").css("display", "none");
        $( "#stem-mastering-table" ).fadeIn( "slow" );
   } else if(status=="timed-mastering") {
        $("#mastering-table, #stem-mastering-table, #mixing-table, #timed-mastering-table, #rates-hr").css("display", "none");
        $( "#timed-mastering-table" ).fadeIn( "slow" );
   } else if(status=="mixing") {
        $("#mastering-table, #stem-mastering-table, #mixing-table, #timed-mastering-table, #rates-hr").css("display", "none");
        $( "#mixing-table" ).fadeIn( "slow" );
   } else if(status=="none") {
        $("#mastering-table, #stem-mastering-table, #mixing-table, #timed-mastering-table, #rates-hr").css("display", "none");
        $("#rates-hr").css("display", "block");
   }
});

/** SERVICE FINDER PROMPT - MODAL.
 * Code displays the modal after 5seconds of page loading.
 */

setTimeout(function() {
    $('#serviceFinderPrompt').modal('show');}, 
        5000);

/** FAQ EXPAND ANSWERS.
 * On click 'question' element, ID attribute is captured to variable.
 * Variable string is amended to target the corresponding answer ID.
 * Variable is then used to show the HTML element on the screen.
 * The corresponding ICON is also changed to provide user feedback.
 * */

$('.question').click(function() { 
    var id = $(this).attr('id');
    id = id.replace('question', 'answer');
    if ($("#" + id).is(":hidden")) {
        $("#" + id).slideDown("slow");
    } else {
        $("#" + id).hide();
    }
    //CHANGE ICON & SR TEXT
    id = id.replace('answer', 'icon');
    $("#" + id).find('i').toggleClass("fa-plus").toggleClass("fa-minus");
    $("#" + id).find('span').text("Collapse");

});

/** NAVBAR DROPDOWN TOGGLE ON HOVER.
 * This code targets the dropdown select meny and toggles content on mouse hover.
 */

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
