import { getScore } from "../src/app.js";

const object = {
  AlexPo: 5,
  PoAlex: 3,
  Alex: 2,
  Alexey: 4,
  Alexander: 0,
};

// console.log(object);

// const res = getScore(object);
// console.log(res);

const result = getScore(object);
console.log(result);
