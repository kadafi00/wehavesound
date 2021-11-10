function playCraps() {
  console.log("playCraps() started");
  debugger;
  var die1 = Math.ceil(Math.random() * 6);
  var die2 = Math.ceil(Math.random() * 6);
  var sum = die1 + die2;
  document.getElementById("die1Res").innerHTML = die1;
  document.getElementById("die2Res").innerHTML = die2;
  document.getElementById("sum1Res").innerHTML = sum;

  if (sum == 7 || sum == 11) {
    document.getElementById("FinalRes").innerHTML = "CRAPS - you lose";
    // This line takes the number 7 and 11 and assigns the statement,
    // "CRAPS - you lose" if either of those numbers come up when the equations take place
  } else if (die1 == die2 && die1 % 2 == 0) {
    document.getElementById("FinalRes").innerHTML = "DOUBLES - you win";
    // This line takes die1 and die2 which are random numbers multiplied by 6 then mods those by two
    // If you get a number that fits those parameters you get the statement, " Doubles - you win"
  } else {
    document.getElementById("FinalRes").innerHTML =
      "Draw - You did not win or lose, please try again.";
    // This line takes the random number that has been mulitplied by 6 and if it is any number that isn't one
    // that does not fit the parameters of the functions above
    // It states, "Draw - You did not win or lose, please try again."
  }
  // This entire else, esle if and else statement runs the onclick button and allows you to play craps
  // Stating various things whether you win, lose or draw based upon the outcome of the equations
}

function betterBlastOff() {
  console.log("betterBlastOff() started");
  var currTime = 50;
  for (var i = 0; i <= 10; i = i + 1) {
    // The for loop assigns a var I 0, then states if it is less than or equal to 10, continue added 1 thus creating 11 timers
    setTimeout(function() {
      if (currTime > 25) {
        document.getElementById("countDownTimer").innerHTML = currTime;
        // This here states if currTime is greater than 25 it'll display currTime
      } else if (currTime == 0) {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!";
        // When the countdown is equal to 0 it uses the getElementById else if statement to write to the HTML
        // the phrase Blast Off!
      } else {
        document.getElementById("countDownTimer").innerHTML =
          "Warning Less than ½ way to launch, time left = " + currTime;
        // When currTime is less than 25, this else statement writes to the HTML
        // the warnig and continues the countdown timer
      }
      currTime = currTime - 5;
    }, 5000 * i);
    // The timeout functon takes the var currTime, which has been assigned the value 50
    // It then takes that value, subtracts by 5 every 5 seconds using the 5000 * i equation
  }
}

function start() {
  console.log("start() function started");
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
}
function stop() {
  console.log("stop() function started");
  document.getElementById("startButton").disabled = false;
  document.getElementById("stopButton").disabled = true;
}
$(document).ready(function() {
  var song = document.getElementById("myAudio");
  var playPause = "play";

  function playPause() {
    console.log("playPause() Started");
    if (playPause_status == "pause") {
      song.play();
      playPause_status = "play";
    } else {
      song.pause();
      playPause_status = "pause";
    }
  }
});
