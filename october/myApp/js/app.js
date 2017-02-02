/**
 * Created by Alex on 9/29/2016.
 */
//var listBody =



var userData = {
    "name":"a",
    "pass":"a"
};

var blogPosts = [
    {
    title: "Best APP Ever!",
    author: "Alexander Phosykeo",
    date: "10/4/2016",
    divID: "blog1",
    markUp: "This is content of blog post with html included <strong>see</strong>."
    },
    {
    title: "I never miss my deadlines anymore!",
    author: "John Johnson",
    date: "9/3/2016",
    divID: "blog2",
    markUp: "This is content of blog post with html included <strong>see</strong>."
    },
    {
    title: "How did I ever live before this APP?!",
    author: "Jonny Jon Jonnerson",
    date: "8/29/2016",
    divID: "blog3",
    markUp: "This is content of blog post with html included <strong>see</strong>."
    }
    ];

var lists = [ //To implement button to show respective content for article
    {
        title: "Inbox",
        method: function(){ //Need to make button only clickable once
            var newDiv = document.createElement("div");
            var button = document.createElement("div");
            button.className = "color-change";
            var newContent = document.createTextNode(lists[0].title); //Testing
            var buttonAdd = document.createTextNode("Add new list");
            newDiv.appendChild(newContent);
            button.appendChild(buttonAdd);
            document.getElementById('aContent').appendChild(newDiv);
            document.getElementById('aContent').appendChild(button);
            button.onclick= lists[0].button;
        },
        button: function(){ //Working, but needs to implement dynamic functionailty and for user input
            var newDiv = document.createElement("div");
            var newContent = document.createTextNode(lists[0].tasks[0]);
            var checkBox = document.createElement("INPUT");
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
    }
];
function showBlog(item){
    var newDiv = document.createElement("div");
    newDiv.className = "flex-items blog";
    var newContent = document.createTextNode(item.title);
    var newLine = document.createElement("br");
    var newAuthor = document.createTextNode(item.author);
    var newDate = document.createTextNode(item.date);
    var newMarkUp = document.createTextNode(item.markUp);
    newDiv.appendChild(newContent);
    newDiv.appendChild(newLine);
    newDiv.appendChild(newAuthor);
    newDiv.appendChild(newDate);
    newDiv.appendChild(newMarkUp);
    document.getElementById('showBlog').appendChild(newDiv);
}

function showNav(item) {
    var newDiv = document.createElement("div");
    newDiv.className = "color-change";
    var newLine = document.createElement("br");
    var title = document.createTextNode(item.title);
    newDiv.appendChild(newLine);
    newDiv.appendChild(title);
    newDiv.onclick = item.method; //Didn't need addEventListener
    document.getElementById('nContent').appendChild(newDiv);
}

function showLogin(){
    document.getElementById("createUser").className=' not-visible';
    document.getElementById('showLogin').className='block';
}
function showSignUp(){
    document.getElementById("createUser").className=' block';
    document.getElementById('showLogin').className='not-visible';
}

function clearLogin(){
    document.getElementById("username").value ="";
    document.getElementById("password").value = "";
}

function loginUser(){
    var loginName= document.getElementById('username').value;
    var loginPass= document.getElementById('password').value;
    console.log(loginName);
    console.log(loginPass);
    console.log(userData);
    if (loginName === userData.name && loginPass === userData.pass){
        showMain();
    } else{
        alert("Wrong Username or Password, try again.");
        clearLogin();
    }
    return false;
}

function newUser(){ //Still trying to implement sign up form for new app
    var newUser = document.getElementById('createName').value;
    var newUserPass = document.getElementById('createPassword').value;
        userData.name = newUser;
        userData.pass = newUserPass;
    console.log(userData);
    showLogin();
    alert("Thank You for signing up! You may now login...");
    return false;
}


function showMain(){
    document.getElementById('showLogin').className = ' not-visible';
    document.getElementById('title').className='not-visible';
    document.getElementById('showBlog').className='not-visible';
    document.getElementById('article').style.background="#333333";
    lists.forEach(showNav);

}

blogPosts.forEach(showBlog);
