import { expect } from 'chai';
import { CheckOut } from '../app/silver-rose';

const RULES: string[] = [
    'A,50,3 for 130',
    'B,30,2 for 45',
    'C,20',
    'D,15'
];

function price(items: string): number {
    const co = new CheckOut(RULES);
    [...items].forEach(item => co.scan(item));
    return co.total;
}

describe('Silver Rose Master Tests', () => {
    it('should work (total)', () => {
        expect(price('')).to.equal(0);
        expect(price('A')).to.equal(50);
        expect(price('AB')).to.equal(80);
        expect(price('CDBA')).to.equal(115);
        expect(price('AA')).to.equal(100);

        expect(price('AAA')).to.equal(130);
        expect(price('AAAA')).to.equal(180);
        expect(price('AAAAA')).to.equal(230);
        expect(price('AAAAAA')).to.equal(260);

        expect(price('AAAB')).to.equal(160);
        expect(price('AAABB')).to.equal(175);
        expect(price('AAABBD')).to.equal(190);
        expect(price('DABABA')).to.equal(190);
    });

    it('should work (incremental)', () => {
        const co = new CheckOut(RULES);
        expect(co.total).to.equal(0);
        co.scan("A"); expect(co.total).to.equal(50);
        co.scan("B"); expect(co.total).to.equal(80);
        co.scan("A"); expect(co.total).to.equal(130);
        co.scan("A"); expect(co.total).to.equal(160);
        co.scan("B"); expect(co.total).to.equal(175);
    });
});
