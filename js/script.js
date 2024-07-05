"use strict"

let button = document.getElementById("but");

button.addEventListener("click",() => {
   alert("Thanks for contacting! :)");
});


const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.style.opacity = 1;  
         entry.target.style.transform = 'translateX(0%)';
         
       
         // Delay to ensure transition is applied after initial state change
       
   
       }
       else{
         entry.target.style.cssText = `
         opacity:${0};
       `;
       entry.target.style.transform = 'translateX(-10%)';
       }
   });
});

const targetElement = document.querySelectorAll('.element');
for(let i = 0;i<targetElement.length;i++){
observer.observe(targetElement[i]);
}
