// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * `${this.diameter}`
    }

    get area() {
        return Math.PI * (this.radius ** 2)
    }

    set diameter(newDiam) {
        this.radius = newDiam / 2
    }

    set circumference(newCir) {
        this.radius = newCir / (Math.PI * 2)
    }

    set area(newArea) {

    }


}