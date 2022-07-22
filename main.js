let person;
person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};
let arrayOfPersons;
arrayOfPersons = [{
        firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"
    }, {
        firstName: "Alex", lastName: "Frank", birthDate: "Dec 16, 1982", gender: "male"
    }, {
        firstName: "Nancy", lastName: "Diggler", birthDate: "Mar 29, 1947", gender: "female"
    }, {
        firstName: "Karen", lastName: "Spacy", birthDate: "Oct 25, 1964", gender: "female"
    }, {
        firstName: "Mel", lastName: "Towa", birthDate: "Jul 8, 1998", gender: "female"
    }];
let num = -1
do {
    num += 1;
    console.log('Number:' + num)
} while (num < 1000)

console.log("Object Keys:",Object.keys(person))

console.log("Object Entries:", Object.entries(person))

const oddBirthYear = (arr) => {
    for (let obj of arr) {
        let birthdate = obj.birthDate;
        let year = birthdate.slice(-1)

        if (year %2 !== 0)
            console.log(Object.entries(obj))
    }
}
oddBirthYear(arrayOfPersons)

arrayOfPersons.map(({firstName, lastName, birthDate, gender})=>{
    console.log(`${firstName} ${lastName} was born ${birthDate} as a ${gender}`)
});

function manCheck(male) {
    return male.gender == 'male';
}

console.log(arrayOfPersons.filter(manCheck))

function bdayCheck(date) {
    return date.birthDate.slice(-4) <= 1990;
}

console.log(arrayOfPersons.filter(bdayCheck))
