let speech = new SpeechSynthesisUtterance();

const button = document.querySelector("#bttn");
const voiceSelect = document.querySelector("select")

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {

    voices = window.speechSynthesis.getVoices(); // corrected
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))); // corrected
}

voiceSelect.addEventListener("change", function () {
    speech.voice = voices[voiceSelect.value];

})


let speaking = false; 

button.addEventListener("click", function () {
    if (!speaking) {
        speech.text = document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
        speaking = true;

    } else {
        window.speechSynthesis.cancel(); 
        speaking = false;
    }
});

