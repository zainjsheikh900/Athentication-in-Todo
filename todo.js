import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {getFirestore,collection,addDoc,onSnapshot,doc,setDoc,getDoc,deleteDoc,updateDoc} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"; 
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
// import { getAuth, } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyB-fAu62JI9hGPO8D8Fv7-il9i_bJjwBok",
  authDomain: "fir-authentication-6757a.firebaseapp.com",
  projectId: "fir-authentication-6757a",
  storageBucket: "fir-authentication-6757a.appspot.com",
  messagingSenderId: "708953396720",
  appId: "1:708953396720:web:79b83fc117851fd129f935",
  measurementId: "G-LE8P9E9V5C"
};
// const user = getFirestore.auth().currentUser;
// const userId = user.uid;
const app = initializeApp(firebaseConfig);
const db = getFirestore();
// const db = getDatabase();


// const newData = {
//   key1: inp.value,
//   key2: inp.value,
// };


// database.ref('/path/to/data').push(newData);



// var database = firebase.database();

// const getinp = ref(getDatabase, 'todos');

// const newTodo = {
//     title: 'Buy groceries',
//     completed: false
//   };


//   push(todosRef, newTodo);
//   onValue(todosRef, (snapshot) => {
//     const todos = snapshot.val();
//     console.log(todos);
//   });
// ---------------------------------------
let addtodo = document.querySelector('#addtodo')
addtodo.addEventListener('click',async ()=>{
    let getinp = document.querySelector('#inp');
    const docRef = await addDoc(collection(db, "todos"),  {
        name: getinp.value,
        time: new Date().toLocaleString(),
        // id: userId,  
      });
      console.log("Document written with ID: ", docRef.id);
    })
       
let ul = document.querySelector('#getul')

function getdata(){
    onSnapshot(collection(db,'todos'),(data) => {
        data.docChanges().forEach((newData) => {
        console.log(newData.doc.data())
        if(newData.type == 'removed'){
            let del  = document.getElementById(newData.doc.id)
            del.remove()
        }
        else if(newData.type == 'added') {
                ul.innerHTML += `
                <li id=${newData.doc.id}>${newData.doc.data().name} <br> ${newData.doc.data().time} <button id='del' class="btn btn-danger" onclick="delTodo('${newData.doc.id}')">
                Delete</button> <button id='edit' class="btn btn-success" onclick="edit(this,'${newData.doc.id}')">Edit</button></li>`}
             
        })
    })
}

getdata()


async function delTodo(id){
  await deleteDoc(doc(db, "todos", id));
}

async function edit( e,id){
  let updatetime = new Date().toLocaleString()
  let updatename = prompt('CHANGE A NAME')
  e.parentNode.firstChild.nodeValue = updatename;
  await updateDoc(doc(db, "todos", id), {
    name: updatename,
    time : updatetime
  });
}
// let delall = document.querySelector('#delall')
 
async function deleteall(){
    deleteall.addEventListener('click',(e)=>{
      onSnapshot(collection(db, 'todos'), (data) => {
        data.docChanges().forEach((newData) => {
          console.log(newData.doc.id) 
        })})
      })
    await deleteDoc(doc(db, "todos", newData.doc.id));
  }



    window.deleteall = deleteall
    window.edit = edit
    window.delTodo = delTodo
    window.getdata = getdata   
    // <------------------Firestore----commenting----->

// function foo(){
//     var a = document.getElementById("inp")
//     var li = document.createElement('li')
//     var litext = document.createTextNode(a.value)
//     li.appendChild(litext)
//     getul.appendChild(li)
//     a.value = ''
//     var deletebtn = document.createElement('button')
//     var deletebtnText = document.createTextNode('Delete')
//     deletebtn.appendChild(deletebtnText)
//     li.appendChild(deletebtn)
//     deletebtn.setAttribute('onclick','del(this)')
//     var editbtn = document.createElement('button')
//     var editbtnText = document.createTextNode('Edit')
//     editbtn.appendChild(editbtnText)
//     li.appendChild(editbtn)
//     editbtn.setAttribute('onclick','editfun(this)')
//     deletebtn.setAttribute('class', 'btn btn-danger aaa')
//     editbtn.setAttribute('class', 'btn btn-info aaa')
    // console.log(litext);
    // console.log(li);
    
    // console.log(a);
    // document.write(a);
// }
// function deleteall(){
//         getul.innerHTML = ''
// }

// function del(e){
//         e.parentNode.remove()

// }
// function editfun(e){
//         var a = prompt('Enter Edit value',e.parentNode.firstChild.nodeValue )
//         e.parentNode.firstChild.nodeValue = a


// }

// import { collection, addDoc } from "firebase/firestore"; 

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }



// function foo(){
//     var a = document.getElementById('inp').value
//     console.log(a)

// }

