import { expect } from 'chai';
import { AirPlan } from '../src/model/AirPlan.js';

describe('Vehicle Controller', () => {
    it('Call aceleration should return string of status acelerating', () => {
        const airPlan = new AirPlan();
        const result = airPlan.aceleration();
        expect(result).to.equal('Acelerating');
    });

    it('Call tunrOn should return string of status turnedOn', () => {
        const airPlan = new AirPlan();
        const result = airPlan.turnOn();
        expect(result).to.equal('turnedOn');
    });
})
