let cost
let size
let weight
let prname
let number 
let color
let price 
let date 

var button 
var sibling 
var prnt 
var ChildElem 
var DataElem 
var PEEPElem 
var PriceElem 
var ColorElem
var NumElem
var NameElem 



function getValues(){

    cost = document.getElementById("input-cost").value
    size = document.getElementById("input-size").value
    weight= document.getElementById("input-weight").value

    
    prname = document.getElementById("input-name").value
    number = document.getElementById("input-num").value
    color = document.getElementById("input-color").value
    price = document.getElementById("input-price").value
    date = document.getElementById("input-date").value


    localStorage.setItem("name",prname);
    localStorage.setItem("number",number);
    localStorage.setItem("color",color);
    localStorage.setItem("price",price);
    localStorage.setItem("date",date);
    localStorage.setItem("cost",cost);
    localStorage.setItem("size",size);
    localStorage.setItem("weight",weight);

    localStorage.getItem("name","number","color","price","date","cost","size","weight");

}



function insertData(){
    console.log(prname,number,color,price,date)
    
    document.getElementById("prodname").innerHTML = prname;
    document.getElementById("prodnum").innerHTML = "RND - " + number;
    document.getElementById("prodcol").innerHTML = color;
    document.getElementById("prodprice").innerHTML = price + "$";
    document.getElementById("proddate").innerHTML = date;

    document.getElementById("input-cost").value = "";
    document.getElementById("input-size").value = ""; 
    document.getElementById("input-weight").value = "";
    document.getElementById("input-name").value = "";
    document.getElementById("input-num").value = "";
    document.getElementById("input-color").value = "";
    document.getElementById("input-price").value = "0.00";
    document.getElementById("input-date").value = "";
}


const openModalButtons = document.querySelectorAll('[data-modal-target]') 
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}





function insertList(){
    const section = document.getElementById("secta");

    let listCode = `<div id="greed" class="grid-container">
        <div id="prodname" class="grid-item"></div>
        <div id="prodnum" class="grid-item">Product Number</div>
        <div id="prodcol" class="grid-item">Color</div>  
        <div id="prodprice" class="grid-item">List Price</div>
        <div id="proddate" class="grid-item">Modified Date</div>
        <div class="grid-item"> <a href="#teleport"><button id="editbtn" onclick="getElements()">Edit</button><a> <button onclick="this.parentElement.parentElement.parentElement.style.display = 'none';" id="delbtn">Delete</button> </div>  
    </div>`;
    
    
   
    if(prname != "" && number != "" && color != "" && price != "" && date != ""){
        section.insertAdjacentHTML("afterend", listCode);
    }
}

function getElements(){

  button = document.getElementById("editbtn");
  sibling = button.parentElement;
  prnt = sibling.parentElement;
  ChildElem = prnt.previousSibling;
  DataElem = ChildElem.previousSibling;
  PEEPElem = DataElem.previousSibling;
  PriceElem = PEEPElem.previousSibling;
  ColorElem = PriceElem.previousSibling.previousSibling;
  NumElem = ColorElem.previousSibling.previousSibling;
  NameElem = NumElem.previousSibling.previousSibling;


  
}

function setData(){

  var newName = document.getElementById("input-name-second").value;
  var newNumber = document.getElementById("input-num-second").value;
  var newColor = document.getElementById("input-color-second").value;
  var newPrice = document.getElementById("input-price-second").value;
  var newDate = document.getElementById("input-date-second").value;

  console.log(newNumber)

  if(newName != ""){
    NameElem.innerHTML = newName;
  }
  if(newNumber != ""){
    NumElem.innerHTML = "RND - " + newNumber;
  }
  if(newColor != ""){
    ColorElem.innerHTML = newColor;
  }
  if(newPrice != ""){
    PriceElem.innerHTML = newPrice + "$";
  }
  if(newDate != ""){
    DataElem.innerHTML = newDate;
  }
  
  
}