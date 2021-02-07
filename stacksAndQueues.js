// ---------- valid parens ------------

let pairs = {
  ")": "(",
  "}": "{",
  "]": "["
}

let openers = ["(", "[", "{"];

var isValid = function(s) {
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
      if (openers.includes(s[i])) {
          stack.push(s[i]);
      } else {
          if (stack.length === 0) {
              return false;
          }
          let partner = pairs[s[i]];
          if (stack[stack.length - 1] === partner) {
              stack.pop();
          } else {
              return false;
          }
      } 
  }
  
  return stack.length === 0;
};

let testCases = [
  ["()", true],
  [")", false],
  ["()(", false],
  ["())", false],
  [")()", false],
  ["(())", true],
  ["()()", true],
  ["(", false],
  ["))((", false],
  ["[]", true],
  ["{}", true],
  ["{}{}", true],
  ["[{}]", true],
  ['{[}]', false],
  ["({[]})", true],
  ["({[}])", false]
];

testCases.forEach(test => {
  console.log(test[1] === isValid(test[0]) ? "pass" : `failed with ${test[0]}`);
});