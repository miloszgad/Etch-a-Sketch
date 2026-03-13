const container = document.querySelector(".container")



function createSquare() {
    for (let i = 0; i < 529; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    }
}

createSquare()



const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", function (e) {
        e.target.style.background = getRandomColor();
    })
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb( ${r}, ${g}, ${b})`;
}


 const gridChange = document.querySelector(".button");
 gridChange.addEventListener("click", function () {
    const value = prompt("Please enter your grid size (100=max)");

    if (value <= 100) {
     container.innerHTML = "";
     for (let i = 0; i < value * value; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.height = 529 / value + "px";
      square.style.width = 529 / value + "px";
      container.appendChild(square);
     }
     const squares = document.querySelectorAll(".square");
     squares.forEach((square) => {
     square.addEventListener("mouseover", function (e) {
        e.target.style.background = getRandomColor();
    })
})
    }
    else if (value > 100) {
        alert("Sorry, but your number is too big")
    }
    else {
        alert("This is not a right number");
    }
 });


