/**
 * Created by Alex on 9/2/2016.
 */

//Refactored userData into an object
var userData = {
    "name":"alex",
    "pass":"admin"
};

// Unused function for now
function showHeader(){
    var appTitle='Water Consumption App';
    var appDev='Alexander Phosykeo';
    var headContent= 'Welcome to ' +appTitle + '<br>Track How Much Water You Drink!' +' <br>Created By<br> ' + appDev ;
    var el = document.getElementById('hContent');
    el.innerHTML = headContent;
    document.getElementById('hButton').className = ' not-visible';
}
function showNav(){
   // var el = document.getElementById('nContent');
   // var navContent="Welcome Back, " + userData.name +"!";
    //el.innerHTML =navContent;
    document.getElementById('nButton').className = ' not-visible';
    document.getElementById('login').className = ' not-visible';
    document.getElementById('password').className = ' not-visible';
    document.getElementById('nav').className =' not-visible';
    document.getElementById('aside').style.display='block';
    document.getElementById('article').style.display='block';
    document.getElementById('footer').style.display='block';
}
function showArticle(){
    var today = new Date();
    var day= today.getDate();
    var weekDay = new Array(7); // Using this array so I can use getDate() to return the correct week day
    weekDay[0]=  "Sunday";
    weekDay[1] = "Monday";
    weekDay[2] = "Tuesday";
    weekDay[3] = "Wednesday";
    weekDay[4] = "Thursday";
    weekDay[5] = "Friday";
    weekDay[6] = "Saturday";

    var month = new Array(); //Added arrays for months too
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var year= today.getFullYear();

    //Need to add variables in place of the fillers
    var todayIntake= "102oz";
    var remainingWater= "98oz";
    var articleContent="Welcome Back "+ userData.name+ "!<br>" + "Today is " + weekDay[today.getDay()] + ", " + month[today.getMonth()] + " " + day + ", " + year + "<br>So Far You Have Consumed: " + todayIntake + "<br>Remaining Water Needed to Meet Today's Goal: " + remainingWater;
    var el = document.getElementById('aContent');
    el.innerHTML = articleContent;
    document.getElementById('aButton').className = 'not-visible';
}
var logCount=0;
function showAside(){
    //Trying to add multiple stacking logs to display
    var currTime = new Date();
    var asideContent ="TIME||" + currTime.getHours()+":"+currTime.getMinutes()+"<br>" + waterLog[logCount] +"oz<br>";
    var el = document.getElementById('asContent');
    el.innerHTML = asideContent;
    logCount++;
}
function showFooter(){
    var dailyIntake = findDailyIntake();
    var footerContent = "You need to drink at least " + dailyIntake + " ounces of water a day.";
    var el=document.getElementById('fContent');
    el.innerHTML = footerContent;
    document.getElementById('fButton').className = ' not-visible';
    document.getElementById('fLabel').className = ' not-visible';
}
var weightLog=[]; //To log weight for future reference
function findDailyIntake() {
    var dailyIntake;
    var weightInput = document.getElementById("weight");
    weightLog.push(weightInput.value);
    console.log(weightLog);
    dailyIntake = Math.round(weightInput.value * (2/3)); //inputting weight(lbs) to convert to daily recommended water intake in ounces
    return dailyIntake;
}


/* Unused for now
function saveUserData(){
    var nameInput = document.getElementById("login");
    var passwordInput = document.getElementById("password");
    userData.push(nameInput.value,passwordInput.value);
    console.log(userData);
}
*/

var waterLog=[]; //Still working on implementing a water log
function logWater(){
    var waterInput = document.getElementById("addWater");
    waterLog.push(waterInput.value);
    console.log(waterLog);
}

function clearFields(){
    document.getElementById("addWater").value ="";
}
function clearSignUp(){
    document.getElementById("login").value ="";
    document.getElementById("password").value = "";
}
//Allowing users to use the login fields to create an account instead of using new fields
function newUser(){
    var newUser = document.getElementById('login').value;
    var newUserPass = document.getElementById('password').value;
    if(newUser=="" || newUserPass==""){ //Will check if any fields are empty
               alert("To Sign up, please enter your new account information into the appropriate fields and click Sign Up");
               clearSignUp();
           }
       else { //if not empty it will push sign up information into userData
               //userData.push(newUser, newUserPass);
                userData.name = newUser;
                userData.pass = newUserPass;
            }
    console.log(userData);
    clearSignUp();
    return false;
}
function loginUser(){
    var loginName= document.getElementById('login').value;
    var loginPass= document.getElementById('password').value;
    console.log(loginName);
    console.log(loginPass);
    console.log(userData);
   if (loginName === userData.name && loginPass === userData.pass){
       showNav();
   } else{
        alert("Error!");
       clearSignUp();
   }
   return false;
}

// Function to change the content of t2
function modifyText() {
    var t2 = document.getElementById("t2");
    if (t2.firstChild.nodeValue == "three") {
        t2.firstChild.nodeValue = "two";
    } else {
        t2.firstChild.nodeValue = "three";
    }
}

// add event listener to table
var el = document.getElementById("outside");
//el.addEventListener("click", modifyText, false);
el.addEventListener("mouseover",modifyText,false);
