const itemList = [
    "G720 *10",
    "W402 *5",
    "W009 *1",
    "W029 *2",
    "W952 ",
    "G286 ",
    "W286 ",
    "W720",
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
