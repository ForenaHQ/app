// Packages:
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
import { getStorage } from 'firebase/storage'


// Constants:
const firebaseConfig = {
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
}


// Exports:
export const APP = initializeApp(firebaseConfig)
export const AUTH = getAuth(APP)

const FIRESTORE = getFirestore(APP)
const REALTIME = getDatabase(APP)
export const DATABASE = {
  FIRESTORE,
  REALTIME
}

export const FUNCTIONS = getFunctions(APP)
export const STORAGE = getStorage(APP)
