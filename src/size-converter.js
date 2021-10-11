const prompt = require("prompt-sync")();

let componentHeight = prompt('your height: ');
let componentWidth = prompt('your width: ');

const screenHeight = 720;
const screenWidth = 1280;

console.log('height:' + (componentHeight / screenHeight) + 'vh');
console.log('width:' + (componentWidth / screenWidth) + 'vw');
