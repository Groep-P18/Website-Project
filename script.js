const preview = document.getElementById("preview_item");
let slideIndex = 1;

function openShop(foto1, foto2, foto3, text) {

    updatePreview(foto1, foto2, foto3, text);



    if (document.getElementById("preview_item").style.display == "none") {


        console.log("open shop");




        document.getElementById("preview_item").style.display = "unset";
        document.getElementById("contentbody").style.filter = "blur(5px)";
        // Make sure the user can't click on anything behind the menu
        document.getElementById("contentbody").style.pointerEvents = "none";
        document.getElementById("contentbody").style.transition = "all 0.5s ease-in-out";

        document.getElementById("preview_item").scrollIntoView({ behavior: 'smooth', block: 'center'});



    } else {

        document.getElementById("preview_item").style.display = "none";
        document.getElementById("contentbody").style.filter = "none";
        document.getElementById("contentbody").style.pointerEvents = "auto";

        console.log("close shop");

    }

}

function updatePreview(foto1, foto2, foto3, text) {



    let preview_img1 = document.getElementById("preview_img1");
    let preview_img2 = document.getElementById("preview_img2");
    let preview_img3 = document.getElementById("preview_img3");

    let preview_text = document.getElementById("preview_text");

    preview_img1.src = foto1;
    preview_img2.src = foto2;
    preview_img3.src = foto3;

    preview_text.innerHTML = text;



}


showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("preview_img");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "unset";
}

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})