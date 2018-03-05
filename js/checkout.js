/* GOING TO BE REBUILT SOON */
/* GOING TO BE REBUILT SOON */
/* GOING TO BE REBUILT SOON */
/* GOING TO BE REBUILT SOON */
/* GOING TO BE REBUILT SOON */

const requiredFields = ["firstname", "lastname", "email", "street", "zip", "city"];
let inputs = Array.from(document.getElementsByTagName("input"));


document.getElementById("checkoutForm").addEventListener("submit", function(e){
    e.preventDefault();
    if (!validate()) {
        inputs.filter(x => requiredFields.indexOf(x.name) >= 0 ? true : false)
            .forEach(x => inputValidation(x));
    } else {
        //everything good, submit form.
    }
});


function inputValidation(field) {
    if (field.value === "") {
        field.setAttribute("class", "invalid");
        return false;
    } else {
        field.removeAttribute("class", "invalid");
        return true;
    }
}

function validate() {
    return inputs.filter(x => requiredFields.indexOf(x.name) >= 0 ? true : false )
        .every(x => inputValidation(x));
}
