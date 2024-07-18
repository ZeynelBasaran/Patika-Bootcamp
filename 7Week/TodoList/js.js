const submit = document.querySelector(".add");
const list = document.querySelector(".list");
const input = document.querySelector(".input");
const clear = document.querySelector(".clearall");

let storageList = [];

submit.addEventListener("click", addTodo);
list.addEventListener("click", removeİtem);
clear.addEventListener("click", clearAll);
document.addEventListener("DOMContentLoaded", uploadStorage);

//Add Element
function addTodo(e) {
  e.preventDefault();

  const itemText = input.value.trim();

  if (itemText == "" || itemText == null) {
    alertDiv("Lütfen bilgi giriniz.", "alert alert-warning");
  } else {
    addİtem(itemText);
    addStorage(itemText);
    alertDiv("Listeye Eklendi.", "alert alert-primary");
  }
}

//ADDİtem
function addİtem(itemText) {
  let divDom = document.createElement("div");
  divDom.classList = "d-flex justify-content-between align-items-center";
  divDom.innerHTML = `
        <li>${itemText}</li>
        <i class="fa-solid fa-xmark"></i>
        `;
  list.appendChild(divDom);

  input.value = "";
}

//Removeİtem
function removeİtem(x) {
  if (x.target.classList == "fa-solid fa-xmark") {
    x.target.parentElement.remove();
    alertDiv("Seçtiginiz Element Silindi", "alert alert-danger");
    removeStorage(x.target.parentElement.children[0].innerText);
  }
}

//ClearAllİtem
function clearAll() {
  if (confirm("Silmek istediginize emin misiniz ?")) {
    list.innerHTML = "";
    alertDiv("Tüm Elemanlar Silindi", "alert alert-danger");

    //LS and LS Array Clear
    localStorage.clear();
  }
}

//Alert Function
function alertDiv(message, role) {
  let divDom = document.createElement("div");
  divDom.classList = `${role} container-fluid`;
  divDom.innerText = message;
  document.body.prepend(divDom);
  setTimeout(() => {
    divDom.remove();
  }, 2000);
}

//Store
function checkStorage() {
  if (localStorage.getItem("items") === null) {
    storageList = [];
  } else {
    storageList = JSON.parse(localStorage.getItem("items"));
  }
}

function addStorage(itemText) {
  checkStorage();

  storageList.push(itemText);
  localStorage.setItem("items", JSON.stringify(storageList));
}

function removeStorage(itemText) {
  checkStorage();
  storageList.forEach((element,idx) => {
    if(element === itemText){
        storageList.splice(idx,1)
    }
    localStorage.setItem("items", JSON.stringify(storageList));
  });
}

function uploadStorage() {
  checkStorage();
  storageList.forEach((item) => {
    addİtem(item);
  });
}
