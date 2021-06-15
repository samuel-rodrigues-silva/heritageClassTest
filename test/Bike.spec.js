import { expect } from 'chai';
import { Bike } from '../src/model/Bike.js';


describe('Bike Controller', () => {
    it('Call aceleration should return string of status acelerating', () => {
        const bike = new Bike();
        const result = bike.aceleration();
        expect(result).to.equal('Acelerating');
    });

    it('Call tunrOn should return string of status turnedOn', () => {
        const bike = new Bike();
        const result = bike.turnOn();
        expect(result).to.equal('turnedOn');
    });
})
