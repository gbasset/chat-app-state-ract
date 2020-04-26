import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCAQPujLIaExKL_j1AkhDMhbgylE-KHQ4U",
    authDomain: "chatboxapp-e0c7e.firebaseapp.com",
    databaseURL: "https://chatboxapp-e0c7e.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp }
export default base