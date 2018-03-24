import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
   	apiKey: "AIzaSyDpsIWZtja9DNzS2yMLlIbCdIqtu9fWwD8",
    authDomain: "vigilancia-e2011.firebaseapp.com",
    databaseURL: "https://vigilancia-e2011.firebaseio.com",
    projectId: "vigilancia-e2011",
    storageBucket: "",
    messagingSenderId: "1001964929909"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
