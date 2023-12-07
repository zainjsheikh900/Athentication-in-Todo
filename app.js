import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB-fAu62JI9hGPO8D8Fv7-il9i_bJjwBok",
    authDomain: "fir-authentication-6757a.firebaseapp.com",
    projectId: "fir-authentication-6757a",
    storageBucket: "fir-authentication-6757a.appspot.com",
    messagingSenderId: "708953396720",
    appId: "1:708953396720:web:79b83fc117851fd129f935",
    measurementId: "G-LE8P9E9V5C"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();


let register_btn = document.getElementById('register_btn');
register_btn.addEventListener('click',function(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async(userCredential) => {
      // Signed up 
      const user = userCredential.user;
      location.href = './login.html'
      await setDoc(doc(db, "users", user.uid), {
        email: email.value,
        password: password.value,
      });
    //   console.log('user==>',user);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error=>',error.message);
    });
})
