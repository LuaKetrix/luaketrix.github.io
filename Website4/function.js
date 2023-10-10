const spinning = document.getElementById("loading");
const mainBody = document.getElementById("body")

function changeWebsite() {
    spinning.remove();
    mainBody.style.backgroundColor = "rgb(0, 162, 255)";
    mainBody.style.justifyContent = "start"
    mainBody.style.alignItems = "start"
    mainBody.style.display = "block"
    mainBody.style.backgroundImage = "linear-gradient(to bottom right, rgba(0,0,0,255), rgba(19,15,63,255)"
    mainBody.style.overflow = "scroll"
         
    const nodeList = document.querySelectorAll("p, h1, h2");
    for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.opacity = 1;
    }
}

setTimeout(() => changeWebsite.call(), 1000);
