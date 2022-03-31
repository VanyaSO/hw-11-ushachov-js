'use strict'

let yearOfBirth = prompt('Введите ваш возраст');

if( isNaN(+yearOfBirth) || yearOfBirth === null || yearOfBirth.trim() === ''){
    alert('Жаль что вы не ввели свой возраст');
    yearOfBirth = 'Вы не ввели свой возраст';
}else {
    yearOfBirth = `Ваш возраст ${yearOfBirth}`;
}


let city = prompt('В каком городе ты проживаешь?');

switch (city) {
    case 'Киев':
    case 'киев':
        city = 'Ты живешь в столице Украины';
        break;
    case 'Москва':
    case 'москва':
        city = 'Ты живешь в столице рашки';
        break;
    case 'Берлин':
    case 'берлин':
        city = 'Ты живешь в столице Германии';
        break;
    case null:
    case '':
    case ' ':
        alert('Жаль что вы не ввели свой город');
        city = 'Вы не ввели свой город';
        break;
    default :
        city = `Ты живешь в городе ${city}`;
        break;
}

let sport = prompt('Какой твой любимый спорт?');

switch (sport) {
    case 'Бокс':
    case 'бокс':
        sport = 'Вау ты хочешь стать как Александр Усик';
        break;
    case 'Фумбол':
    case 'футбол':
        sport = 'Вау ты хочешь стать как Messi';
        break;
    case 'UFC':
    case 'ufc':
    case 'юфс':
        sport = 'Вау ты хочешь стать как Messi';
        break;
    case null:
    case '':
        alert('Жаль что вы не ввели свой любимый спорт');
        sport = 'Вы не выели спорт котоым занимаетесь';
        break;
    default :
        sport = `Крутой выбор спорта, а именно ${sport}`;
        break;
}

alert(` ${yearOfBirth} \n ${city} \n ${sport}`);

location.reload();