
function tip5() {
    let input_bill = document.getElementById('value').value;
    let input_peoples = document.getElementById('peoples').value;

    let bill = parseFloat(input_bill);
    let peoples = parseInt(input_peoples);

    let tip = bill*0.05;

    let parce_tip = tip / peoples;
    let parce_bill = (bill + tip) / peoples;

    let total_tip = parce_tip.toFixed(2);
    let total_bill = parce_bill.toFixed(2)

    document.querySelector("#tip_value").innerHTML = `$${total_tip}`;
    document.querySelector("#total_value").innerHTML = `$${total_bill}`
}

function tip10() {
    let input_bill = document.getElementById('value').value;
    let input_peoples = document.getElementById('peoples').value;

    let bill = parseFloat(input_bill);
    let peoples = parseInt(input_peoples);

    let tip = bill*0.10;

    let parce_tip = tip / peoples;
    let parce_bill = (bill + tip) / peoples;

    let total_tip = parce_tip.toFixed(2);
    let total_bill = parce_bill.toFixed(2)

    document.querySelector("#tip_value").innerHTML = `$${total_tip}`;
    document.querySelector("#total_value").innerHTML = `$${total_bill}`
}

function tip15() {
    let input_bill = document.getElementById('value').value;
    let input_peoples = document.getElementById('peoples').value;

    let bill = parseFloat(input_bill);
    let peoples = parseInt(input_peoples);

    let tip = bill*0.15;

    let parce_tip = tip / peoples;
    let parce_bill = (bill + tip) / peoples;

    let total_tip = parce_tip.toFixed(2);
    let total_bill = parce_bill.toFixed(2)

    document.querySelector("#tip_value").innerHTML = `$${total_tip}`;
    document.querySelector("#total_value").innerHTML = `$${total_bill}`
}

function tip25() {
    let input_bill = document.getElementById('value').value;
    let input_peoples = document.getElementById('peoples').value;

    let bill = parseFloat(input_bill);
    let peoples = parseInt(input_peoples);

    let tip = bill*0.25;

    let parce_tip = tip / peoples;
    let parce_bill = (bill + tip) / peoples;

    let total_tip = parce_tip.toFixed(2);
    let total_bill = parce_bill.toFixed(2)

    document.querySelector("#tip_value").innerHTML = `$${total_tip}`;
    document.querySelector("#total_value").innerHTML = `$${total_bill}`
}

function tip50() {
    let input_bill = document.getElementById('value').value;
    let input_peoples = document.getElementById('peoples').value;

    let bill = parseFloat(input_bill);
    let peoples = parseInt(input_peoples);

    let tip = bill*0.50;

    let parce_tip = tip / peoples;
    let parce_bill = (bill + tip) / peoples;

    let total_tip = parce_tip.toFixed(2);
    let total_bill = parce_bill.toFixed(2)



    document.querySelector("#tip_value").innerHTML = `$${total_tip}`;
    document.querySelector("#total_value").innerHTML = `$${total_bill}`
}

function custom() {

    let custom = prompt("Qual porcentagem deseja dar?")
    
    let perc_custom = parseFloat(custom);

    let custom_tip = perc_custom / 100;

    let input_bill = document.getElementById('value').value;
    let input_peoples = document.getElementById('peoples').value;

    let bill = parseFloat(input_bill);
    let peoples = parseInt(input_peoples);

    let tip = bill*custom_tip;

    let parce_tip = tip / peoples;
    let parce_bill = (bill + tip) / peoples;

    let total_tip = parce_tip.toFixed(2);
    let total_bill = parce_bill.toFixed(2)



    document.querySelector("#tip_value").innerHTML = `$${total_tip}`;
    document.querySelector("#total_value").innerHTML = `$${total_bill}`
}

function reset() {

    document.querySelector('#value').value = "";
    document.querySelector('#peoples').value = "";
    document.querySelector('#tip_value').innerHTML = "$0,00";
    document.querySelector('#total_value').innerHTML = "$0,00";
}
