let makeMoney = document.getElementById('make-money');
let withdraw_Money = document.getElementById('withdraw-money');
makeMoney.addEventListener('click', function () {
    makeMoney.style.backgroundColor = "#2eb60d";
    makeMoney.style.color = "#fff";
    withdraw_Money.style.background = "#fff";
    withdraw_Money.style.color = "#000";
})
withdraw_Money.addEventListener('click', function () {
    withdraw_Money.style.background = "#2eb60d";
    withdraw_Money.style.color = "#fff";
    makeMoney.style.background = "#fff";
    makeMoney.style.color = "#000";
})
var countProduct = document.getElementById("countProduct").getAttribute("value");
var countTrack = document.getElementById("countProduct");
var soldProduct = document.getElementById("soldProduct");
soldProduct.innerHTML = countProduct;
countTrack.style.width = countProduct + '%';
var menu = document.getElementById("menu");