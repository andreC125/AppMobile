import FirebaseKeys from './config';
import firebase from 'firebase';
require('firebase/firestore');



class Fire{
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
              apiKey: "AIzaSyDY3G2nk71ccRnJDGslAjYjPbcPqFEVhfc",
              authDomain: "appmobile-11d3b.firebaseapp.com",
              databaseURL: "https://appmobile-11d3b.firebaseio.com",
              projectId: "appmobile-11d3b",
              storageBucket: "appmobile-11d3b.appspot.com",
              messagingSenderId: "769949981064",
              appId: "1:769949981064:web:b58f1f1e004dc4f07c823d",
              measurementId: "G-4MESXR7LZ0"


            });
        }
    };

    addPost = async ({text, localUri}) => {
      const remoteUri = await this.uploadPhotoAsync (localUri)

      return new Promise((res, rej) => {
       this.firestore.collection("posts").add({
         text,
         uid: this.uid,
         timestamp: this.timestamp,
         image: remoteUri
       })
       .then(ref => {
         res(ref);
       })
       .catch(error => {
         rej(error);
       });
     });
    };

    uploadPhotoAsync= async uri => {
      const path =  `photos/${this.uid}/${Date.now()}.jpg`

      return new Promise(async (res, rej) => {
              const response = await fetch (uri)
              const file = await response.blob()

              let upload = firebase.storage().ref(path).put(file)

              upload.on("state_changed", snapshot => {}, err => {
                rej(err)
              },
              async () => {
                const uri = await upload.snapshot.ref.getDownloadURL()
                res(url)
              }
            );
        });
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {

        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };

            this.db.push(message);
        });
    };


    parse = message => {
        const {user, text, timestamp} = message.val();
        const {key: _id} = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
    get timestamp(){
      return Date.now();
    }
}

export default new Fire();
