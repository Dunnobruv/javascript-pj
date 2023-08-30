const arr = [];

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
};

const generateobject = () => {
    const randomnumber = math.floor(math.random() * 1000);
    const character = ['a', 'b', 'c', 'd'];
    const radnomword = char[math.floor(math.random() * 3)] + char[math.floor(math.random() * 3)] + char[math.floor(math.random() * 3)] + char[math.floor(math.random() * 3)];
    const date = String(169338882) + randomIntFromInterval(1000, 4000);
    console.log({ character, radnomword, date, randomnumber});
    return {
        randomnumber,
        radnomword,
        date: new Date(+date)
    }
};

const generatearrayitem = () => {
    arr.push(generateobject())
};

generatearrayitem();
generatearrayitem();
generatearrayitem();

console.log(arr)