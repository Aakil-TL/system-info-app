const si = require("systeminformation");

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  async function scan() {
    await si.cpu(function (cpuInfo) {
      replaceText(
        `cpuInfo`,
        `cpuinfo.manufacturer: ${cpuInfo.manufacturer}
        cpuinfo.brand: ${cpuInfo.brand}
        cpuinfo.vendor: ${cpuInfo.vendor}
        cpuInfo.physicalCores: ${cpuInfo.physicalCores}
        cpuinfo.processore: ${cpuInfo.processors}
       
        `
      );
    });

    await si.system(function (systemInfo) {
      replaceText(
        `systemInfo`,
        `systemInfo.manufacturer: ${systemInfo.manufacturer}
          systemInfo.model: ${systemInfo.model}
          `
      );
    });

    await si.mem(function (memInfo) {
      replaceText(`ramInfo`, `Ram: ${memInfo.total / (1024 * 1024 * 1024)} GB`);
    });

    await si.osInfo(function (osInfo) {
      replaceText(
        `osInfo`,
        `osInfo.platform: ${osInfo.platform}
        osInfo.codename: ${osInfo.codename}
        osInfo.release: ${osInfo.release}
        osInfo.build: ${osInfo.build}
        `
      );
    });

    await si.chassis(function (chassis) {
      replaceText(
        `chassis`,
        `chassis.manufacturer: ${chassis.manufacturer}
          chassis.model: ${chassis.model}
          chassis.type: ${chassis.type}
          `
      );
    });

    await si.battery(function (battery) {
      replaceText(
        `battery`,
        `battery.hasBattery: ${battery.hasBattery}
          battery.isCharging: ${battery.isCharging}
          battery.percent: ${battery.percent}
            `
      );
    });
  }

  scan();
});
