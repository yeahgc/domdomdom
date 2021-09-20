var colors = ["red", "orange", "yellow", "green", "blue", "purple", "gold", "pink"];
var addSquareButton = document.createElement("button");
var buttonText = document.createTextNode("Add Square");
var numberOfSquares = 0;
addSquareButton.appendChild(buttonText);
addSquareButton.style.float = "left"; 
document.body.appendChild(addSquareButton);

addSquareButton.addEventListener("click", addDiv);

function addDiv() {
    numberOfSquares++;
    var div = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.height = "200px";
    div.style.width = "200px";
    div.style.float = "left";
    div.className = "blackSquare";
    div.innerText = "";
    div.id = numberOfSquares;
    div.addEventListener("mouseover", showID);
    div.addEventListener("mouseout", hideID);
    div.addEventListener("click", changeColor);
    div.addEventListener("dblclick", removeSquare)
    document.body.appendChild(div);
}

function showID() {
    var div = document.getElementById(this.id);
    div.innerText = this.id;
}

function hideID() {
    var div = document.getElementById(this.id);
    div.innerText = "";
}

function changeColor() {
    var num = Math.floor(Math.random() * colors.length);
    var div = document.getElementById(this.id);
    div.style.backgroundColor = colors[num];
}

function removeSquare() {
    var array = document.getElementsByClassName("blackSquare");
    var next = parseInt(this.id) + 1;
    var prev = parseInt(this.id) - 1;
    if (isEven(this.id)) {
        // msg if no squares left
        if (next > array.length) {
            alert("There is no square to remove!");
        }
        else {
            var elementToRemove = document.getElementById(next);
            document.body.removeChild(elementToRemove);
        }
    }
    else {
        // msg if no square ahead of odd one after dblclick 
        if (prev < 1) {
            alert("There is no square to remove!");
        }
        else {
            var elementToRemove = document.getElementById(prev);
            document.body.removeChild(elementToRemove);
        }
    }
}

function isEven(num) {
    return num % 2 == 0;
}