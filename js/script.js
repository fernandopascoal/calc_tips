
function tip5() {

    let input_bill = document.getElementById('value').value;
    let input_peoples = document.getElementById('peoples').value;

    if (input_bill > 0 && input_peoples > 0) {
        let bill = parseFloat(input_bill);
        let peoples = parseInt(input_peoples);

        let tip = bill*0.05;

        let parce_tip = tip / peoples;
        let parce_bill = (bill + tip) / peoples;

        let total_tip = parce_tip.toFixed(2);
        let total_bill = parce_bill.toFixed(2)

        document.getElementsByClassName("error")[0].style.display = 'none';
        document.getElementsByClassName("error")[1].style.display = 'none';
        document.querySelector('#n_peoples').style.border = "none"
        document.querySelector('#bill').style.border = "none"

        document.querySelector("#tip_value").innerHTML = `$${total_tip}`;
        document.querySelector("#total_value").innerHTML = `$${total_bill}`

    } else if (input_bill > 0 && input_peoples == 0) {
        document.getElementsByClassName("error")[1].style.display = 'inline';
        document.querySelector('#n_peoples').style.border = "1px solid red"
        document.getElementsByClassName("error")[0].style.display = 'none';
        document.querySelector('#bill').style.border = "none"

    } else if (input_bill == 0 && input_peoples > 0) {
        document.getElementsByClassName("error")[0].style.display = 'inline';
        document.querySelector('#bill').style.border = "1px solid red"
        document.getElementsByClassName("error")[1].style.display = 'none';
        document.querySelector('#n_peoples').style.border = "none"

    } else {
        document.getElementsByClassName("error")[1].style.display = 'inline';
        document.querySelector('#n_peoples').style.border = "1px solid red"
        document.getElementsByClassName("error")[0].style.display = 'inline';
        document.querySelector('#bill').style.border = "1px solid red"
    }
}

function tip10() {

    let input_bill = document.getElementById('value').value;
    let input_peoples = document.getElementById('peoples').value;

    if (input_bill > 0 && input_peoples > 0) {
        let bill = parseFloat(input_bill);
        let peoples = parseInt(input_peoples);

        let tip = bill*0.10;

        let parce_tip = tip / peoples;
        let parce_bill = (bill + tip) / peoples;

        let total_tip = parce_tip.toFixed(2);
        let total_bill = parce_bill.toFixed(2)

        document.getElementsByClassName("error")[0].style.display = 'none';
        document.getElementsByClassName("error")[1].style.display = 'none';
        document.querySelector('#n_peoples').style.border = "none"
        document.querySelector('#bill').style.border = "none"

        document.querySelector("#tip_value").innerHTML = `$${total_tip}`;
        document.querySelector("#total_value").innerHTML = `$${total_bill}`

    } else if (input_bill > 0 && input_peoples == 0) {
        document.getElementsByClassName("error")[1].style.display = 'inline';
        document.querySelector('#n_peoples').style.border = "1px solid red"
        document.getElementsByClassName("error")[0].style.display = 'none';
        document.querySelector('#bill').style.border = "none"

    } else if (input_bill == 0 && input_peoples > 0) {
        document.getElementsByClassName("error")[0].style.display = 'inline';
        document.querySelector('#bill').style.border = "1px solid red"
        document.getElementsByClassName("error")[1].style.display = 'none';
        document.querySelector('#n_peoples').style.border = "none"

    } else {
        document.getElementsByClassName("error")[1].style.display = 'inline';
        document.querySelector('#n_peoples').style.border = "1px solid red"
        document.getElementsByClassName("error")[0].style.display = 'inline';
        document.querySelector('#bill').style.border = "1px solid red"
    }
}

