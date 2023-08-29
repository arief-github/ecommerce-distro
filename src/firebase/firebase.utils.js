import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {useRef} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyCPiNx_ieDI_k8zIgmFcPSDAFz2VNXOuo0",
    authDomain: "ecommerce-distro.firebaseapp.com",
    projectId: "ecommerce-distro",
    databaseURL: "https://ecommerce-distro.firebaseio.com",
    storageBucket: "ecommerce-distro.appspot.com",
    messagingSenderId: "903825211116",
    appId: "1:903825211116:web:a9211957563e84935fefc9",
    measurementId: "G-W09EYG1SLE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error('error creating user', error.message)
        }
    }
    return userRef;
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
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
