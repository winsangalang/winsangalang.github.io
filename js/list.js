const itemList = [
    "G720 *12",
    "W402 *8",
    "W009 ",
    "W029 5x",
    "W952 ",
    "G286 ",
    "W286 ",
    "W720 *1",
    "W638 "
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
