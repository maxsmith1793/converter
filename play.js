function convert() {
    let degrees = Number.parseFloat(Convert.degrees.value);
    let ForC = Convert.ForC.value;


    if (!degrees || isNaN(degrees)) {

        document.getElementById("output").innerHTML = "";
        document.getElementById("output").innerHTML = "<br> ERROR";   //checks if degrees is there  --> display error if not
    }

    if(!ForC) {

        document.getElementById("output").innerHTML = "";
        document.getElementById("output").innerHTML = "<br> ERROR"; //checks if F or C is there --> display error if not
    }


    if (ForC === "C") {
        let F = (9/5 * degrees) + 32;
        
        let message = document.createTextNode("Your converted value is " + F.toFixed(2) + " F degrees.");  //Conversion conditions 
        document.getElementById("output").innerHTML = "";
        document.getElementById("output").appendChild(message);

    }
    else if (ForC === "F") {
        let C = (5/9)*(degrees-32);
       message = document.createTextNode("Your converted value is " + C.toFixed(2) + " C degrees."); 
       document.getElementById("output").innerHTML = "";
       document.getElementById("output").appendChild(message);

    }
    //  else {
    //     document.getElementById("output").innerHTML = "";
    //     document.getElementById("output").innerHTML = "<br> ERROR";
    //  }
   

    }