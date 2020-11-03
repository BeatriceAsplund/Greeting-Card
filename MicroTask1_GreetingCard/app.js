const messageElement = document.getElementById("message");
const backgroundColorElement = document.getElementById("backgroundColor");
const fontElement = document.getElementById("font");
const fontColorElement = document.getElementById("fontColor");
const fontSizeElement = document.getElementById("fontSize");
const outputElement = document.getElementById("output");
const cardElement  = document.getElementById("card");
const buttonElement = document.getElementById("btnProcess");

buttonElement.addEventListener("click", greetingCard);

function greetingCard() {

    const backgroundColor = backgroundColorElement.value;
    cardElement.style.backgroundColor = backgroundColor;

    const font = fontElement.value;
    outputElement.style.fontFamily = font;

    const fontColor = fontColorElement.value;
    outputElement.style.color = fontColor;

    const fontSize = fontSizeElement.value;
    outputElement.style.fontSize = fontSize;

    const message = messageElement.value;
    outputElement.innerText = message;
}
