// Coca-Cola Scholars Foundation Educator of Distinction Award Presentation with Misty II Robot

// moving head commands

misty.Debug("The skill is starting!")

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

//Misty playing sounds - saying congratulations 
misty.PlayAudio("s_SystemSuccess.wav", 100); // audio file, max volume
misty.Pause(3000); // pause for 3 seconds before next command
misty.PlayAudio("congratulations_new_long.wav", 100);
misty.Pause(25000);
misty.PlayAudio("hendrix part 2.wav", 100);
misty.Pause(40000); 

// Misty final sound - bye bye before leaving
misty.PlayAudio("s_PhraseByeBye.wav", 100); // audio file, max volume
misty.Pause(2000); //pause for 2 seconds before next command 

// Misty waving right arm after saying bye-bye
function waveRightArm() {
    misty.MoveArmDegrees("right", -80, 30); //right arm up position
    misty.Pause(3000); //pause for 3 seconds with arm up
    misty.MoveArmDegrees("both", 80, 30); //right arm down position
}
waveRightArm();

/*
// Facial recognition section 
function _registerFaceRec() { //Misty looks for faces

}
function _registerFaceRec() {
    misty.StopFaceRecognition(); //cancel current facial rec
    misty.StartFaceRecognition(); //start new facial rec
    misty.AddPropertyTest("FaceRec", "Label", "exists", "", "string");
    // AddPropertyTest eventName, label of face exists, callback
    misty.RegisterEvent("FaceRec", "FaceRecognition", 1000, false); 
    // RegisterEvent eventName, debounce millisec, keepAlive F
}

// FaceRec function events start this callback function
function _FaceRec(data) { 
    var faceDetected = //stores value of detected Face
data.PropertyTestResults[0].PropertyParent.Label;
// logs a debug message with the label of the detected face
    misty.Debug("Misty sees " + faceDetected);

    if(faceDetected == "Annie") { 
        misty.DisplayImage("e_Joy.jpg"); 
        misty.PlayAudio("s_Joy3.wav"); 
        waveRightArm();
        // command center used to train misty to recognize face,
        // then if misty recognizes you, she waves&looks happy
    }
    //elseif (faceDetected == "unknown person") {
       // misty.DisplayImage("e_Contempt.jpg");
       // misty.PlayAudio("s_DisorientedConfused4.wav");
        // not sure if we want this other than the first line??
    //}
    misty.RegisterTimerEvent("registerFaceRec", 7000, false);
    // timer event to start registerFaceRec loop every 7 seconds
}

_registerFaceRec();
// check all of facerec code - then try retraining, then test on misty 
*/
