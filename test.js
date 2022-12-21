require('dotenv').config();

// if (typeof process.env.KEY1 == 'undefined') {
//   console.error('Error: "KEY1" is not set.');
//   console.error('Please consider adding a .env file with KEY1.');
//   process.exit(1);
// }

const a = process.env.KEY1;
const b = process.env.KEY2;

const balanceOf = () => {
  console.log(a);
};

const generator = () => {
  console.log(b);
};

exports.sendSomethingToSmartContract = () => {
  balanceOf();
  generator();
};

