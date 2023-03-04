## using **DESTRUCTURING** to swap values of two variables
```javascript
let a = 8, b = 6;
[a,b] = [b,a];
```

## removing first two elements of an array using rest operator and destructuring

```javascript
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b,...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

## Use Destructuring Assignment to Pass an Object as a Function's Parameters

Consider the code below:
```
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

This effectively destructures the object sent into the function. This can also be done in-place:

```
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

- ### Example
```
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
// Only change code above this line
```

## Write Concise Object Literal Declarations Using Object Property Shorthand
ES6 adds some nice support for easily defining object literals.

Consider the following code:
```
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```
getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write `x: x`. You can simply write`x`once, and it will be converted to `x: x` (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:
```
const getMousePosition = (x, y) => ({ x, y });
```