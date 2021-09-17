for (let x = 1; x < 101; x++)document.write((((x % 2 ? '' : ',Man') + (x % 5 ? '' : 'Plan')) || x) + ',');

const foo1 = () => {bar: "hello"};
const foo2 = () => ({bar: "hello"});