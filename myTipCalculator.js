function calculate_tip(){

    var bill_amount = document.querySelector("#bill_amt").value;
    var service_quality = document.querySelector("#service_qual").value;
    var numberOfpeople = document.querySelector("#n_share").value;
    if(bill_amount === "" || service_quality == "0"){
        alert("Enter the bill amount and service quality");
    }
    if(numberOfpeople === "" || numberOfpeople <= 1){
        numberOfpeople = 1;
        document.querySelector("#each").style.display = "none";
    }
    else
        document.querySelector("#each").style.display = "block";
    var total = (bill_amount*service_quality)/numberOfpeople;
    total = total.toFixed(2);
    document.querySelector("#tip").innerHTML = total;
    //hide total_tip onload
    document.querySelector(".total_tip").style.display = "block";


}