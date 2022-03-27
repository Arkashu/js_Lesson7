const obj = {
    name: 'John',
    last: 'Famil',
    gender: 'male',
}
function clone(obj) {
    if (typeof obj !== 'object'){
        return console.log('Error: is not object type!');
    }
    else if (obj === null){
        return console.log('Error: type is null!');
    }
    else if (Object.keys( obj ).length < 1 ){
        return console.log('Error: Object length < 1 !!! ');
    }
    else {
        let cloneObj = {};
        for (let key in obj) {
            cloneObj[key] = obj[key]
        }
        typeof cloneObj === 'object' ? console.log(cloneObj) : null;
    }
}

const dog = {
    name: 'Tuzik',
    age: 5,
    gender: 'male',
    children: 2
}
clone(dog);