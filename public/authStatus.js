import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  // 他の設定...
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function onAuthStateChanged(callback) {
  auth.onAuthStateChanged(callback);
}
