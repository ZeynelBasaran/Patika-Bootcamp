let myName = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")
const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
const months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]
let zaman = new Date

let dakika = zaman.getMinutes()
let saat = zaman.getHours()
if (dakika < 10) dakika = "0" + dakika;
if (saat < 10) saat = "0" + saat;


const isim = prompt("Lütfen İsminizi giriniz")
myName.classList.add("red")
myName.textContent = isim.toUpperCase()
myClock.classList.add("red")
myClock.innerHTML = `Bu gün ${zaman.getDay()} ${months[zaman.getMonth()]} ${zaman.getFullYear()} saat ${saat}:${dakika}`








