function handleClick(){
    alert("You have clicked a button");
}

// document.getElementById("btn-1").onclick = handleClick;

// Recommended way
document.getElementById("btn-1").addEventListener("click", handleClick);


const handleMouseOver = (event) => {
    console.log('Mouse over event', event);
}

document.getElementById("start").addEventListener("click", (event) => {
    console.log("Mouse event started", event);
    document.addEventListener("mouseover", handleMouseOver);
})


document.getElementById("stop").addEventListener("click", (event)=> {
    console.log("Mouse event stopped", event);
    document.removeEventListener("mouseover", handleMouseOver);
})



