const itemList = [
    "G720 ",
    "W402 ",
    "W009 ",
    "W029 ",
    "W952 ",
    "G286 ",
    "W286 ",
    "W720 ",
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
