/***************************
 *** STARTING THE GAME *****
 ***************************/

//Checks for user to click the Begin button
document.getElementById('beginButton').addEventListener('click', startGame);

//When user clicks Begin button, the tutorial is hidden and the game is displayed.
function startGame() {
    document.getElementById('tutorialSection').style.display = "none";
    document.getElementById('gameSection').style.display="flex";
}

/***************************
 *** TWITTER MECAHNIC *****
 ***************************/
let tweetCount = 0;
let followerCount = 0;
let growthFactor = 1;
let potentialStudentCount = 0;
let newPotentialStudents = 0;
let clickCount = 0;




//When the user clicks the tweet img, they send out a tweet.
 document.getElementById('tweetButton').addEventListener('click', sendATweet);

 //Sends a tweet and calls associated subfunctions
 function sendATweet() {
     increaseClickCount();
     increaseTweetCounter();
     increaseFollowerCount();
     increaseGrowthFactor();
     increasePotentialStudentCount();
     displayHostClassSection();
     console.log(clickCount);
 }

 //Adds 1 to click counter, then resets it after 10
function increaseClickCount() {
    clickCount = clickCount + 1;
    if (clickCount > 10) {
        clickCount = 0;
    }
}

 //Adds 1 to tweet counter
function increaseTweetCounter() {
    tweetCount = tweetCount + 1;
    document.querySelector('#twitterNumOfTweetsCount').innerText = tweetCount
}

//Increases growth factor by 0.01
function increaseGrowthFactor() {
    growthFactor = growthFactor + 0.03;
}

//Increases follower count by a random number multiplied by growthFactor
function increaseFollowerCount() {    
let randomFollowers = Math.floor(Math.random()* 2);
let newFollowers = randomFollowers * growthFactor;
 followerCount = followerCount + newFollowers;
 followerCount = Math.round(followerCount);
 document.querySelector('#twitterFollowerCount').innerText = followerCount;
}


//Increase potential student counter by a random number multiplied by followerCount
function increasePotentialStudentCount() {
    if (clickCount === 10 && newPotentialStudents < 1000) {
        newPotentialStudents = newPotentialStudents + 1;
    } else {}

    if (followerCount < 1000 && newPotentialStudents < followerCount / 7) {
        newPotentialStudents = followerCount / 7
    } else if (followerCount > 1000 && newPotentialStudents < followerCount / 2) {
        newPotentialStudents = followerCount / 2 
        newPotentialStudents = newPotentialStudents + 63
    } else {}
    newPotentialStudents = Math.round(newPotentialStudents);
    document.querySelector('#twitterPotentialStudentsCount').innerText = newPotentialStudents;
}

//Sets up passive twitter follower gains over time. 
window.setInterval (function gainPassiveFollowers() {
    if (followerCount > 50 && followerCount < 150) {
    followerCount = followerCount + 1;
    } else if (followerCount >= 150 && followerCount < 400) {
        followerCount = followerCount + 2;   
    } else if (followerCount >= 400 && followerCount < 1000 ) { 
        followerCount = followerCount + 3;
    } else {}
    document.querySelector('#twitterFollowerCount').innerText = followerCount
}, 2000);

//Checks to display class mechanic
function displayHostClassSection(){ 
    if (followerCount > 1) {
        document.querySelector('#hostClassSection').style.display = "block";
    }
}

/***************************
 *** CLASS MECAHNIC *****
 ***************************/
 let currentStudents = 0;
 let classCount = 0;
 let employedCount = 0;
 

 //listens for Host Button Clicks
document.querySelector('#hostClassButton').addEventListener('click', doHostClass);

//Hosts class whenh the Host Class button is clicked
function doHostClass() {
moveStudents();
increaseClassCount();
runStream();
employStudents();

document.querySelector('#twitterPotentialStudentsCount').innerHTML = newPotentialStudents;
document.querySelector('#studentCount').innerHTML = currentStudents;
document.querySelector('#classCount').innerHTML = classCount;
document.querySelector('#employedStudents').innerHTML = employedCount;
}

//Stream GIF & Button toggle
const streamOffline = document.querySelector('#streamOffline');
const streamOnline = document.querySelector('#streamOnline');
const hostButton = document.querySelector('#hostClassButton');
const classRunning = document.querySelector('#classRunning');

 function runStream(){
     streamOffline.classList.toggle('hidden');
     streamOnline.classList.toggle('hidden');
     hostButton.classList.toggle('hidden');
     classRunning.classList.toggle('hidden');

     setTimeout(function(){
        streamOffline.classList.toggle('hidden');
        streamOnline.classList.toggle('hidden');
        hostButton.classList.toggle('hidden');
        classRunning.classList.toggle('hidden');
    }, 12000);
 }
//Adds one to class count when Host Button is clicked
function increaseClassCount(){
    classCount = classCount + 1;
}

//Moves potential students to Current Students
function moveStudents(){
currentStudents = currentStudents + newPotentialStudents / 5; 
newPotentialStudents = newPotentialStudents / 5 * 4;
currentStudents = Math.round(currentStudents);
newPotentialStudents = Math.round(newPotentialStudents);
} 

//Moves current students to employed
function employStudents(){ 
    setTimeout(function(){
        if (classCount > 10 && currentStudents >= 10){ 
            employedCount = employedCount + currentStudents / 5;
            currentStudents = currentStudents / 5 * 4;
            currentStudents = Math.round(currentStudents);
            employedCount = Math.round(employedCount); 
            } else {}

            document.querySelector('#employedStudents').innerHTML = employedCount
    }, 12000);  
    
    setTimeout(function(){ 
        winGame();
    }, 13000);
}

//checks win state 
function winGame(){
    if (employedCount > 99){
        document.getElementById('gameSection').style.display = "none";
        document.getElementById('winGameSection').style.display = "flex";
    }
}

document.getElementById('playAgainButton').addEventListener('click', playAgain)
function playAgain(){
    window.location.reload();
}

//cheat
document.getElementById('cheat1').addEventListener('click', cheat1) 

function cheat1(){ 
tweetCount = 2000;
followerCount = 2000;
growthFactor = 1;
potentialStudentCount = 2000;
newPotentialStudents = 2000;
clickCount = 0;
currentStudents = 2000;
classCount = 2000;
employedCount = 0;
} 
