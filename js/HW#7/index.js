"use strict";
const userslist = [
    {
        Fullname: "ali jafari",
        Age: 20,
        Height: 180,
        Weight: 64,
        Gender: "male",
        FOW: "engineer",
        PhoneNumber: 917,
        MaritalStatus: false,
        ID: "G-108361",
    }, {
        Fullname: "qoli jafari",
        Age: 20,
        Height: 170,
        Weight: 68,
        Gender: "male",
        FOW: "teacher",
        PhoneNumber: 917,
        MaritalStatus: true,
        ID: "G-203846",
    }, {
        Fullname: "sara jafari",
        Age: 19,
        Height: 170,
        Weight: 54,
        Gender: "female",
        FOW: "engineer",
        PhoneNumber: 917,
        ID: "G-197362",
    },
];
console.log(userslist);
const createuser = (user) => {
    userslist.push(user);
};
createuser({
    Fullname: "soli jafari",
    Age: 28,
    Height: 178,
    Weight: 68,
    Gender: "male",
    FOW: "doctor",
    PhoneNumber: 917,
    MaritalStatus: true,
    ID: "G-189735",
});
console.log(userslist);
const updateuser = (id, user) => {
    const userIndex = userslist.findIndex((item) => item.ID === id);
    userslist[userIndex] = Object.assign(Object.assign({}, userslist[userIndex]), user);
};
updateuser("G-108361", { Age: 21 });
console.log(userslist);
const deleteuser = (id) => {
    const userIndex = userslist.findIndex((item) => item.ID === id);
    userslist.splice(userIndex, 1);
};
deleteuser("G-108361");
console.log(userslist);
