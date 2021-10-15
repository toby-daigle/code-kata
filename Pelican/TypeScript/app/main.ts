import { CheckOut } from './pelican';
import { expect } from 'chai';

export const RULES: string[] = [
    'A,50,3 for 130',
    'B,30,2 for 45',
    'C,20',
    'D,15'
];

const co = new CheckOut(RULES);

co.scan("A");
console.log('Scanned A', co.total);
co.scan("B");
console.log('Scanned B', co.total);
co.scan("A");
console.log('Scanned A', co.total);
co.scan("A");
console.log('Scanned A', co.total);
co.scan("B");
console.log('Scanned B', co.total);
