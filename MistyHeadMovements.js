// MistyHeadMovements.js

// moving head commands

misty.Debug("The HelloWorld skill is starting!")

// returns a random integer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 // look_around timer needs this callback function below
 function _look_around(repeat = true) {
    // 3 separate positions for pitch/updown, roll/leftright, yaw/turnLR
    misty.MoveHeadDegrees(
        getRandomInt(-40,0),   //pitch: 29 (down) to -40 (up)
        getRandomInt(-30,30),   //roll: -40 (left) to 40 (right)
        getRandomInt(-40,40),   //yaw: -81 (right) to 81 (left)
        null,
    1); // duration of 1 second is used here for smoother head movement  
        // as compared to velocity

    // to repeat the head motion until the skill is done
    if(repeat) misty.RegisterTimerEvent(
        "look_around",
        getRandomInt(5,10) * 1000,
    false);
}

// timer event with a callback after 5000 - 10000 milliseconds 
misty.RegisterTimerEvent("look_around", getRandomInt(5,10)*1000, false);

//LED light pulsing commands

misty.TransitionLED(140, 0, 220, 0, 0, 0, "Breathe", 1000);
    // RGB values for purple, RGB values for black, transition type
    // to breathe, duration of 1 second
