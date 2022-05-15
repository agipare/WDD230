function taggleMenu()  {
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamButton').classList.toggle("open");
}
const x = document.getElementById("hamButton");
x.onclick = taggleMenu;