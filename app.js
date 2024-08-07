import { app, auth } from "./module.mjs";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const authInstance = getAuth(app);
var main=document.getElementById("main")
main.innerHTML=`
    <div class="d-flex flex-column col-4 justify-content-center align-items-center mx-3">

      <h2>Login</h2>
    </div>
    <div class="d-flex flex-column col-4 justify-content-center align-items-center mx-3">
      <input type="email" class="col-9" name="email" placeholder="Email" id="email">
      <input type="password" name="password" class="col-9" placeholder="Password" id="pass">
      <button id="login-btn" class="col-5">Login</button>
      <button id="create" class="col-5">Create</button>
      <h4 id="if"></h4>
    </div>
`
document.getElementById("create").addEventListener("click",()=>{
    main.innerHTML=`
       <div class="d-flex flex-column col-4 justify-content-center align-items-center mx-3">
        <h1>Create Account</h1>

      </div>
<div class="d-flex flex-column col-4 justify-content-center align-items-center mx-3">
    
        <input type="text" name="name" class="col-9" placeholder="Name" id="name">
        <input type="email" class="col-9" name="email" placeholder="Email" id="email">
        <input type="password" name="password" class="col-9" placeholder="Password" id="pass">
        <button id="btncreateaccc" class="col-5">Create Account</button>
        <button id="login" class="col-5">Login</button>
        <h4 id="if"></h4>
      </div>
    `
})
document.getElementById("login").addEventListener("click",()=>{
    main.innerHTML=`
    <div class="d-flex flex-column col-4 justify-content-center align-items-center mx-3">

      <h2>Login</h2>
    </div>
    <div class="d-flex flex-column col-4 justify-content-center align-items-center mx-3">
      <input type="email" class="col-9" name="email" placeholder="Email" id="email">
      <input type="password" name="password" class="col-9" placeholder="Password" id="pass">
      <button id="login-btn" class="col-5">Login</button>
      <button id="create" class="col-5">Create</button>
      <h4 id="if"></h4>
    </div>
`
})
// document.getElementById("btncreateaccc").addEventListener("click", () => {
//   // console.log("sd");
  
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("pass").value;

//   createUserWithEmailAndPassword(authInstance, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user);
//       alert("Account Created");
//       location.href = "login.html";
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//       if (errorMessage) {
//         // document.getElementById("info").innerText = `EMAIL IS ALREADY EXIST`;
//         location.href = "login.html";
//       }
//     });
// });

// document.getElementById("login-btn").addEventListener("click", () => {
//   location.href = "login.html";
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("pass").value;

//   signInWithEmailAndPassword(authInstance, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user);
//       // Redirect to dashboard or any other page after successful login
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//       console.error(errorMessage);
//       // Handle login errors here
//     });
// });
