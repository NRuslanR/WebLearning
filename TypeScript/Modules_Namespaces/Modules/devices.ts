interface IDevice
{
  run(): void;
}

class Phone implements IDevice
{
  run(): void
  {
    console.log('Phone.run');
  }
}

class Notebook implements IDevice
{
  run(): void
  {
    console.log('Notebook.run');
  }
}

function nonExportFunction()
{

}

function runAllDevices(...devices: IDevice[])
{
  for (let device of devices)
    device.run();
}

export { IDevice, Phone, Notebook, runAllDevices };
