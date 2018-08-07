import firebase from 'firebase/app'
import 'firebase/database'

import FirebaseConfig from "./keys";

firebase.initializeApp(FirebaseConfig);

export const databaseRef = firebase.database();

//export const todosRef = databaseRef.child("todos");
