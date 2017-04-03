class Base {
}
let base = new Base();
base.state = 0;
class Derived extends Base {
}
Derived.prototype = base;
let derived = new Derived();
//# sourceMappingURL=prototype.js.map