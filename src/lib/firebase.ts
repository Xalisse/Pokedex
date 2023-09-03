import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBDvpqLdEWSKZGkxuZOAd6Do8sb7QBlcgQ',
	authDomain: 'pokedex-290bd.firebaseapp.com',
	projectId: 'pokedex-290bd',
	storageBucket: 'pokedex-290bd.appspot.com',
	messagingSenderId: '163984985350',
	appId: '1:163984985350:web:c5b713e98eaca37c3e6287'
};

// Initialize Firebase
let firebaseApp;

if (!getApps().length) {
	firebaseApp = initializeApp(firebaseConfig);
}

// Auth
const firebaseAuth = getAuth(firebaseApp);

export { firebaseApp, firebaseAuth };
