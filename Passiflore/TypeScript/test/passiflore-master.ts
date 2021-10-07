import { Passiflore } from '../app/passiflore';

const phrases: string[] = [
    'HelloWorld'
];

phrases.forEach(phrase => {
    console.log("----------------");
    console.log(phrase)
    console.log("===");
    console.log(Passiflore(phrase));
    console.log();
})
