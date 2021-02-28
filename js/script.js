function updateCountryView() {
    var ddTravel = document.getElementById("ddTravel");
    var divCountry = document.getElementById("divCountry");

    if(ddTravel.value == "Yes") {
        divCountry.classList.remove("invisible");
    }

    else {
        divCountry.classList.add("invisible");
    }

}

function formValidation() {

    var validForm = true;

    //1) DOB is not after today's date

    var DoB = document.querySelector("#txtDoB");
    var divDoBError = document.querySelector("#divDoBError");

    if (DoB.value == "") {
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The Date of Birth cannot be empty."
        DoB.classList.add("hasError");
        alert(DoB.value + " is empty string");
        validForm = false;
    }

    else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if(DoBDate >= todayDate) {
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "The Date of Birth must be before today's date."
            DoB.classList.add("hasError");
            alert(DoB.value + " is passed today's date");
            validForm = false;
        }

        else {
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = ""
            DoB.classList.remove("hasError");
        }
    }

    //2) If user traveled, need to list at least one country

    //3) There are no invalid chars (&, <, >, #, !, `, ", ~") in any field


    //If any above validations fail - highlight the background of the element and show a corresponding message next to the box



    return validForm;
}