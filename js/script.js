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
        divDoBError.innerHTML = "The Date of Birth cannot be empty.";
        DoB.classList.add("hasError");
        // alert(DoB.value + " is empty string");
        validForm = false;
    }

    else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if(DoBDate >= todayDate) {
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "The Date of Birth must be before today's date.";
            DoB.classList.add("hasError");
            // alert(DoB.value + " is passed today's date");
            validForm = false;
        }

        else {
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = "";
            DoB.classList.remove("hasError");
        }
    }

    //2) If user traveled, need to list at least one country

    var ddTravel = document.querySelector("#ddTravel");
    var divCountryError = document.querySelector("#divCountryError");

    if (ddTravel.value == "Yes") {
        var txtCountry = document.querySelector("#txtCountry");
        if (txtCountry.value == "") {
            divCountryError.classList.remove("invisible");
            divCountryError.innerHTML = "You must add at least one country if you have traveled to any country in the last 14 days.";
            txtCountry.classList.add("hasError");
            validForm = false;
        }

        else {
            divCountryError.classList.add("invisible");
            txtCountry.classList.remove("hasError");
        }
    
    }

    //3) There are no invalid chars (&, <, >, #, !, `, ", ~") in any field

    var elements = document.getElementsByTagName("input");
    var invalidChars = ['&', '<', '>', '#', '!', '`', '"', '~'];

    for (let i = 0; i < elements.length; i++) {

        var errorDiv = String("div" + elements[i].id + "Error");
        var errorDivlocation = document.getElementById(errorDiv);
        var hasError = new Boolean(false);

        for (let j = 0; j < invalidChars.length; j++) {
            if (elements[i].value.indexOf(invalidChars[j]) != -1) {
                // alert(errorDivlocation.id);
                errorDivlocation.classList.remove("invisible");
                errorDivlocation.innerHTML = "This field contains an invalid character: &,<,>,#,!,`,\" or ~";
                elements[i].classList.add("hasError");
                validForm = false;
                hasError = true;
                // alert(elements[i].id + " : " + hasError);
            }
            
        }

        if (hasError == false) {
            // alert(elements[i].id + " has no error");
            errorDivlocation.classList.add("invisible");
            elements[i].classList.remove("hasError");
        }
        
    }


    //If any above validations fail - highlight the background of the element and show a corresponding message next to the box



    return validForm;
}