const preview = document.getElementById("preview_item");

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");
// Make const?
let slideIndex = 1;


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
    console.log("clicked");
})

function openShop(foto1, foto2, foto3, text) {

    updatePreview(foto1, foto2, foto3, text);


    // showDivs(slideIndex); .

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
// Move to openShop, because it's ugly
function updatePreview(foto1, foto2, foto3, text) {

  document.getElementById("preview_img1").src = foto1;
  document.getElementById("preview_img2").src = foto2;
  document.getElementById("preview_img3").src = foto3;

  document.getElementById("preview_text").innerHTML = text;

}




function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function toggleShoppingBag() {
  let shoppingBag = document.getElementById("shoppingBag");
  if(shoppingBag.style.transform === "") {
    shoppingBag.style.transform = "translate(-20%, 30%)";

    console.log("open shopping bag");
  }
  else {
    shoppingBag.style.transform = "";
  }
  // shoppingBag.style.display = (shoppingBag.style.transform === 'translate(-20%, 30%)' || shoppingBag.style.transform === '') ? 'translate(-0%, 30%)' : 'translate(-20%, 30%)';
}

function showFilter() {
  let filter = document.getElementById("shopFilter");

      console.log("no filter");
      console.log(filter);

    if(filter.style.display === "" || filter.style.display === "none") {
      filter.style.display = "inline-flex";

      console.log(filter);
    }
    else {
      filter.style.display = "none";
    }

  // shoppingBag.style.display = (shoppingBag.style.transform === 'translate(-20%, 30%)' || shoppingBag.style.transform === '') ? 'translate(-0%, 30%)' : 'translate(-20%, 30%)';
}

