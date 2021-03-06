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

export const getCurrentUser = () =>
    new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up the pop-up
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// Adding a new new document for newly signed users.
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // Guard Clause
    if (!userAuth) return;

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

export const convertCollectionsDataToMap = collection => {
    const transformedCollection = collection.map(collectionItem => {
        const { title, items } = collectionItem.data();

        return {
            title,
            items,
            routeName: encodeURI(title.toLowerCase()),
            id: collectionItem.id,
        };
    });

    return transformedCollection.reduce((acc, shopCollection) => {
        acc[shopCollection.title.toLowerCase()] = shopCollection;
        return acc;
    }, {});
};

export const createCollectionsAndAddDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(shopObject => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, shopObject);
    });

    return await batch.commit();
};

export default firebase;
