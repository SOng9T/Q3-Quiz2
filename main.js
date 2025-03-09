function mouseOver (){
submit.style.background ="black"
submit.style.color = "white";
}

function mouseOut(){
Submit.style.background ="pink";
Submit.style.color = "lightblue";
}


document.getElementById("fullname").onchange = function()
{changeToCapital()} 
function changeToCapital(){
var fname = document.getElementById("fullname");
fname.value = fname.value.toUpperCase();
}


var ticketSubmitted = false;
var seatPrice = 0;
var optionPrice = 0;


function submitInfo() {
var fullname = document.getElementById("fullname").value;
var email = document.getElementById("email").value;

if (fullname !== "" && email !== "") {
    ticketSubmitted = true;
    document.getElementById("confirmationMessage").style.display = "block";
    document.getElementById("ticketForm").reset(); 

   
    window.alert("Ticket Information Submitted! Thank you, " + fullname + ".");
} else {
    document.write("Please fill in both fields before submitting.");
}
}


function calculatePrice() {
var seatChoice = document.getElementById("seatChoice").value;
var optionChoice = document.getElementById("optionChoice").value;

if (seatChoice === "Rear") {
    seatPrice = 50;
} else if (seatChoice === "special") {
    seatPrice = 100;
} else if (seatChoice === "front") {
    seatPrice = 150;
}


if (optionChoice === "bento box") {
    optionPrice = 20;
} else if (optionChoice === "drinks") {
    optionPrice = 10;
} else if (optionChoice === "full") {
    optionPrice = 30;
}


var totalPrice = seatPrice + optionPrice;


document.getElementById("totalPrice").innerHTML = totalPrice;
document.getElementById("priceDisplay").style.display = "block"; 


window.alert("The total ticket price is $" + totalPrice);
}


function printTicket() {
var ticketSection = document.getElementById("ticketTemplate");
var printWindow = window.open('', '', 'height=600,width=800');
printWindow.document.write('<html><head><title>Print Ticket</title></head><body>');
printWindow.document.write(ticketSection.innerHTML);
printWindow.document.write('</body></html>');
printWindow.document.close();
printWindow.print();
}


function buyMoreTickets() {
alert("Redirecting to buy more tickets...");
window.location.reload();
}

