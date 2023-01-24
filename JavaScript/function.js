// {
//     // color


// }

// {
//     // change text
//     document.getElementById("demo").innerHTML = "Hello world"
//     document.getElementById("tble").innerHTML = "<table><tr>    <th>Name</th>   <th>Email</th></tr><tr>    <td>Mohan</td><td>m@m</td></tr></table>"

// }



function chengeColor() {

    document.getElementById("demo").style.color = "red";
    document.getElementById("bdy").style.backgroundColor = "green"
}

chengeColor()


// without argument
// function addition() {
//     let x = 5;
//     let y = 10;
//     let z = x + y;
//     console.log(z);
// }
// addition()


// with argument
// function addition(firstValue, secondValue) {
//     let x = firstValue
//     let y = secondValue
//     let z = x + y;
//     console.log(z);
// }


// // addition("hello", "world")
// addition(25, 58)



// with returnm keyword
function addition(firstValue, secondValue) {
    let x = firstValue
    let y = secondValue
    let z = x + y;
    return z
}


console.log(addition(25, 58));