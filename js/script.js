let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

  if(window.scrollY > 0){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }

}



// scroll up
let scrollBtn = document.querySelector(".scrollBtn");
window.addEventListener("scroll", ()=>{
scrollup()
})
scrollBtn.addEventListener('click',()=>{
window.scrollTo({
top : 0 ,
behavior : "auto"
})
})
scrollup()
function scrollup(){
window.scrollY > 100 ? scrollBtn.classList.add('active') : scrollBtn.classList.
remove('active'); 
}



// Data
const scriptURL = 'https://script.google.com/macros/s/AKfycbwvH9bwzrB_XQ1aTP86nucyUf5oqtZ_uPA-bi6oaQh6dwSsqfHnHMKAvoKv5ATDN_3GLg/exec'
const form = document.forms['google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        //.then(response => $("#form_alerts").html("<div class='alert alert-success'>contact message sent sucess ✔</div>"))
        //.catch(error => $("#form_alerts").html("<div class='alert alert-danger'> message Reset success</div>"))
    })

  let send = document.getElementById('send');
  let rest = document.getElementById('format');
  const success = document.getElementById('form_alerts');

  send.addEventListener('click', () => {
    success.style.display = 'block';
  });

  

  rest.addEventListener('click', () => {
    success.style.display = 'none';
  });