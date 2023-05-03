const containerEl = document.querySelector(".container");
const careers = ["Football Player","Web Developer","Learner"];

let i = 0;
let charIndex = 0;

updateText();

function updateText() {
    charIndex++;
    containerEl.innerHTML = `<h1>I am ${careers[i].slice(0,charIndex)}</h1>`;
    if(charIndex === careers[i].length){
        i++;
        charIndex = 0;
    }
    if(i === careers.length){
        i = 0;
    }
    setTimeout(updateText,200);
}
