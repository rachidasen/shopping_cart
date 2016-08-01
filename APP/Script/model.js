$(document).ready(function(){

    $("#click2").click(function(){
        $("#home").hide();
        $("#products").show();
        $("#items").html('');
         $.ajax({
          dataType: "json",
          url: "APP/Script/data.json",
          success: function(data){
           // var image= $("#mid img");
            //var b=console.log($('.pic'));
            var i;
            for(i=0;i<10;i++){
                $("#items").append("<div class='col-xs-3 col-lg-3'>\
                                        <figure class='thumbnail' >\
                                            <img class='img-rounded'\
                                                src='" + data.items[i].thumb +"' \
                                                id='" + data.items[i].code +"'>\
                                            <figcaption>\
                                                <p class='caption'>\" "+data.items[i].name+" \"</p>\
                                                <p><center>Rs. "+data.items[i]['final-price']+" /-</center></p>\
                                                <div class='caption row'> \
                                                    <button type='button' class='btn-lg btn-info col-sm-6 col-md-6' > Add-toCart</button>\
                                                    <button type='button' class='btn-lg btn-success col-sm-6 col-md-6' style='float:right;' value="+i+" onclick='product_details(this.value)'>Preview</button>\
                                                </div> <figcaption>\
                                        </figure>\
                                </div>");
               // alert(data['items'][i]['code']);
            }
           }
          });
     });

    $("#click1").click(function(){
            $("#products").hide();
            $("#home").show();

     });

});
