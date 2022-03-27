const year = +prompt('Enter your birth year: ');
const city = prompt('What city do you live?');
const sport = prompt('What is your favourite kind of sport?');

if (year < 1 || isNaN(year)){
    alert('I\'m sorry you didn\'t want to give your date of birth.')
}
else if (city === null || city.length < 1){
    alert('I\'m sorry you didn\'t want to give your city where you live.')
}
else if (sport === null || sport.length < 1){
    alert('I\'m sorry you didn\'t want to give your favourite kind of sport.')
}
else {
    let cityString;
    switch (city) {
        case 'Kiev':
            cityString = 'You live in capital: ' + city;
            break;
        case 'Moscow':
            cityString = 'You live in capital: ' + city;
            break;
        case 'Minsk':
            cityString = 'You live in capital: ' + city;
            break;
        default:
            cityString = 'You live in the city: ' + city;
            break;
    }
    let sportString;
    switch (sport) {
        case 'football':
            sportString = 'Cool! You want to be like Cristiano Ronaldo!';
            break;
        case 'box':
            sportString = 'Cool! You want to be like Mike Taison!';
            break;
        case 'tennis':
            sportString = 'Cool! You want to be like Rojer Federer!';
            break;
        default:
            sportString = 'Cool! You will be a great champion!';
            break;

    }

    let age = 2022 - year;
    alert('Yor are ' + age + ' years old \n' + cityString + '\n' + sportString)
}