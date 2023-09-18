// Add your Circle class here

class Circle {
    
    constructor (radius) {
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }

    get circumference () {
        let pi = Math.PI
        return (this.radius *2) * pi
    }

    get area() {
        let pi = Math.PI
        return pi * (this.radius * this.radius)
    }

    set diameter(newDiameter) {
        this.radius = newDiameter/2
    }

    set circumference( newCircum) {
        let pi = Math.PI
        this.radius = (newCircum/2) / pi
    }

    set area(newArea) {
        let pi = Math.PI
        this.radius = Math.sqrt(newArea/pi)
    }
}

