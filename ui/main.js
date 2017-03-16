//console.log('Loaded!');
var but = document.getElementById('count');
var counter =0;
but.onclick=function(){
  var myRequest = new XMLHttpRequest(); 
    method = "GET",
    url = "http://rs414057.imad.hasura-app.io/counter";
    
    myRequest.onreadystatechange = function () {
        if(myRequest.readyState === XMLHttpRequest.DONE && myRequest.status === 200) {
            var counter = myRequest.responseText;
            var span =document.getElementById('count_text');
            span.innerHTML = counter.toString(); 
        }
    };
    myRequest.open(method, url, true);
    myRequest.send();

};