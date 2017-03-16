//console.log('Loaded!');
var but = document.getElementById('count');
var counter =0
but.onclick=function(){
  var myRequest = new XMLHttpRequest(); 
    method = "GET",
    url = "http://rs414057.imad.hasura-app.io/counter";
    myRequest.open(method, url, true);
    myRequest.onreadystatechange = function () {
        if(myRequest.readyState === XMLHttpRequest.DONE && myRequest.status === 200) {
            console.log(xhr.responseText);
        }
    };
myRequest.send();
};