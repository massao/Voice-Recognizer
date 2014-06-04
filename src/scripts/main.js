var root = this;
var SpeechRecognition = root.SpeechRecognition ||
						root.webkitSpeechRecognition ||
						root.mozSpeechRecognition ||
						root.msSpeechRecognition ||
						root.oSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.onresult = function(e) {
	console.log(e);
}

recognition.start();
