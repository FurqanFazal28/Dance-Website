// let sname=document.getElementById("name");
// let submit=document.getElementById("submit");
// let alert=document.getElementById("success");
// alert.style.display="none";
// submit.disabled=true;

// function clear() {
//     let clr = document.getElementById("myForm1");
//     clr.reset();
// }

// sname.addEventListener("change",()=>{
//     let str=sname.value;
//     let regex=/^[A-Za-z]{2,20}$/;

//     if(regex.test(str)){
//         submit.disabled=false;
//     }
//     else{
//         submit.disabled=true;
//     }
// });

// submit.addEventListener("click",(e)=>{

//     document.getElementById("success").style.display="block";
//     setTimeout(() => {
//         document.getElementById("success").style.display="none";
//         clear();
//     }, 2000);   

//     submit.disabled=true;

    
//     e.preventDefault(); 

// });

function clear() {
        let clr = document.getElementById("myForm1");
         clr.reset();
     }
let submit=document.getElementById("submit");
submit.addEventListener("click",(e)=>{
console.log("done");
setTimeout(() => {
    clear();
}, 30000);
e.preventDefault();


})