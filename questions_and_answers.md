<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Here the variable is declared in the first line, the initial value of the variable is set in the second line due to which the empty object initialized in the third line will be logged to the console.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here the add function accepts two parameters and returns the sum of the two parameters. A string and a number are given as two arguments when calling the function. Because of the implicit conversion here, the integer value is converted to string. Finally the string concatenation is done here and a string '12' is returned.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Here in the first line the food variable is set to ['🍕', '🍫', '🥑', '🍔'] as an object. The second and third lines set the man of the favorite info object under the info object. In the second line, the value of 0 position is taken by slicing the food object, but no change is made to the food object, in the third line, the value of the favorite object of info is directly set to "🍝". Finally the info object remains unchanged so the value declared at the very beginning in the last line is consoled.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>A parameter was taken during function declaration and returned using a template literal inside the function, but no arguments were passed during function calling so the parameter's default value was undefined console.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here the count variable is initially set to 0. nums are placed in the array [0, 1, 2, 3]. Condition is given inside by foreach on nums array if num from nums is true then 1 will be added to the previous value of count. During the foreach loop, first num returns 0 due to which the value of count is not added the first time, the remaining three times returns 1, 2, 3 so then 1 is added to the value of count and finally the value is 3.</i>

</p>
</details>
