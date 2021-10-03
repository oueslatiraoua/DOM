const btn1 = document.querySelectorAll(".btn1");
const btn2 = document.querySelectorAll(".btn2");
var add = document.querySelectorAll(".add");
var nb = document.querySelectorAll(".add");
var deleteBtn = document
  .getElementById("deleteBtn")
  .addEventListener("click", (e) => {
    var itemTag = document
      .getElementsByClassName("item")[0]
      .getElementsByTagName("div")[0];
    console.log(itemTag);
    var priceTag = document
      .getElementsByClassName("pricecart")[0]
      .getElementsByTagName("div")[0];
    var qtTag = document.getElementById("QUANTITY");
    console.log(qtTag);
    var totalprice = document.getElementsByClassName("total");

    while (itemTag.firstChild || priceTag.firstChild) {
      itemTag.removeChild(itemTag.lastChild);
      priceTag.removeChild(priceTag.lastChild);
    }

    console.log(qtTag);
    qtTag.innerHTML = "";
    qtTag.innerHTML = "Quantity";
    newdiv3.innerHTML = 0;
  });

var btn = document.querySelectorAll(".btn");

var price = document.querySelectorAll(".price");

var pricecart = document.getElementsByClassName("pricecart")[0];

var newdiv = document.createElement("div");
pricecart.appendChild(newdiv);
var item = document.getElementsByClassName("item");

var newdiv2 = document.createElement("div");
item[0].appendChild(newdiv2);
var totalprice = document.getElementsByClassName("total");

var newdiv3 = document.createElement("div");
totalprice[0].appendChild(newdiv3);
var QT = document.getElementsByClassName("QT")[0];
console.log(QT);

var quantity = document.getElementsByClassName("quantity")[0];

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    console.log("clicked");
    var newdiv4 = document.createElement("div");
    var price =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling
        .innerText;
    newdiv.innerHTML += "<p class='prc'>" + price + "</p>";
    var mybr = document.createElement("br");
    newdiv.appendChild(mybr);
    var item = e.target.nextElementSibling.innerText;
    newdiv2.innerHTML += item;
    var mybr = document.createElement("br");
    newdiv2.appendChild(mybr);
    newdiv3.innerHTML = item * price;
    var mybr = document.createElement("br");

    newdiv3.appendChild(mybr);

    newdiv4.innerHTML =
      '<div class="quantity"><div class="add">0</div><button class="btn1">+</button><button class="btn2">-</button></div>';

    newdiv4.setAttribute(
      "style",
      "display: flex",
      "flex-direction:row",
      "justify-content: space-between"
    );

    var mybr = document.createElement("br");
    newdiv4.appendChild(mybr);
    QT.appendChild(newdiv4);
    console.log(QT);
    var btnPlus = newdiv4.querySelector(".btn1");
    var btnMinus = newdiv4.querySelector(".btn2");
    var qty = newdiv4.querySelector(".add");
    btnPlus.addEventListener("click", function (e) {
      qty.innerText = parseInt(qty.innerText) + 1;
      somme();
    });
    btnMinus.addEventListener("click", function (e) {
      if (parseInt(qty.innerText) > 0) {
        qty.innerText = parseInt(qty.innerText) - 1;
      } else {
        qty.innerText = 0;
      }

      somme();
    });
  });
}

function somme() {
  var totalQty = document.getElementsByClassName("quantity");
  var prc = document.getElementsByClassName("prc");
  console.log(prc, totalQty);
  var totalsomme = 0;
  for (let i = 0; i < totalQty.length; i++) {
    var singleQty = totalQty[i].firstElementChild.innerText;
    var singlePrice = prc[i].innerText.replace("Price (dinars) =", "");
    console.log(singlePrice, singleQty);
    var int1 = parseInt(singleQty);
    console.log(int1);
    var int2 = parseInt(singlePrice);
    console.log(int2);

    var totalprice = document.getElementsByClassName("total");
    var totalsomme = totalsomme + int2 * int1;
  }
  var totalprice = document.getElementsByClassName("total")[0];
  newdiv3.innerHTML = totalsomme;
}
var heart = document.getElementsByClassName("fa-heart");
for (var j = 0; j < heart.length; j++) {
  heart[j].addEventListener("click", function (e) {
    e.target.classList.toggle("heart");
  });
}
