// define functions

function greetUser(name) {
  // define logic
  console.log("Good morning " + name);
}

// involkation/calling
// greetUser("Micah");
// greetUser("Helen");

const { log } = console;

// sum two values
function sumTwoValues(value_one, value_two) {
  const output = value_one + value_two;
  return output;
}

const ans = sumTwoValues(2, 3);
const ans2 = sumTwoValues(7, 2);

log(ans, '\n', ans2);
