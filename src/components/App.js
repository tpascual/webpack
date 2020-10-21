export class HelloWord {
    constructor(name) {
        this.name = name
    }

    greet() {
        return `Hola Webpack!! ${this.name}`
    }
}