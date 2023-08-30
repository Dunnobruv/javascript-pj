type usertype = {
    Fullname?: string;
    Age?: number;
    Height?: number;
    Weight?: number;
    Gender?: "female" | "male";
    FOW?: string;
    PhoneNumber?: number;
    MaritalStatus?: boolean; 
    ID?: string;
};

const userslist: Array<usertype> = [
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

const createuser = (user: usertype): void => {
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

const updateuser = (id: usertype["ID"], user: usertype) => {
    const userIndex: number = userslist.findIndex((item) => item.ID === id);
    userslist[userIndex] = { ...userslist[userIndex], ...user };
};
updateuser("G-108361", { Age: 21 })

console.log(userslist)

const deleteuser = (id: usertype["ID"]) => {
    const userIndex: number = userslist.findIndex((item) => item.ID === id);
    userslist.splice(userIndex, 1)
}
deleteuser("G-108361");

console.log(userslist);