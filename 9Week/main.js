//Change to Classes
const buttons = document.querySelectorAll(".chose button");
const chosed = document.querySelectorAll(".chosed");
buttons.forEach((btn) => {
  btn.addEventListener("click", changeClass);
});

function changeClass(e) {
  //Change to Active Classlist
  if (e.target.classList.contains("btns")) {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    //Change to Display property
    chosed.forEach((item) => {
      if (item.classList.contains(`${e.target.classList[1]}`)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }
}

//BMI Calculator 
const bmiİnp = document.querySelectorAll(`.bmiİnp`);
bmiİnp.forEach((item) => {
  item.addEventListener("change", bmıCalc);
});
function bmıCalc() {
  const kg = document.querySelector(`#kg`).value;
  const height = document.querySelector(`#cm`).value;
  console.log(kg,height)
  if (kg ==="" || height ==="") {
    document.querySelector(`.BMI`).innerHTML = "";
  } else {
    let kgNumb = Number(kg);
    let heightNumb = Number(height) / 100;
    let vki;
    vki = kgNumb / (heightNumb * heightNumb);
    vki = vki.toFixed(2);
    document.querySelector(`.BMI`).innerHTML = vki;
    bodyMassİndex(vki);
  }
}
//Body mass index progress
function bodyMassİndex(vki) {
  const idx = document.querySelector(".fa-caret-up");
  idx.style.left = `${vki * 1.85}%`;
}

//Change to Navbar BG Color
document.addEventListener("scroll", (e) => {
  const navBar = document.querySelector("nav");
  navBar.style.backgroundColor = "#355592";

  if (window.scrollY === 0) {
    navBar.style.backgroundColor = "";
  }
});

//Hamburger Menu
const burgerBtn = document.querySelector(".fa-solid.fa-bars")
burgerBtn.addEventListener("click",addMenu)
function addMenu(){
  const burger = document.querySelector(".burger")
  burger.classList.toggle("actives")
}
