import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyAsrK5aHfLUsKNxKVpEfJ8z40iEQ6KTHQE',
	authDomain: 'dashboard-c7e7f.firebaseapp.com',
	databaseURL: 'https://dashboard-c7e7f.firebaseio.com',
});

const base = Rebase.createClass(app.database());

export default base;