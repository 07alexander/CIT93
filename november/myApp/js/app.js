/**
 * Created by Alex on 9/29/2016.
 */
(function(){
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyDf3jyQc5JUmQh2gdnk05wFwhZ3C7IxsfA",
        authDomain: "cit93-ddca2.firebaseapp.com",
        databaseURL: "https://cit93-ddca2.firebaseio.com",
        storageBucket: "cit93-ddca2.appspot.com",
        messagingSenderId: "648651530247"
    };
    firebase.initializeApp(config);

    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    //Add login event
    btnLogin.addEventListener('click',  e => {
        //Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
    //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

    });

    btnSignUp.addEventListener('click', e => {
        //Add sign up event
        //Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e=>console.log(e.message));
    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        window.location.reload();
    });

    //Add a real time listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
            btnLogin.classList.add('hide');
            txtEmail.classList.add('hide');
            txtPassword.classList.add('hide');
            btnSignUp.classList.add('hide');
            showMain();
        }else{
            console.log("not logged in'");
            btnLogout.classList.add('hide');
        }
    });


}());


const userData = {
    "name":"a",
    "pass":"a"
};

const lists = [ //To implement button to show respective content for article
    {
        title: "Inbox",
        method: function(){ //Need to make button only clickable once
            const newDiv = document.createElement("div");
            const button = document.createElement("div");
            button.className = "color-change";
            const newContent = document.createTextNode(lists[0].title); //Testing
            const buttonAdd = document.createTextNode("Add new list");
            newDiv.appendChild(newContent);
            button.appendChild(buttonAdd);
            document.getElementById('aContent').appendChild(newDiv);
            document.getElementById('aContent').appendChild(button);
            button.onclick= lists[0].button;
        },
        button: function(){ //Working, but needs to implement dynamic functionailty and for user input
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode(lists[0].tasks[0]);
            const checkBox = document.createElement("INPUT");
            checkBox.setAttribute("type", "checkbox");
            newDiv.appendChild(newContent);
            document.getElementById('aContent').appendChild(newDiv);
            document.getElementById('aContent').appendChild(checkBox); //Check box is here, but no functionailty yet.

        },
        tasks: ["new"]
    },
    {
        title: "Today",
        method: function(){alert("Today");}
    },
    {
        title: "Week",
        method: function(){alert("Week");}
    },
    {
        title: "Create New List",
        method: function(){alert("Create New Task");}
    },
    {
        title: "Sign Out",
        method: function () {
            alert("Sign Out");
        }
    },
    {

        title: "Greeting",
        method: function (){
            const greet = function(name) { //Implemented IIFE
                return 'Hello ' + name;
            }(userData.name);
            alert(greet);
        }
       // method2: function(){
            //console.log(lists[5].method(userData.name))
        //}
    }
];

function showNav(item) {
    const newDiv = document.createElement("div");
    newDiv.className = "color-change";
   const newLine = document.createElement("br");
    const title = document.createTextNode(item.title);
    newDiv.appendChild(newLine);
    newDiv.appendChild(title);
    newDiv.onclick = item.method; //Didn't need addEventListener
    //newDiv.onclick = item.method2; //Calling method 2
    document.getElementById('nContent').appendChild(newDiv);
}

function showMain(){
    document.getElementById('title').className='hide';
    document.getElementById('article').style.background="#333333";
    lists.forEach(showNav);


}


