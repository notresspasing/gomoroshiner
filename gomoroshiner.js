// ==UserScript==
// @name        gomoroshiner
// @namespace   2ch.hk
// @include     https://2ch.hk/
// @version     1
// @grant       none
// @match        *://2ch.hk/*
// ==/UserScript==

// document.body.innerHTML = document.body.innerHTML.replace(/Домарощинер/g, 'Гомоморячок');

function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function main() {
  var i = 0;
  var l = 0;
  var postid;
    
 var elements = document.getElementsByClassName("post-details");
   for (i = 0; i < elements.length; i++) {
    postid = "post-body-";
     for (l = 0; l < 4; l++){
        if (elements[i].getElementsByTagName("span")[l].innerHTML == "!!lmotSi2gK."){
          postid = postid + elements[i].id.match(/\d+/);
          document.getElementById(postid).getElementsByTagName("blockquote")[0].innerHTML = "А ещё я сосу хуи.";
        }
     }
   }
}

addJQuery(main);


