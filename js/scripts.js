const person = {
    "name": 'Gino',
    height: 180,        // Stiamo esprimendo il valore in CM
    'weight': 75.5,
    age: 27,
    email: 'gino@boolean.careers',
    knownLanguages: [
        'JS',
        'PHP'
    ],
    married: false,
    sayHi() {
        console.log('Hi!');
    }
};

console.log('person', person, typeof person);
console.log('person.name', person.name, typeof person.name);
console.log('person["name"]', person['name'], typeof person['name']);
console.log('person.weight', person.weight, typeof person.weight);
console.log('person["weight"]', person['weight'], typeof person['weight']);
console.log('person.married', person.married, typeof person.married);
console.log('person["married"]', person['married'], typeof person['married']);

console.log('La mail di Gino è:', person.email);

person.sayHi();

console.log('document', document, typeof document);
console.log('console', console, typeof console);

// const interestingKey = prompt('Quale informazione vuoi avere?');
// console.log(interestingKey);

// alert(person.interestingKey);            // Facendo così sto cercando la chiave che si chiama interestingKey all'interno di person
// alert(person['interestingKey']);         // Facendo così sto cercando la chiave che si chiama interestingKey all'interno di person
// alert(person[interestingKey]);              // Facendo così sto cercando la chiave che si chiama come IL VALORE CONTENUTO all'interno della variabile interestingKey

// person.booleanClass = 'Classe 129';         // Dato che la chiave booleanClass non esiste all'interno di person, la aggiunge e la valorizza con la stringa data
person['booleanClass'] = 'Classe 129';         // Dato che la chiave booleanClass non esiste all'interno di person, la aggiunge e la valorizza con la stringa data
console.log(person);

// person.name = 3;                  // Dato che la chiave name esiste all'interno di person, la aggiorna con il valore dato
person['name'] = 3;                  // Dato che la chiave name esiste all'interno di person, la aggiorna con il valore dato
console.log(person);


// Voglio stampare tutte le chiavi e tutti i valori dell'oggetto person
const keyNames = [];
for (let pippo in person) {
    console.log('Valore della chiave ' + pippo + ':', person[pippo]);
    keyNames.push(pippo);
}

console.log('keyNames', keyNames);

const arr = [1, 2, 3];
for (let elem in arr) {
    console.log(elem, arr[elem]);
}


console.log(person.knownLanguages[0]);
console.log(person['knownLanguages'][0]);  // person -> person['knownLanguages'] -> person['knownLanguages'][0]

console.log(person.knownLanguages);
console.log(person['knownLanguages']);  // person -> person['knownLanguages']

/* 
    person                          -> questa è la variabile che mi contiene l'oggetto
          ['knownLanguages']        -> in questo modo, estraggo il valore della chiave knownLanguages
                            [0]     -> dato che il valore contenuto nella chiave knownLanguages è un array, accedo ai suoi elementi tramite indice numerico
*/

const class130Students = [
    {
        firstName: 'Claudio',
        lastName: 'Patti',
        age: 25,
        glasses: false,
        languages: [
            'HTML',
            'CSS',
            'JS',
        ],
    },
    {
        firstName: 'Salvatore',
        lastName: 'Impellizzeri',
        age: 22,
        glasses: true,
        languages: [
            'CSS',
            'JS',
        ],
    },
    {
        firstName: 'Michele',
        lastName: 'Bonanno',
        age: 7,
        glasses: false,
        languages: [
            'HTML',
            'JS',
        ],
    },
];

const alessandro = {
    nome: 'Alessandro',
    cognome: 'Sclafani',
    eta: 26,
    occhiali: false,
    linguaggi: [
        'JS',
    ],
};

class130Students.push(alessandro);

for (let i = 0; i < class130Students.length; i++) {
    console.log('--------------------------------------');
    console.log(class130Students[i]);

    console.log('CHIAVI E VALORI PRESENTI ALL INTERNO DI QUESTO OGGETTO:');
    console.log('-  firstName:', class130Students[i].firstName);
    console.log('-  lastName:', class130Students[i].lastName);
    console.log('-  age:', class130Students[i].age);
    console.log('-  glasses:', class130Students[i].glasses);
    console.log('-  languages:', class130Students[i].languages);

    // for (let key in class130Students[i]) {
    //     // console.log('-', key);
    //     console.log('- ' + key + ':', class130Students[i][key]);
    // }
    console.log('--------------------------------------');
}