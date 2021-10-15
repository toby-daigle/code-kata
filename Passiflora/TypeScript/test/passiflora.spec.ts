import { expect } from 'chai';
import { Passiflora } from '../app/passiflora';

describe('Passiflora', () => {
    it('should sort', () => {
        const phrase = 'When not studying nuclear physics, Bambi likes to play beach volleyball.';
        const expectedResult = 'aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy';
        const result = Passiflora(phrase);

        expect(result).to.equal(expectedResult);
    });

});
