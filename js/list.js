const itemList = [
    "G720 *13",
    "W402 *9",
    "W009 ",
    "W029 5x",
    "W952 ",
    "G286 ",
    "W286 ",
    "W720 ",
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
