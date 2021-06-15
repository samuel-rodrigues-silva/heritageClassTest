import { expect } from 'chai';
import { Car } from '../src/model/Car.js';

describe('Car Controller', () => {
    it('Call aceleration should return string of status acelerating', () => {
        const car = new Car();
        const result = car.aceleration();
        expect(result).to.equal('Acelerating');
    });

    it('Call tunrOn should return string of status turnedOn', () => {
        const car = new Car();
        const result = car.turnOn();
        expect(result).to.equal('turnedOn');
    });
})
