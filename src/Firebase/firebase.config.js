import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { async } from 'q';

const config = {
    apiKey: "AIzaSyBWXBY0R6tN5j3pN4D2KCr0KwbMl_7w7as",
    authDomain: "venusbucket-f203c.firebaseapp.com",
    databaseURL: "https://venusbucket-f203c.firebaseio.com",
    projectId: "venusbucket-f203c",
    storageBucket: "venusbucket-f203c.appspot.com",
    messagingSenderId: "223982908791",
    appId: "1:223982908791:web:5ebb7ed5e6b2c626eadd72",
    measurementId: "G-9VFJBL608V"
};

export const createUserProfileDocuments = async (userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    // console.log(snapShot)

    // console.log(userAuth)
    if(!snapShot.exists)
    {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                }
            )
        }
        catch(error){
            console.log("error creating ",error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;