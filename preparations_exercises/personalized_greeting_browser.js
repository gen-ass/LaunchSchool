let name = prompt("What's your last name?");
let surname = prompt("What's your first name?");
// document.write(`Good Morning, ${name}`);

myFunction = () => {
  document.getElementById("demo").innerHTML = `Good Morning, ${name} ${surname}!`;
};