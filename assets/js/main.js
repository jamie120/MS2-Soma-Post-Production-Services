alert("linked")

//LOGIC FOR PRICING OPTIONS ON SERVICES PAGES


//MASTERING

$("#mastering-prices").change(function(){
     var status = this.value;
   if(status=="standard") {
     $('#price-box-text').text("standard pricing");
   } else if(status=="priority") {
     $('#price-box-text').text("priority pricing");
   } else if(status=="vinyl") {
     $('#price-box-text').text("vinyl pricing");
   };
});

$("#mastering-prices").chosen({disable_search_threshold: 10});

//STEM MASTERING

$("#stem-mastering-prices").change(function(){
     var status = this.value;
   if(status=="1-4") {
     $('#price-box-text').text("1-4 pricing");
   } else if(status=="5-8") {
     $('#price-box-text').text("5-8 pricing");
   } else if(status=="9-12") {
     $('#price-box-text').text("9-12 pricing");
   };
});

$("#stem-mastering-prices").chosen({disable_search_threshold: 10});

//MIXING

$("#mixing-prices").change(function(){
     var status = this.value;
   if(status=="1-10") {
     $('#price-box-text').text("From £54 per track");
   } else if(status=="11-20") {
     $('#price-box-text').text("From £72 per track");
   } else if(status=="21-30") {
     $('#price-box-text').text("From £90 per track");
   } else if(status=="31-40") {
     $('#price-box-text').text("From £108 per track");
   } else if(status=="41-50") {
     $('#price-box-text').text("From £126 per track");
   } else if(status=="51-60") {
     $('#price-box-text').text("From £144 per track");
   };
});

$("#mixing-prices").chosen({disable_search_threshold: 10});

//RATES TABLE LOGIC

$("#rates-table").change(function(){
    var status = this.value;
   if(status=="mastering") {
        $("#mastering-table, #stem-mastering-table, #mixing-table, #timed-mastering-table, #rates-hr").css("display", "none");
        $( "#mastering-table" ).fadeIn( "slow" )
   } else if(status=="stem-mastering") {
        $("#mastering-table, #stem-mastering-table, #mixing-table, #timed-mastering-table, #rates-hr").css("display", "none");
        $( "#stem-mastering-table" ).fadeIn( "slow" )
   } else if(status=="timed-mastering") {
        $("#mastering-table, #stem-mastering-table, #mixing-table, #timed-mastering-table, #rates-hr").css("display", "none");
        $( "#timed-mastering-table" ).fadeIn( "slow" )
   } else if(status=="mixing") {
        $("#mastering-table, #stem-mastering-table, #mixing-table, #timed-mastering-table, #rates-hr").css("display", "none");
        $( "#mixing-table" ).fadeIn( "slow" )
   } else if(status=="none") {
        $("#mastering-table, #stem-mastering-table, #mixing-table, #timed-mastering-table, #rates-hr").css("display", "none");
        $("#rates-hr").css("display", "block");
   }
});

//SERVICE FINDER PROMPT - MODAL

setTimeout(function() {
    $('#serviceFinderPrompt').modal('show');}, 
        5000);

//FAQ EXPAND ANSWERS

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
    $("#" + id).find('i').toggleClass("fa-plus").toggleClass("fa-minus")
    $("#" + id).find('span').text("Collapse")

});
