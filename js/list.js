const itemList = [
    "5212324","1047178011","1058601898","1065336430","1068077714","1056528119",
];

function renderList() {
    const ul = document.getElementById("dynamicList");
    ul.innerHTML = "";
    itemList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", renderList);
