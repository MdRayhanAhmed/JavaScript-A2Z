// Problem 23 - Day 8:  Create a Button
var btn = document.createElement("Button");

btn.innerHTML = "0";
btn.id = "btn";
btn.className = "btnClass";

document.body.appendChild(btn);

btn.onclick = function () {
    btn.innerHTML++;
}

// Problem 24 - Day 8: Buttons Container



