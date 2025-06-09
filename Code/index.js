

let title = document.getElementById("title");

let btn = document.getElementById("btn");

let input = document.getElementById("input");

let details = document.getElementById("details");
 let inputnumber = document.getElementById("inputnumber");


btn.addEventListener("click", function () {
        details.innerHTML = "";
     const numbercount = parseInt(inputnumber.value);

     if (isNaN(numbercount) || numbercount <= 0) {
        details.innerHTML = "<p>Please enter a valid positive number</p>";
        return;
    }

    // Generate the greetings
    for (let i = 0; i < numbercount; i++) {
        details.innerHTML += `<h2>Hello ${input.value}</h2>`;
    }

    
})

