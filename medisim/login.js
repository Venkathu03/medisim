// let btn=document.getElementById("btns")
// btn.addEventListener("click",Submit);
// function Submit(e) {
//     e.preventDefault();
//     console.log("hi");
//     let setEmail="venkat123@gmail.com"
//     let setPass="Venkat123"

//     let email=document.getElementById("email");
//     let password=document.getElementById("password");
//     let message = document.getElementById('msg');
//     console.log(message);

//     if(email.value=="" && password.value==""){
       
//         console.log("hii");
//     }
//     else{
    
//        message.innerHTML = "error";
   

//     }

//     if(email.value==setEmail && password.value==setPass){
//         alert('hii')
//         window.location.href = "main.html";
//     }
//     else{
    
//        message.innerHTML = "error";
   

//     }

    
// }

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict';
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();
