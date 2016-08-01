function product_details(product_no) {
    "use strict";
    /*jslint browser: true "devel": true*/
    /*global $, jQuery, alert*/
    /*jslint es5: true */
    $.ajax({
        dataType: "json",
        url: "APP/Script/data.json",
        success: function (data) {
            var i = 0,
                thumbSmall = data.items[product_no].thumbSmall,
                thumbBig = data.items[product_no].thumbBig,
                content = "<div class='container'>\
                              <div class='col-md-4'>\
                                <div class='row'>\
                                  <img class='fancybox' id='one' src ={{thumb0}}  onclick='myFunction1()' height='150' width='150'>\
                                </div><br>\
                                <div class='row'>\
                                  <img class='fancybox'  id='two' src ={{thumb1}} onclick='myFunction2()'  height='150' width='150'>\
                                </div><br>\
                                <div class='row'>\
                                  <img class='fancybox' id='three'src ={{thumb2}}  onclick='myFunction3()' height='150' width='150'>\
                                </div><br>\
                                <div class='row'>\
                                  <img class='fancybox'  src ={{thumb3}} onclick='myFunction4()' height='150' width='150'>\
                                </div>\
                              </div>\
                              <div class= 'blow'>\
                                <img  id='blowup' height='550px'  width='400px'>\
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
                thumb3:thumbSmall[3]
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





        }
    });
    console.log(typeof (product_no));
    alert(product_no);
}
