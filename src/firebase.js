import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBn_SF0OqxZ3sN7tOtwOd8OOgwlWizxSVE',
  authDomain: 'liveblogplatform.firebaseapp.com',
  databaseURL: 'https://liveblogplatform.firebaseio.com',
  projectId: 'liveblogplatform',
  storageBucket: 'liveblogplatform.appspot.com',
  messagingSenderId: '141086114772'
}

firebase.initializeApp(config)

export { firebase }
