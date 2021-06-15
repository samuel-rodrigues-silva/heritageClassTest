import { expect } from 'chai';
import { Vehicle } from '../src/model/Vehicle.js';

describe('Vehicle Controller', () => {
    it('Call aceleration should return string of status acelerating', () => {
        const vehicle = new Vehicle();
        const result = vehicle.aceleration();
        expect(result).to.equal('Acelerating');
    });

    it('Call tunrOn should return string of status turnedOn', () => {
        const vehicle = new Vehicle();
        const result = vehicle.turnOn();
        expect(result).to.equal('turnedOn');
    });
})
