import solver from "rubiks-cube-solver";
let cubeState = "ffdffdffdrrrrrrrrruufuufuufddbddbddblllllllllubbubbubb";
let solveMoves = solver(cubeState);
console.log(solveMoves);
