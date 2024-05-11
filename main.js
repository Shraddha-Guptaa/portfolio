var typed = new Typed(".text",{
    strings: ["Frontend Developer", "Web Developer", "FullStack Developer"],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop: true
});

 
//sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
header.classList=toggle("sticky",window.scrollY >50)
})

//add side menu for mobile
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0px";

}
function closemenu(){
    sidemenu.style.right="-200px";
}

///PORTFOLIO CONTACT FORM 


///SAVING IN GOOGLE FORM........


  const scriptURL = 'https://script.google.com/macros/s/AKfycbytRdT-W8DkNdZOofpXHLk06tNFk4dtezdlcsrOeLghqgzMF3U_IvWfIFUuMHnL6ao/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>
        {
            msg.innerHTML= "Message Sent Successfully!"
            setTimeout(function(){
            msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
