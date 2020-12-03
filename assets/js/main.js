

$("#mixing-prices").change(function(){
     var status = this.value;
   if(status=="1-10") {
     $('#price-box').text("1-10 Price");
   } else if(status=="11-20") {
     $('#price-box').text("11-20 Price");
   } else if(status=="21-30") {
     $('#price-box').text("21-30 Price");
   } else if(status=="31-40") {
     $('#price-box').text("31-40 Price");
   } else if(status=="41-50") {
     $('#price-box').text("41-50 Price");
   } else if(status=="51-60") {
     $('#price-box').text("51-60 Price");
   };
});