const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");

menu!.addEventListener("click", (e) => {
    dropdown!.classList.toggle('hidden');
})