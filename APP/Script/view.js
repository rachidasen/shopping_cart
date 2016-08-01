function myFunction1() {
    document.getElementById("blowup").src = "http://assets.myntassets.com/w_450,q_80/v1/assets/images/1327344/2016/7/4/11467614894952-Campus-Sutra-Black-T-shirt-2671467614894709-1.jpg";

 }
function myFunction2() {
    document.getElementById("blowup").src = "http://assets.myntassets.com/w_450,q_80/v1/assets/images/1327344/2016/7/4/11467614894929-Campus-Sutra-Black-T-shirt-2671467614894709-2.jpg" ;

 }
 function myFunction3() {
    document.getElementById("blowup").src = "http://assets.myntassets.com/w_450,q_80/v1/assets/images/1327344/2016/7/4/11467614894908-Campus-Sutra-Black-T-shirt-2671467614894709-3.jpg" ;

 }
 function myFunction4() {
    document.getElementById("blowup").src = "http://assets.myntassets.com/w_450,q_80/v1/assets/images/1327344/2016/7/4/11467614894865-Campus-Sutra-Black-T-shirt-2671467614894709-5.jpg";

 }


 function AddToCart(itemToAdd)
 {
  document.getElementById('product').style.visibility='hidden';
  document.getElementById('TheCart').style.visibility='visible';
  document.getElementById("Image").src = "http://assets.myntassets.com/w_450,q_80/v1/assets/images/1327344/2016/7/4/11467614894952-Campus-Sutra-Black-T-shirt-2671467614894709-1.jpg";
  var x = document.getElementById("Prc").value;
    document.getElementById("Prcc").innerHTML = x;
    var y = document.getElementById("ttle").target;
    document.getElementById("titl").innerHTML = y;
 }
