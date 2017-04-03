class Singleton {
    constructor() {
        this.bar = 'bar';
    }
    foo() {
        console.log(this.bar);
    }
    static get default() {
        if (!Singleton._default) {
            Singleton._default = new Singleton();
        }
        return Singleton._default;
    }
}
//# sourceMappingURL=singleton.js.map