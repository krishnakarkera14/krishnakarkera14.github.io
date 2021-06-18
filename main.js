// const colors= [
//     "violet",
//     "indigo",
//     "blue",
//     "green",
//     "yellow",
//     "orange",
//     "red"
// ];

// const container = document.querySelector("#boxes");

// // all the fucntions
// const changeColor = function(box){
//     const fetchedColor = this.style.backgroundColor;
//     const h1 = document.querySelector("h1");
//     h1.style.color = fetchedColor;
// }

// for (let color of colors){
//     const box = document.createElement("div");
//     box.style.backgroundColor = color;
//     box.classList.add("box");
//     container.appendChild(box);
//     box.addEventListener("click", changeColor);
// }

// document.body.addEventListener("keypress", function(e){
//     console.log(e);
// })

//DOM Variables
// const input = document.querySelector("#items");
// const myUl = document.querySelector("ul");

// input.addEventListener("keypress",function(e){
//     if(e.key === "Enter") {
//         if(!this.value){
//             return;
//         }
//         const itemToBeAdded = input.value;
//         const theNewItem = document.createElement("li");
//         theNewItem.innerText = itemToBeAdded;
//         myUl.append(theNewItem);
//         input.value ="";
//     }

// });

const creditCardInput = document.querySelector("#creditCardInp");
const checkBoxInput = document.querySelector("#checkboxInp");
const selectInput = document.querySelector("#selectInp");

const form = document.querySelector("#theForm");
const formData = {};

for (let input of [creditCardInput, checkBoxInput, selectInput]) {
    input.addEventListener("input", function (e) {
        if (e.target.type === "checkbox") {
            formData[e.target.name] = e.target.checked;
            console.log(formData);
        } else {
            formData[e.target.name] = e.target.value;
            console.log(formData);
        }
    });
};

