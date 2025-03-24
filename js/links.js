const itemList = [
            '<a href="https://www.casinoplus.com.ph/home" target="_blank">Casinoplus.com.ph</a>',
            '<a href="https://www.okbet.com/mobile/login" target="_blank">Okbet</a>',
            '<a href="https://www.playtime.ph/" target="_blank">Playtime</a>',
            '<a href="https://bingoplus.com/" target="_blank">Bingoplus</a>',
            '<a href="https://arenaplus.ph/" target="_blank">Arenaplus</a>',
            '<a href="https://gzone.ph/#login" target="_blank">Gamezone</a>'
        ];

        function renderList() {
            const ul = document.getElementById("dynamicLinks");
            ul.innerHTML = "";
            itemList.forEach(item => {
                const li = document.createElement("li");
                li.classList.add("custom-li"); // Add class to prevent affecting other lists
                li.innerHTML = item; // Properly render anchor tags
                ul.appendChild(li);
            });
        }

        document.addEventListener("DOMContentLoaded", renderList);