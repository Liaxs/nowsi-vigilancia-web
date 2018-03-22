import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyBuUG3ksrLRuXyjcLhOpM0deV0Cow9YXng",
    authDomain: "mapas-7c0d0.firebaseapp.com",
    databaseURL: "https://mapas-7c0d0.firebaseio.com",
    projectId: "mapas-7c0d0",
    storageBucket: "mapas-7c0d0.appspot.com",
    messagingSenderId: "439976486711"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
