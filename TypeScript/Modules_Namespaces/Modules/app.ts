import * as Devices from './devices';

let phone = new Devices.Phone(),
    notebook = new Devices.Notebook();

Devices.runAllDevices(phone, notebook);
