import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBkos_jzuTYaNfRWCe-axaCMenpIlGamP4",
    authDomain: "vogue-newscast.firebaseapp.com",
    projectId: "vogue-newscast",
    storageBucket: "vogue-newscast.appspot.com",
    messagingSenderId: "372703361789",
    appId: "1:372703361789:web:77703bfd2d926468c7dc94",
    measurementId: "G-GH2GEJKX1E"
};

initializeApp(firebaseConfig);
export const auth = getAuth();