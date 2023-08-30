const persons = [{
    name: 'ali',
    age: 20,
    FieldOfStudy: 'mathematics'
}, {
    name: 'mohammad',
    age: 17,
    FieldOfStudy: 'biology'
}, {
    name: 'reza',
    age: 19,
    FieldOfStudy: 'Humanities'
}];

persons.forEach((item, index) => {
    document.body.innerHTML += `
    <li>
    ${index + 1}- <span>${item.name}</span> <span>${item.age}</span>
    </li>`
})