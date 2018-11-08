import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCjDxHH6qjI1JTRIxO-9ApcFt7HUCJPeuQ",
    authDomain: "photowall-7bc7b.firebaseapp.com",
    databaseURL: "https://photowall-7bc7b.firebaseio.com",
    projectId: "photowall-7bc7b",
    storageBucket: "photowall-7bc7b.appspot.com",
    messagingSenderId: "322678753708"
  };

firebase.initializeApp(config)

const database = firebase.database()

export {database}
