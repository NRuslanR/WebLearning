define("devices", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.runAllDevices = exports.Notebook = exports.Phone = void 0;
    var Phone = /** @class */ (function () {
        function Phone() {
        }
        Phone.prototype.run = function () {
            console.log('Phone.run');
        };
        return Phone;
    }());
    exports.Phone = Phone;
    var Notebook = /** @class */ (function () {
        function Notebook() {
        }
        Notebook.prototype.run = function () {
            console.log('Notebook.run');
        };
        return Notebook;
    }());
    exports.Notebook = Notebook;
    function nonExportFunction() {
    }
    function runAllDevices() {
        var devices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            devices[_i] = arguments[_i];
        }
        for (var _a = 0, devices_1 = devices; _a < devices_1.length; _a++) {
            var device = devices_1[_a];
            device.run();
        }
    }
    exports.runAllDevices = runAllDevices;
});
define("app", ["require", "exports", "devices"], function (require, exports, Devices) {
    "use strict";
    exports.__esModule = true;
    var phone = new Devices.Phone(), notebook = new Devices.Notebook();
    Devices.runAllDevices(phone, notebook);
});
