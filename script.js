var int;
var minutesS;
var secondsS;
var minutesB;
var secondsB;
var once = true;

function notification(key){
  switch (key) {
    case "1":
      var crash = new Audio("sound1.mp3");
      crash.play();
      break;

      case "2":
        var kick = new Audio("sound2.mp3");
        kick.play();
        break;

      case "3":
        var snare = new Audio("sound3.mp3");
        snare.play();
        break;

      case "4":
        var tom1 = new Audio("sound4.mp3");
        tom1.play();
        break;

    default: consol.log(buttonInnerHTML);
  }
}



window.onload = function() {
  minutesS = parseInt(document.getElementById("minInputS").value);
  secondsS = parseInt(document.getElementById("secInputS").value);
  minutesB = parseInt(document.getElementById("minInputB").value);
  secondsB = parseInt(document.getElementById("secInputB").value);

};

function study(sm, ss){
  clearInterval(int);
  countdown(sm, ss, "Study");
  setTimeout(function(){document.getElementById("status").innerHTML = "Study";}, 1000);
}

function rest(bm, bs){
  clearInterval(int);
  countdown(bm, bs, "Rest");
  setTimeout(function(){document.getElementById("status").innerHTML = "Break";}, 1000);
}

var toggle = true;

function pause(){
  if(toggle){
    document.body.removeAttribute("id");
    toggle = false;
    if (once){
      once = false;
      study(minutesS, secondsS);
    }
    document.getElementById("button").innerHTML = "Pause";
  } else {
    document.body.setAttribute("id", "pause");
    toggle = true;
    document.getElementById("button").innerHTML = "Resume";
  }
}


function popUp(){
  document.getElementById("popUp").classList.remove("invisible");
}

function closeP(){
  document.getElementById("popUp").classList.add("invisible");
  clearInterval(int);
  minutesS = parseInt(document.getElementById("minInputS").value);
  secondsS = parseInt(document.getElementById("secInputS").value);
  document.getElementById("min").innerHTML = ('0' + minutesS.toString()).slice(-2);
  document.getElementById("sec").innerHTML = ('0' + secondsS.toString()).slice(-2);
  minutesB = parseInt(document.getElementById("minInputB").value);
  secondsB = parseInt(document.getElementById("secInputB").value);
  study(minutesS, secondsS);
}


function countdown(m, s, status){
  int = setInterval(function(){
    if(document.getElementById("pause") === null){
      document.getElementById("min").innerHTML = ('0' + m.toString()).slice(-2);
      document.getElementById("sec").innerHTML = ('0' + s.toString()).slice(-2);

      if (s !== 0){
        s--;
      } else if (m !== 0 ){
        m--;
        s = 59;
      } else if (m === 0 && s === 0){
        status === "Study" ? rest(minutesB, secondsB) : study(minutesS, secondsS);

        let sound = document.getElementById("sounds");
        let soundValue = sound.value;
        notification(soundValue.toString());
      }
    } else {

    }
  }, 1000);
}
