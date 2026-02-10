document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value;

    if (text === "") return;

    let li = document.createElement("li");

    if (text.endsWith("!")) {
        li.classList.add("priority");
        text = text.toUpperCase();
    }

    li.textContent = text;

    li.onclick = function () {
        li.classList.toggle("done");
    };

    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = " ✖";
    deleteBtn.className = "delete";

    deleteBtn.onclick = function (e) {
        e.stopPropagation();
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}