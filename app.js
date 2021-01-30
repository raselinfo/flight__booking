// Ticket count handle
function handleTicketCount(id, isIncrease) {
    const ticketCount = getInputValue(id);
    const newTicketCount = getTicketNewCount(ticketCount, isIncrease);
    document.getElementById(id + "__class").value = newTicketCount;
    calculateTotal();
}

// Get input value
function getInputValue(id) {
    const ticketInput = document.getElementById(id + "__class");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

// Ticket count increase or decrease
function getTicketNewCount(ticketCount, isIncrease) {
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount += 1;
    }
    if (isIncrease == false && ticketNewCount > 0) {
        ticketNewCount -= 1;
    }

    return ticketNewCount;
}

function ticketTotal(ticket, ticketNewCount) {
    if (ticket == "first") {
        return ticketNewCount * 150;
    }
    if (ticket == "economy") {
        return ticketNewCount * 100;
    }
}

// Calculate total
function calculateTotal() {
    const firstTicketCount = getInputValue("first");
    const economyTicketCount = getInputValue("economy");
    // Subtotal
    const subtotal = ticketTotal("first", firstTicketCount) + ticketTotal("economy", economyTicketCount);
    document.getElementById("sub__total").innerText = subtotal;
    document.getElementById("modal__subtotal").innerText = "$" + subtotal;

    // VAT
    const vat = subtotal * 10 / 100;
    document.getElementById("vat").innerText = vat
    document.getElementById("modal__vat").innerText = "$" + vat;
    // Grand Total
    const grandTotal = subtotal + vat;
    document.getElementById("grand__total").innerText = grandTotal;
    document.getElementById("modal__total").innerText = "$" + grandTotal;
}


// Modal Handle
document.getElementById("closeBtn").addEventListener("click", close)
function close() {
    const modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
}

function modal() {
    const modal = document.getElementById("modal");
    modal.style.visibility = "visible";
}

// print and reload
document.getElementById("print").addEventListener("click",function(){
    location.reload();
    
})