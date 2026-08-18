const USER_KEY="earnhub_demo_user", SESSION_KEY="earnhub_demo_session";
const emailOf=e=>String(e||"").trim().toLowerCase();

export function createDemoAccount({email,displayName,password}){
  email=emailOf(email); displayName=String(displayName||"").trim();
  if(!email.includes("@")) throw new Error("Enter a valid email address.");
  if(!displayName) throw new Error("Enter your display name.");
  if(String(password||"").length<8) throw new Error("Password must be at least 8 characters.");
  const user={id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),email,displayName,password,balance:0,totalEarnings:0,createdAt:new Date().toISOString()};
  localStorage.setItem(USER_KEY,JSON.stringify(user));
  localStorage.setItem(SESSION_KEY,JSON.stringify({userId:user.id}));
  return user;
}
export function loginDemoAccount({email,password}){
  const user=JSON.parse(localStorage.getItem(USER_KEY)||"null");
  if(!user) throw new Error("No account found. Create an account first.");
  if(emailOf(email)!==user.email || String(password||"")!==user.password) throw new Error("Incorrect email or password.");
  localStorage.setItem(SESSION_KEY,JSON.stringify({userId:user.id}));
  return user;
}
export function getCurrentUser(){
  try{
    const u=JSON.parse(localStorage.getItem(USER_KEY)||"null");
    const s=JSON.parse(localStorage.getItem(SESSION_KEY)||"null");
    return u&&s&&s.userId===u.id?u:null;
  }catch{return null}
}
export function requireLogin(){
  const u=getCurrentUser();
  if(!u){window.location.href="/";return null}
  return u;
}
export function logout(){localStorage.removeItem(SESSION_KEY)}
