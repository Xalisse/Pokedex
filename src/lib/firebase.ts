import { initializeApp, type FirebaseApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyBDvpqLdEWSKZGkxuZOAd6Do8sb7QBlcgQ',
	authDomain: 'pokedex-290bd.firebaseapp.com',
	projectId: 'pokedex-290bd',
	storageBucket: 'pokedex-290bd.appspot.com',
	messagingSenderId: '163984985350',
	appId: '1:163984985350:web:c5b713e98eaca37c3e6287',
	databaseURL: 'https://pokedex-290bd-default-rtdb.europe-west1.firebasedatabase.app'
};

// Initialize Firebase
let firebaseApp;
if (getApps().length === 0) {
	firebaseApp = initializeApp(firebaseConfig);
}
// Auth
const firebaseAuth = getAuth(firebaseApp);

// Database
const realtimeDatabase = getDatabase(firebaseApp);

export { firebaseApp, firebaseAuth, realtimeDatabase };
