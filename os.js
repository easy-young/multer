// 내부 라이브러리
const os = require('os');
console.log(os.cpus().length); // 4
console.log(os.cpus()); // model, speed, times ...
console.log(os.platform()); // linux
console.log(os.homedir()); // home/jenny
console.log(os.hostname()); // DESKTOP-PUMI14Q
console.log(os.freemem()); // 2342322176
console.log(os.totalmem()); // 6120857600
console.log(os.networkInterfaces());