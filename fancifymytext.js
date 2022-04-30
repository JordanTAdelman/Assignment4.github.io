const buttonBigger = () => {document.getElementById("textInputBox").style.fontSize = "24pt"};

const text = document.getElementById("textInputBox");

function forRadioFancy(){
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
}

function forRadioBoring(){
    text.style.fontWeight = "Normal";
    text.style.color = "Black";
    text.style.textDecoration = null;
    text.style.fontSize = "10pt";
    text.style.textTransform = null;
    var string = text.value;
    var endOfSentence = string.split("-Moo");
    text.value = endOfSentence.join(".");

}

function buttonMoo(){
    text.style.textTransform = "uppercase";
    var string = text.value;
    var endOfSentence = string.split(".");
    text.value = endOfSentence.join("-Moo");
    
    };