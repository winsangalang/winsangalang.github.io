const itemList = [
    "G720 *10",
    "W402 *2",
    "W009",
    "W029 ",
    "W952 *1",
    "G286 *2",
    "W286 *1",
    "W720",
    "W638 *1"
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
