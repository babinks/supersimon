var status_partie="";
var status_play="";
var question="";

function bouton_start()
{
  if (status_partie=="en cours")
  {
    reponse_confirm=confirm("Voulez-vous stoper la partie en cours ?");
    if (reponse_confirm)
    {
      document.forms[0].start.value="Start";
      status_partie="";
      status_play="";
      question="";
      document.forms[0].message.value="Alright";
    }
  }
  else
  {
    speed=coeff_vitesse+70*(4-(document.forms[0].vitesse.selectedIndex));
    document.forms[0].start.value="Stop";
    status_partie="en cours";
    status_play="";
    question="";
    document.forms[0].score.value="0";
    document.forms[0].message.value="C'est parti...";
    add_to_question();
  }
}





/*____________________________________________________Compteur_________________________________________________________*/
    var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

/*____________________________________________________Clicker_________________________________________________________*/


/*____________________________________________________Chrono_________________________________________________________

    var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
window.onload = chronoStart;
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").value = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").value = "0:00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").value = "0:00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}
*/

