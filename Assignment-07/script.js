let a = document.getElementById("task-input");
let b = document.getElementById("subbtn");
let c = document.getElementById("print");
let d = document.getElementById("task-list");
let e = document.getElementById("fa-check");
let f = document.getElementById("fa-trash");

b.addEventListener("click", function() {
    if (a.value === "") {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.textContent = a.value;
        d.appendChild(li);
        a.value = "";

        let checkIcon = document.createElement("i");
        checkIcon.className = "fa fa-check";
        checkIcon.addEventListener("click", function() {
            li.style.textDecoration = "line-through";
        });
        li.appendChild(checkIcon);

        let trashIcon = document.createElement("i");
        trashIcon.className = "fa fa-trash";
        trashIcon.addEventListener("click", function() {
            d.removeChild(li);
        });
        li.appendChild(trashIcon);
    }
});
