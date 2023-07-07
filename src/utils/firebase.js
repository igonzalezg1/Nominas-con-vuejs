// Importamos InitializeApp para inicializar Firebase
import { initializeApp } from "firebase/app";

// Importamos getAuth para poder usar el sistema de autenticación de Firebase
import { getAuth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBFqdSvEAlYqR9eivPKEbC5nSUSaQNz0OQ",
    authDomain: "ejemplo-vue-nominas.firebaseapp.com",
    projectId: "ejemplo-vue-nominas",
    storageBucket: "ejemplo-vue-nominas.appspot.com",
    messagingSenderId: "1035638384361",
    appId: "1:1035638384361:web:8b78c1e5d5f7bd2eebf278"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inicializamos el sistema de autenticación de Firebase
const auth = getAuth(app);
// Exportamos la constante auth para poder usarla en otros archivos
export { auth };