function product_details(product_no)
{
    $.ajax({
        dataType: "json",
        url: "APP/Script/data.json",
        success:function(data){
            var i=0;
            var thumbSmall=data['items'][product_no]['thumbSmall'];
            var thumbBig=data['items'][product_no]['thumbBig'];

//            $.ajax({
//                dataType:"html",
//                url:"product_details."
//            });
            var stirng="<div class='container'>\
                              <div class='col-md-4'>\
                                <div class='row'>\
                                  <img class='fancybox' id='one' src =${thumb0}  onclick='myFunction1()' height='150' width='150'>\
                                </div><br>\
                                <div class='row'>\
                                  <img class='fancybox'  id='two' src =${thumb1} onclick='myFunction2()'  height='150' width='150'>\
                                </div><br>\
                                <div class='row'>\
                                  <img class='fancybox' id='three'src =${thumb2}  onclick='myFunction3()' height='150' width='150'>\
                                </div><br>\
                                <div class='row'>\
                                  <img class='fancybox'  src =${thumb3} onclick='myFunction4()' height='150' width='150'>\
                                </div>\
                              </div>\
                              <div class= 'blow'>\
                                <img  id='blowup' height='550px'  width='400px'>\
                              </div>\
                            </div>"



        }
    });
    console.log(typeof(product_no));
    alert(product_no);
}
