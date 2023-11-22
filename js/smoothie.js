/*-- VARIABLES --*/
var orderButton = document.querySelector('.orderButton');
var output = document.getElementById('output');

// Function that executes when order button is clicked
orderButton.onclick = function() {
    // Gets the selected user smoothie options
    var fruitOption = document.querySelector('input[type = radio][name = fruitOption]:checked').value;
    var veggieOption = document.querySelector('input[type = radio][name = veggieOption]:checked').value;
    var baseOption = document.querySelector('input[type = radio][name = baseOption]:checked').value;
    var sweetenerOption = document.querySelector('input[type = radio][name = sweetenerOption]:checked').value;

    // Creates the Smoothie class to create Smoothie objects
    function Smoothie (fruit, veggie, base, sweetener) {
        // Takes the selected smoothie options and passes them as args
        this.fruitOption = fruit;
        this.veggieOption = veggie;
        this.baseOption = base;
        this.sweetenerOption = sweetener;
        // Description of the smoothie made
        this.description = "You made a smoothie with some fresh " + this.fruitOption + " and some crunchy " +
                            this.veggieOption + "." + " You used " + this.baseOption + " as a base and a little bit of " +
                            this.sweetenerOption + " for some sweetness!";
    
        // Adds the description to the HTML
        output.textContent = this.description;
    }

    Smoothie.prototype.orderSmoothie = function() {
        var smoothie = document.createElement('img');
        smoothie.setAttribute('src', './img/smoothie.gif');
        smoothie.setAttribute('alt', 'smoothie icon');
        smoothie.setAttribute('class', 'smoothie');
        output.appendChild(smoothie);
    }
    
    // Creates a new smoothie using the Smoothie class
    var orderedSmoothie = new Smoothie(fruitOption, veggieOption, baseOption, sweetenerOption);
    orderedSmoothie.orderSmoothie();
    console.log(orderedSmoothie);

    // Selects the receipt section in HTML
    var receiptSection = document.getElementById('receipt');

    // Makes a new heading
    var receiptHeader = document.createElement('h6');
    // Sets heading to "Order Receipt"
    receiptHeader.textContent = 'Order Receipt';
    // Adds heading to receipt section in HTML
    receiptSection.appendChild(receiptHeader);

    /*-- Adds item name and price to the order receipt for each category --*/

    // Creates a paragraph
    var fruitOptionPara = document.createElement('p');
    // Get the radio button
    var fruitOptionElement = document.querySelector('input[type = radio][name = fruitOption]:checked');
    // Get the data-price attribute from the radio button
    var fruitPrice = fruitOptionElement.getAttribute('data-price');
    // Converts string price to a number
    let fruitTotalPrice = Number(fruitPrice);
    // Display as: "item - item price"
    fruitOptionPara.textContent = fruitOption + ' - ' + fruitPrice;

    // Creates a paragraph
    var veggieOptionPara = document.createElement('p');
    // Get the radio button
    var veggieOptionElement = document.querySelector('input[type = radio][name = veggieOption]:checked');
    // Get the data-price attribute from the radio button
    var veggiePrice = veggieOptionElement.getAttribute('data-price');
    // Converts string price to a number
    let veggieTotalPrice = Number(veggiePrice);
    // Display as: "item - item price"
    veggieOptionPara.textContent = veggieOption + ' - ' + veggiePrice;

    // Creates a paragraph
    var baseOptionPara = document.createElement('p');
    // Get the radio button
    var baseOptionElement = document.querySelector('input[type = radio][name = baseOption]:checked');
    // Get the data-price attribute from the radio button
    var basePrice = baseOptionElement.getAttribute('data-price');
    // Converts string price to a number
    let baseTotalPrice = Number(basePrice);
    // Display as: "item - item price"
    baseOptionPara.textContent = baseOption + ' - ' + basePrice;

    // Creates a paragraph
    var sweetenerOptionPara = document.createElement('p');
    // Get the radio button
    var sweetenerOptionElement = document.querySelector('input[type = radio][name = sweetenerOption]:checked');
    // Get the data-price attribute from the radio button
    let sweetenerPrice = sweetenerOptionElement.getAttribute('data-price');
    // Converts string price to a number
    let sweetenerTotalPrice = Number(sweetenerPrice);
    // Display as: "item - item price"
    sweetenerOptionPara.textContent = sweetenerOption + ' - ' + sweetenerPrice;

    // Create a paragraph for the total price
    var totalPricePara = document.createElement('p');
    // Add all of the total prices for the smoothie options together
    let totalPrice = fruitTotalPrice + veggieTotalPrice + baseTotalPrice + sweetenerTotalPrice; 
    // Display the total price with a dollar sign ($)
    totalPricePara.textContent = 'Total: $' + totalPrice;

    // Creates a new button
    payButton = document.createElement('button');
    // Sets to .button class to apply CSS styling
    payButton.setAttribute('class', 'button');
    // Changes button text
    payButton.textContent = 'Pay Now!';

    // Appends all of the smoothie items, prices and the button to the receipt section
    receiptSection.appendChild(fruitOptionPara);
    receiptSection.appendChild(veggieOptionPara);
    receiptSection.appendChild(baseOptionPara);
    receiptSection.appendChild(sweetenerOptionPara);
    receiptSection.appendChild(totalPricePara);
    receiptSection.appendChild(payButton);

    // Function that shows an alert when the 'pay now' button is clicked
    payButton.onclick = function() {
        alert('Thank you for your purchase! Please come again :)');
    }
} 

