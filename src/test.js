import solver from "rubiks-cube-solver"
let cubeState = [
       'bllffuffu', // front - green
       'ffurrdrrd', // right - red
       'rbbruuruu', // up - white
       'ddfddflll', // down - yellow
       'dddullull', // left - orange
       'rrfbbbbbb' // back - blue
     ].join('');
     
let solveMoves = solver(cubeState);
console.log(solveMoves);