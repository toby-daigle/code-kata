import { expect } from 'chai';
import { Passiflore } from '../app/passiflore';

describe('Passiflore', () => {
    it('should sort', () => {
        const phrase = 'When not studying nuclear physics, Bambi likes to play beach volleyball.';
        const expectedResult = 'aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy';
        const result = Passiflore(phrase);

        expect(result).to.equal(expectedResult);
    });

});
