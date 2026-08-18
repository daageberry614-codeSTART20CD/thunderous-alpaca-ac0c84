import {requireLogin,logout} from "./auth";
const user=requireLogin();
if(user){
 document.querySelectorAll("[data-user-name]").forEach(x=>x.textContent=user.displayName);
 document.querySelectorAll("[data-user-email]").forEach(x=>x.textContent=user.email);
 document.querySelectorAll("[data-logout]").forEach(x=>x.onclick=()=>{logout();location.href="/"});
}