function tip15() {

    let input_bill = document.getElementById('value').value;
    let input_peoples = document.getElementById('peoples').value;

    if (input_bill > 0 && input_peoples > 0) {
        let bill = parseFloat(input_bill);
        let peoples = parseInt(input_peoples);

        let tip = bill*0.15;

        let parce_tip = tip / peoples;
        let parce_bill = (bill + tip) / peoples;

        let total_tip = parce_tip.toFixed(2);
        let total_bill = parce_bill.toFixed(2)

        document.getElementsByClassName("error")[0].style.display = 'none';
        document.getElementsByClassName("error")[1].style.display = 'none';
        document.querySelector('#n_peoples').style.border = "none"
        document.querySelector('#bill').style.border = "none"

        document.querySelector("#tip_value").innerHTML = `$${total_tip}`;
        document.querySelector("#total_value").innerHTML = `$${total_bill}`

    } else if (input_bill > 0 && input_peoples == 0) {
        document.getElementsByClassName("error")[1].style.display = 'inline';
        document.querySelector('#n_peoples').style.border = "1px solid red"
        document.getElementsByClassName("error")[0].style.display = 'none';
        document.querySelector('#bill').style.border = "none"

    } else if (input_bill == 0 && input_peoples > 0) {
        document.getElementsByClassName("error")[0].style.display = 'inline';
        document.querySelector('#bill').style.border = "1px solid red"
        document.getElementsByClassName("error")[1].style.display = 'none';
        document.querySelector('#n_peoples').style.border = "none"

    } else {
        document.getElementsByClassName("error")[1].style.display = 'inline';
        document.querySelector('#n_peoples').style.border = "1px solid red"
        document.getElementsByClassName("error")[0].style.display = 'inline';
        document.querySelector('#bill').style.border = "1px solid red"
    }
}

function tip25() {

    let input_bill = document.getElementById('value').value;
    let input_peoples = document.getElementById('peoples').value;

    if (input_bill > 0 && input_peoples > 0) {
        let bill = parseFloat(input_bill);
        let peoples = parseInt(input_peoples);

        let tip = bill*0.25;

        let parce_tip = tip / peoples;
        let parce_bill = (bill + tip) / peoples;

        let total_tip = parce_tip.toFixed(2);
        let total_bill = parce_bill.toFixed(2)

        document.getElementsByClassName("error")[0].style.display = 'none';
        document.getElementsByClassName("error")[1].style.display = 'none';
        document.querySelector('#n_peoples').style.border = "none"
        document.querySelector('#bill').style.border = "none"

        document.querySelector("#tip_value").innerHTML = `$${total_tip}`;
        document.querySelector("#total_value").innerHTML = `$${total_bill}`

    } else if (input_bill > 0 && input_peoples == 0) {
        document.getElementsByClassName("error")[1].style.display = 'inline';
        document.querySelector('#n_peoples').style.border = "1px solid red"
        document.getElementsByClassName("error")[0].style.display = 'none';
        document.querySelector('#bill').style.border = "none"

    } else if (input_bill == 0 && input_peoples > 0) {
        document.getElementsByClassName("error")[0].style.display = 'inline';
        document.querySelector('#bill').style.border = "1px solid red"
        document.getElementsByClassName("error")[1].style.display = 'none';
        document.querySelector('#n_peoples').style.border = "none"

    } else {
        document.getElementsByClassName("error")[1].style.display = 'inline';
        document.querySelector('#n_peoples').style.border = "1px solid red"
        document.getElementsByClassName("error")[0].style.display = 'inline';
        document.querySelector('#bill').style.border = "1px solid red"
    }
}

