import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB08gg8BvFPAKYcPtAIq6nyscEJek1ercg",
  authDomain: "dashboard-97d59.firebaseapp.com",
  projectId: "dashboard-97d59",
  storageBucket: "dashboard-97d59.appspot.com",
  messagingSenderId: "746131592139",
  appId: "1:746131592139:web:45048840b428fa9a085c4e",
  measurementId: "G-TK140TD71H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
