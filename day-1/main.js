console.log("js file");

const dynamicText = document.getElementsByClassName("dynamic-text")[0];

const skills = ["node js....", "java....", "python....", "micro services....", "containers....", "kubernetes....", "react...."]

// let index = 0;
// const job = setInterval(()=>{
//     if(index == skills.length)  index = 0;
//     dynamicText.textContent = skills[index];
//     index++;
// }, 1000)

// setTimeout(()=>{
//     clearInterval(job);
// }, 1000 * skills.length);

let word = 0, ch = 0;
let displayText = '';
setInterval( () => {
    if(ch == skills[word].length){
        word++;
        if(word == skills.length)   word = 0;
        ch = 0;
        displayText = '';
    }
    displayText += skills[word].charAt(ch);
    dynamicText.textContent = displayText;
    ch++
}, 200);