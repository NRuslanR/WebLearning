var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function reduceArray(args) {
    var result = '';
    for (var i = 0; i < args.length; ++i) {
        if (result == '')
            result = args[i].toString();
        else
            result += ', ' + args[i].toString();
    }
    return result;
}
console.log("reduce(3, 4, 19, 20) = " + reduceArray([3, 4, 19, 20]));
var Entity = /** @class */ (function () {
    function Entity(id) {
        this.id = id;
    }
    Entity.prototype.printInfo = function () {
        console.log("Entity " + this.id);
    };
    return Entity;
}());
var x = {};
x['first'] = new Entity('1-xx');
x['second'] = new Entity('2-xx');
x['first'].printInfo();
x['second'].printInfo();
var z = new Entity(3);
var NumberEntity = /** @class */ (function (_super) {
    __extends(NumberEntity, _super);
    function NumberEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NumberEntity;
}(Entity));
var EntityInfo = /** @class */ (function () {
    function EntityInfo() {
    }
    return EntityInfo;
}());
var info = new EntityInfo();
function entityFactory(type) {
    return new type();
}
