console.log("js file");

const dynamicText = document.getElementsByClassName("dynamic-text")[0];

const skills = ["node js....", "java....", "python....", "micro services....", "containers....", "kubernetes....", "react....", "postgres SQL....", "Mongo db....."]

// let word = 0, ch = 0;
// let displayText = '';
// setInterval( () => {
//     if(ch == skills[word].length){
//         word++;
//         if(word == skills.length)   word = 0;
//         ch = 0;
//         displayText = '';
//     }
//     displayText += skills[word].charAt(ch);
//     dynamicText.textContent = displayText;
//     ch++
// }, 250);

let skillIndex = 0, letterIndex = 0, displayText = '';

function printLetters(){

    if(letterIndex == skills[skillIndex].length){
        clearLetters();
    }else if(letterIndex < skills[skillIndex].length){
        displayText += skills[skillIndex][letterIndex];
        dynamicText.textContent = displayText;
        letterIndex++;
        setTimeout(printLetters, 150);
    }
}

function clearLetters(){
    if(letterIndex > -1){
        displayText = displayText.substring(0, letterIndex);
        dynamicText.textContent = displayText;
        letterIndex--;
        setTimeout(clearLetters, 100);
    }else{
        skillIndex = (skillIndex + 1) % skills.length;
        letterIndex++;
        printLetters();
    }
}

printLetters();