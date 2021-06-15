export class Vehicle {

    constructor(color, price, brand, plate) {
        this.color = color,
            this.price = price,
            this.brand = brand,
            this.plate = plate
    }

    turnOn() {
        return 'turnedOn'
    }

    turnOff() {
        return 'turnedOff'
    }

    aceleration() {
        return 'Acelerating'
    }

    break() {
        return 'breaking'
    }
}
