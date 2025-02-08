"use strict";

var menu = document.querySelector('#menu-btn');
var navbar = document.querySelector('.header .nav');
var header = document.querySelector('.header');

menu.onclick = function () {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = function () {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}; // scroll up


var scrollBtn = document.querySelector(".scrollBtn");
window.addEventListener("scroll", function () {
  scrollup();
});
scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
});
scrollup();

function scrollup() {
  window.scrollY > 100 ? scrollBtn.classList.add('active') : scrollBtn.classList.remove('active');
} // Data


var scriptURL = 'https://script.google.com/macros/s/AKfycbwvH9bwzrB_XQ1aTP86nucyUf5oqtZ_uPA-bi6oaQh6dwSsqfHnHMKAvoKv5ATDN_3GLg/exec';
var form = document.forms['google-sheet'];
form.addEventListener('submit', function (e) {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  }); //.then(response => $("#form_alerts").html("<div class='alert alert-success'>contact message sent sucess ✔</div>"))
  //.catch(error => $("#form_alerts").html("<div class='alert alert-danger'> message Reset success</div>"))
});
var send = document.getElementById('send');
var rest = document.getElementById('format');
var success = document.getElementById('form_alerts');
send.addEventListener('click', function () {
  success.style.display = 'block';
});
rest.addEventListener('click', function () {
  success.style.display = 'none';
});
//# sourceMappingURL=script.dev.js.map
