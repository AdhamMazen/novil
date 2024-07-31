let stars=document.querySelector("#stars");
let moon=document.querySelector("#moon");
let mountains3=document.querySelector("#mountains3");
let mountains4=document.querySelector("#mountains4");
let river5=document.querySelector("#river5");
let boat6=document.querySelector("#boat6");
let novil=document.querySelector(".novil")

window.onscroll=()=>{
   let value=scrollY;
   stars.style.left=value+'px';
   moon.style.top=value*3+'px';
   mountains3.style.top=value*2+'px';
   mountains4.style.top=value*1.5+'px';
   river5.style.top=value+'px';
   boat6.style.top=value+'px';
   boat6.style.left=value+'px';
    novil.style.fontSize=value*.3+'px';

};
