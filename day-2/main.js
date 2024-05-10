const para = document.createElement("p");
para.textContent = "This is a paragraph created using dom apis";

document.body.appendChild(para);


const span = document.createElement("span");
span.id = "spanId";
span.className = "blue";
span.textContent = " This is a span created by DOM apis"

para.appendChild(span);

span.style.backgroundColor = "yellow";

//another way of adding attributtes
para.setAttribute("id", "dom-para");
console.log(para.id);
console.log(para.getAttribute("id"));

//another way of adding class to element. classList
para.classList.add("one");
para.classList.add("two");

// remove class
para.classList.remove("two");

const para2 = document.createElement("p");
para2.textContent = " This is <em> italic font style</em>";
document.body.appendChild(para2);

const para3 = document.createElement("p");
para3.innerHTML = " This is <em> italic font style</em>";
document.body.appendChild(para3);

para2.style.color = "green";

const hobbies = ['jogging', 'coding', 'listening music'];

const hobbyDiv = document.createElement("div");

const h2 = document.createElement("h2")
h2.textContent= "Hobbies";
const hobbyList = document.createElement("ul");
for(const hobby of hobbies){
    hobbyList.innerHTML += `<li>${hobby}</li>`
}
hobbyDiv.appendChild(hobbyList);
document.body.appendChild(h2);
document.body.appendChild(hobbyDiv)


