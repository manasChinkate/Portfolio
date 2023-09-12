function smooth(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
      
          const targetElement = document.querySelector(this.getAttribute('href'));
          const headerOffset = 60; // Adjust this value based on your header height
      
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition - headerOffset;
      
          window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
          });
        });
      });
}
smooth()

  


function sendMail() {
    var param =
    {
         name : document.getElementById("name").value,
         email : document.getElementById("email").value,
         message : document.getElementById("message").value,
    };



const serviceID = "service_bhoh0ms";
const templateID = "template_q28vnmf"

emailjs.send(serviceID,templateID,param)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Mail Sent");
    }
)
.catch((err) => console.log(err));
}