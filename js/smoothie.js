/*-- VARIABLES --*/
var orderButton = document.querySelector('.orderButton');

// var output = document.getElementById('output');
// User options
// var fruitOption;
// var veggieOption;
// var baseOption;
// var sweetenerOption;


// Function to get order options when order button clicked
orderButton.onclick = function() {
    // User options
    var fruitOption = document.querySelector('input[type = radio][name = fruitOption]:checked').value;
    var veggieOption = document.querySelector('input[type = radio][name = veggieOption]:checked').value;
    var baseOption = document.querySelector('input[type = radio][name = baseOption]:checked').value;
    var sweetenerOption = document.querySelector('input[type = radio][name = sweetenerOption]:checked').value;

    function Smoothie (fruit, veggie, base, sweetener) {
        this.fruitOption = fruit;
        this.veggieOption = veggie;
        this.baseOption = base;
        this.sweetenerOption = sweetener;
        this.description = "You made a smoothie with some fresh " + this.fruitOption + " and some crunchy " +
                            this.veggieOption + "." + " You used " + this.baseOption + " as a base and a little bit of " +
                            this.sweetenerOption + " for some sweetness!";

        var output = document.getElementById('output');
        output.textContent = this.description;

        var smoothie = document.createElement('img');
        smoothie.setAttribute('src', './img/smoothie.gif');
        smoothie.setAttribute('alt', 'smoothie icon');
        smoothie.setAttribute('class', 'smoothie');
        output.append(smoothie);
    }
// console.log(fruitOption);
// console.log(veggieOption);
// console.log(baseOption);
// console.log(sweetenerOption);

var smoothie = new Smoothie(fruitOption, veggieOption, baseOption, sweetenerOption);
console.log(smoothie);

} 

