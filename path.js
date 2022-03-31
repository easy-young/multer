const os = require('os');
const path = require('path');

// console.log(path);

let dir;
if (os.platform() === 'win32') {
    dir = 'C:\\';
} else if (os.platform() === 'darwin') {
    dir = os.homedir()+'/';
}

console.log(__dirname); // /home/jenny/workspace/220315/multer
console.log(__filename); // /home/jenny/workspace/220315/multer/path.js
console.log(process.cwd()); // /home/jenny/workspace/220315/multer

let dir1 = path.join(__dirname, 'jenny.js'); // /home/jenny/workspace/220315/multer/jenny.js
let dir2 = path.resolve(__dirname, 'jenny.js'); // /home/jenny/workspace/220315/multer/jenny.js

dir1 = path.join(__dirname, '/jenny.js'); // /home/jenny/workspace/220315/multer/jenny.js (절대경로 무시)
dir2 = path.resolve(__dirname, '/jenny.js'); // /jenny.js (절대경로 존중)

console.log(dir1);
console.log(dir2);

let str = 'server.js';
console.log(str.split('.')[1]); // js
console.log(path.extname('server.js')); // .js
console.log(path.dirname('/home/jenny/workspace/220315/multer/jenny.js')); // /home/jenny/workspace/220315/multer
console.log(path.basename('/home/jenny/workspace/220315/multer/jenny.js')); // jenny.js
console.log(path.basename('/home/jenny/workspace/220315/multer/jenny.js', '.js')); // jenny
console.log(path.basename('/home/jenny/workspace/220315/multer/jenny.js').split('.')[0]); // jenny