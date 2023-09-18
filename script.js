function openShop() {



    if (document.getElementById("preview_item").style.display == "none") {


        console.log("open shop");

        document.getElementById("preview_item").style.display = "unset";
        document.getElementById("contentbody").style.filter = "blur(5px)";
        document.getElementById("contentbody").style.pointerEvents = "none";
        document.getElementById("contentbody").style.transition = "all 0.5s ease-in-out"; COOL :D



    } else {

        document.getElementById("preview_item").style.display = "none";
        document.getElementById("contentbody").style.filter = "none";
        document.getElementById("contentbody").style.pointerEvents = "auto";

        console.log("close shop");

    }

}

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})