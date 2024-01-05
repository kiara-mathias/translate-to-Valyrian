import "styles.css";
var button = document.querySelector("#btn-translate");
var input = document.querySelector("#txt-input");
var Output = document.querySelector("#output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/valyrian.json";

function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text;
  //? ---> starts query parameters
  //"text=" ----> is the value
  // text ----> key
}
function errorHandler(error) {
  console.log("error occured:", error);
  alert("something went wrong with the server! Try again after a while");
}

function clickEventHandler() {
  // Output.innerText = "lalala " + input.value;
  var inputText = input.value; // taking input

  fetch(getTranslationUrl(inputText))
    .then((response) => response.json())
    //  .then((json) =>  console.log(json.contents.translated))
    .then((json) => {
      var translatedText = json.contents.translated;
      Output.innerHTML = translatedText;
    })
    .catch(errorHandler);
}
button.addEventListener("click", clickEventHandler);
