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
var Switcher = /** @class */ (function () {
    function Switcher() {
    }
    return Switcher;
}());
var SwitcherDecorator = /** @class */ (function (_super) {
    __extends(SwitcherDecorator, _super);
    function SwitcherDecorator(originalSwitcher) {
        var _this = _super.call(this) || this;
        _this.originalSwitcher = originalSwitcher;
        return _this;
    }
    SwitcherDecorator.prototype["switch"] = function () {
        this.originalSwitcher["switch"]();
    };
    return SwitcherDecorator;
}(Switcher));
var ConsoleSwitcher = /** @class */ (function (_super) {
    __extends(ConsoleSwitcher, _super);
    function ConsoleSwitcher() {
        return _super.call(this) || this;
    }
    ConsoleSwitcher.prototype["switch"] = function () {
        console.log('ConsoleSwitcher.switch');
    };
    return ConsoleSwitcher;
}(Switcher));
var FileSwitcher = /** @class */ (function (_super) {
    __extends(FileSwitcher, _super);
    function FileSwitcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileSwitcher.prototype["switch"] = function () {
        console.log('FileSwitcher.switch');
    };
    return FileSwitcher;
}(Switcher));
var TransactionalSwitcher = /** @class */ (function (_super) {
    __extends(TransactionalSwitcher, _super);
    function TransactionalSwitcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionalSwitcher.prototype["switch"] = function () {
        console.log('TransactionalSwitcher.start');
        _super.prototype["switch"].call(this);
        console.log('TransactionalSwitcher.commit');
    };
    return TransactionalSwitcher;
}(SwitcherDecorator));
var LoggingSwitcher = /** @class */ (function (_super) {
    __extends(LoggingSwitcher, _super);
    function LoggingSwitcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoggingSwitcher.prototype["switch"] = function () {
        console.log('LoggingSwitcher.start');
        _super.prototype["switch"].call(this);
        console.log('LoggingSwitcher.end');
    };
    return LoggingSwitcher;
}(SwitcherDecorator));
var switchers = [
    new ConsoleSwitcher(),
    new FileSwitcher(),
    new LoggingSwitcher(new TransactionalSwitcher(new FileSwitcher()))
];
for (var _i = 0, switchers_1 = switchers; _i < switchers_1.length; _i++) {
    var switcher = switchers_1[_i];
    switcher["switch"]();
}
