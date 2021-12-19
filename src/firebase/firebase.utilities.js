import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const CONFIG = {
    apiKey: 'AIzaSyCt2eJ0W743pOplivh0MwgzzFvjQ2hvyFo',
    authDomain: 'axile-clothing.firebaseapp.com',
    projectId: 'axile-clothing',
    storageBucket: 'axile-clothing.appspot.com',
    messagingSenderId: '332124600455',
    appId: '1:332124600455:web:4f62b4587fe83ce6966022',
};

firebase.initializeApp(CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up the pop-up
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // Guard Clause
    if (!userAuth) return;

    console.log(userAuth);

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshop = await userRef.get();

    if (!snapshop.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.error(
                'Error while stroing new user data into database',
                error.message
            );
        }
    }

    return userRef;
};

export default firebase;
