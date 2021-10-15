import { Passiflora } from './passiflora';

const phrases: string[] = [
    'HelloWorld'
];

phrases.forEach(phrase => {
    console.log("----------------");
    console.log(phrase)
    console.log("===");
    console.log(Passiflora(phrase));
    console.log();
})
