const firstnumber = +prompt("enter the first number")
const operator = prompt("enter the operator")
const secondnumber = +prompt("enter the second number")

function calculator(firstnumber, secondnumber, operator) {
    if (!isNaN(firstnumber + secondnumber)) {
        switch (operator) {
            case '+':
                return (firstnumber + secondnumber)
            case '-':
                return (firstnumber - secondnumber)
            case '*':
                return (firstnumber * secondnumber)
            case '/':
                return (firstnumber / secondnumber)
            default:
                return ("operator is wrong")
        }
    }
    return "something went wrong"
}

document.write(calculator(firstnumber, secondnumber, operator))