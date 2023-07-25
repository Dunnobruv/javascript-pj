const firstnumber = +prompt("enter the number")
const secondnumber = +prompt("enter the number")
const thirdnumber = +prompt("enter the number")
const forthnumber = +prompt("enter the number")
const fifthnumber = +prompt("enter the number")

function total(firstnumber, secondnumber, thirdnumber, forthnumber, fifthnumber) {
    if ((firstnumber + secondnumber + thirdnumber + forthnumber + fifthnumber) > 12) {
        console.log((firstnumber + secondnumber + thirdnumber + forthnumber + fifthnumber))
    }
    else {
        console.log("total is less than 12")
    }
    return "idk what to do, the answer only shows up in console =/"
}


document.write(total(firstnumber, secondnumber, thirdnumber, forthnumber, fifthnumber))