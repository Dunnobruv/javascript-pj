const firstnumber = +prompt("enter the first number")
const operator= prompt("enter the operator")
const secondnumber = +prompt("enter the second number")

if (isNaN(firstnumber) || isNaN(secondnumber) ) {
    console.log("HUH?")
}

if (operator === "+") {
    console.log(firstnumber + secondnumber)
}

if (operator === "-") {
    console.log(firstnumber - secondnumber)
}

if (operator === "/") {
    console.log(firstnumber / secondnumber)
}

if (operator === "*") {
    console.log(firstnumber * secondnumber)
}