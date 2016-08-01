function product_details(product_no) {
    "use strict";
    /*jslint browser: true "devel": true*/
    /*global $, jQuery, alert*/
    /*jslint es5: true */
//    console.log(data);
    $.ajax({
        dataType: "json",
        url: "APP/Script/data.json",
        success: function (data) {
            var i = 0,
                thumbSmall = data.items[product_no].thumbSmall,
                thumbBig = data.items[product_no].thumbBig,
                content = "<div id='products'>\
                            <div class='container'>\
                              <div class='col-md-4'>\
                                <div class='row'>\
                                  <img class='fancybox' id='one' src ={{thumb0}}  height='150' width='150'>\
                                </div><br>\
                                <div class='row'>\
                                  <img class='fancybox'  id='two' src ={{thumb1}}   height='150' width='150'>\
                                </div><br>\
                                <div class='row'>\
                                  <img class='fancybox' id='three'src ={{thumb2}}  height='150' width='150'>\
                                </div><br>\
                                <div class='row'>\
                                  <img class='fancybox' id='four' src ={{thumb3}}  height='150' width='150'>\
                                </div>\
                              </div>\
                              <div class= 'blow'>\
                                <img  id='blowup' height='550px'  width='400px'>\
                              </div>\
                            </div>\
                            <div class ='container1'>\
                              <h1  class='title'> {{title}}</h1>\
                              <div  class='price'><input  type='button' id='Prc' value={{price}} decoration:'none'></div>\
                              <div class='sizes'><label class='guide'>Select a size</label></div>\
                              <div class='size-cont'>\
                                <input type='button' id='S' value='S'>\
                                <input type='button' id='M' value='M'>\
                                <input type='button' id='L' value='L'>\
                                <input type='button' id='XL' value='XL'>\
                              </div><br>\
                              <button id='btn' type='button' onclick='AddToCart()' >Add to Cart</button>\
                            </div>\
                           </div>",
                templater = function (html) {
                    return function (data) {
                        for (var x in data){
                                        var re="{{\\s?" + x + "\\s?}}";
                                        html=html.replace(new RegExp(re,"ig"), data[x]);
                                    }
                                    return html;
                                    };
                            },
                template=templater(content),
                div=document.getElementById('items');

            div.innerHTML='';
            div.innerHTML=template({
                thumb0:thumbSmall[0],
                thumb1:thumbSmall[1],
                thumb2:thumbSmall[2],
                thumb3:thumbSmall[3],
                title:data.items[product_no].title,
                price:data.items[product_no]['final-price']
            });
            $("#one").click(function(){
                $("#blowup").attr('src',thumbBig[0])
            });
            $("#two").click(function(){
                $("#blowup").attr('src',thumbBig[1])
            });
            $("#three").click(function(){
                $("#blowup").attr('src',thumbBig[2])
            });
            $("#four").click(function(){
                $("#blowup").attr('src',thumbBig[3])
            });





        }
    });
    console.log(typeof (product_no));
    //alert(product_no);
}
