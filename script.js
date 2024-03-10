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


button.addEventListener("click", function () {

    speech.text = document.querySelector("textarea").value
    window.speechSynthesis.speak(speech);




})

