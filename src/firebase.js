
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAJC0cRIbShpXssUh5nWCTAl2y9su_vRKg",
  authDomain: "diablo-4a283.firebaseapp.com",
  projectId: "diablo-4a283",
  storageBucket: "diablo-4a283.firebasestorage.app",
  messagingSenderId: "737165965620",
  appId: "1:737165965620:web:09571c4ad9d4912a4f8d61"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async(name,email,password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth,email,password);
       const user = res.user;
       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
       })
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}


const login =  async(email,password)=>{
    try {
      await signInWithEmailAndPassword(auth,email,password); 
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
} 

const logout = ()=>{
    signOut(auth);
}

export{auth,db,login,signup,logout};
