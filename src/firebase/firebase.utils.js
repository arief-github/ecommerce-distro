import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCPiNx_ieDI_k8zIgmFcPSDAFz2VNXOuo0",
    authDomain: "ecommerce-distro.firebaseapp.com",
    projectId: "ecommerce-distro",
    storageBucket: "ecommerce-distro.appspot.com",
    messagingSenderId: "903825211116",
    appId: "1:903825211116:web:a9211957563e84935fefc9",
    measurementId: "G-W09EYG1SLE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const signInWithGoogle = async () => {
    try {
        await auth.signInWithPopup(provider);
    } catch (error) {
        console.error(error)
    }
}