function tip50() {

    let input_bill = document.getElementById('value').value;
    let input_peoples = document.getElementById('peoples').value;

    if (input_bill > 0 && input_peoples > 0) {
        let bill = parseFloat(input_bill);
        let peoples = parseInt(input_peoples);

        let tip = bill*0.50;

        let parce_tip = tip / peoples;
        let parce_bill = (bill + tip) / peoples;

        let total_tip = parce_tip.toFixed(2);
        let total_bill = parce_bill.toFixed(2)

        document.getElementsByClassName("error")[0].style.display = 'none';
        document.getElementsByClassName("error")[1].style.display = 'none';
        document.querySelector('#n_peoples').style.border = "none"
        document.querySelector('#bill').style.border = "none"

        document.querySelector("#tip_value").innerHTML = `$${total_tip}`;
        document.querySelector("#total_value").innerHTML = `$${total_bill}`

    } else if (input_bill > 0 && input_peoples == 0) {
        document.getElementsByClassName("error")[1].style.display = 'inline';
        document.querySelector('#n_peoples').style.border = "1px solid red"
        document.getElementsByClassName("error")[0].style.display = 'none';
        document.querySelector('#bill').style.border = "none"

    } else if (input_bill == 0 && input_peoples > 0) {
        document.getElementsByClassName("error")[0].style.display = 'inline';
        document.querySelector('#bill').style.border = "1px solid red"
        document.getElementsByClassName("error")[1].style.display = 'none';
        document.querySelector('#n_peoples').style.border = "none"

    } else {
        document.getElementsByClassName("error")[1].style.display = 'inline';
        document.querySelector('#n_peoples').style.border = "1px solid red"
        document.getElementsByClassName("error")[0].style.display = 'inline';
        document.querySelector('#bill').style.border = "1px solid red"
    }
}

function custom() {
    document.querySelector('#custom_container').style.display = "flex";
}

function custom_calc() {
    let input_custom = document.getElementById('custom_input').value;
    let perc_custom = parseFloat(input_custom);
    let input_bill = document.getElementById('value').value;
    let input_peoples = document.getElementById('peoples').value;
    
    
    if (input_bill > 0 && input_peoples > 0) {
        let custom = perc_custom / 100;
        let bill = parseFloat(input_bill);
        let peoples = parseInt(input_peoples);

        let tip = bill*custom;

        let parce_tip = tip / peoples;
        let parce_bill = (bill + tip) / peoples;

        let total_tip = parce_tip.toFixed(2);
        let total_bill = parce_bill.toFixed(2)

        document.getElementsByClassName("error")[0].style.display = 'none';
        document.getElementsByClassName("error")[1].style.display = 'none';
        document.querySelector('#n_peoples').style.border = "none"
        document.querySelector('#bill').style.border = "none"

        document.querySelector("#tip_value").innerHTML = `$${total_tip}`;
        document.querySelector("#total_value").innerHTML = `$${total_bill}`

    } else if (input_bill > 0 && input_peoples == 0) {
        document.getElementsByClassName("error")[1].style.display = 'inline';
        document.querySelector('#n_peoples').style.border = "1px solid red"
        document.getElementsByClassName("error")[0].style.display = 'none';
        document.querySelector('#bill').style.border = "none"

    } else if (input_bill == 0 && input_peoples > 0) {
        document.getElementsByClassName("error")[0].style.display = 'inline';
        document.querySelector('#bill').style.border = "1px solid red"
        document.getElementsByClassName("error")[1].style.display = 'none';
        document.querySelector('#n_peoples').style.border = "none"

    } else {
        document.getElementsByClassName("error")[1].style.display = 'inline';
        document.querySelector('#n_peoples').style.border = "1px solid red"
        document.getElementsByClassName("error")[0].style.display = 'inline';
        document.querySelector('#bill').style.border = "1px solid red"
    }
}

function reset() {

    document.querySelector('#value').value = "";
    document.querySelector('#peoples').value = "";
    document.querySelector('#tip_value').innerHTML = "$0,00";
    document.querySelector('#total_value').innerHTML = "$0,00";
    document.getElementsByClassName("error")[1].style.display = 'none';
    document.querySelector('#n_peoples').style.border = "none"
    document.getElementsByClassName("error")[0].style.display = 'none';
    document.querySelector('#bill').style.border = "none";
    document.querySelector('#custom_container').style.display = "none";
}
