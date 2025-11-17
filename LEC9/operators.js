// ARITHMETIC OPERATORS
let a = 10;
let b = 3;

// console.log("Arithmetic Operators:");
// console.log("a + b =", a + b);     // 13
// console.log("a - b =", a - b);     // 7
// console.log("a * b =", a * b);     // 30
// console.log("a / b =", a / b);     // 3.333...
// console.log("a % b =", a % b);     // 1
// console.log("a ** b =", a ** b);   // 1000

// let x = 5;
// console.log("x++ =", x++); 
// console.log("after x++ =", x); 
// console.log("++x =", ++x);

// ASSIGNMENT OPERATORS

// let c = 5;
// console.log("Assignment Operators:");
// c += 3; console.log("c += 3 =", c);
// c -= 2; console.log("c -= 2 =", c);
// c *= 4; console.log("c *= 4 =", c);
// c /= 2; console.log("c /= 2 =", c);
// c %= 3; console.log("c %= 3 =", c);
// c = 5
// c **= 2; console.log("c **= 2 =", c);

// // COMPARISON OPERATORS
// console.log("Comparison Operators:");
// console.log("5 == '5' =>", 5 == "5");
// console.log("5 === '5' =>", 5 === "5");
// console.log("5 != '5' =>", 5 != "5");
// console.log("5 !== '5' =>", 5 !== "5");
// console.log("7 > 4 =>", 7 > 4);
// console.log("3 < 8 =>", 3 < 8);
// console.log("5 >= 5 =>", 5 >= 5);
// console.log("2 <= 1 =>", 2 <= 1);

// // LOGICAL OPERATORS
// console.log("Logical Operators:");
// console.log("true && false =>", true && false);
// console.log("true || false =>", true || false);
// console.log("!true =>", !true);


// // BITWISE OPERATORS
// console.log("Bitwise Operators:");
// console.log("5 & 1 =", 5 & 1);
// console.log("5 | 1 =", 5 | 1);
// console.log("5 ^ 1 =", 5 ^ 1);
// console.log("~5 =", ~5);
// console.log("5 << 1 =", 5 << 1);
// console.log("5 >> 1 =", 5 >> 1);
// console.log("5 >>> 1 =", 5 >>> 1);

// // TERNARY OPERATOR
// let age = 17;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log("Ternary Operator: age >= 18 ?", result);

// // TYPE OPERATORS
// console.log("Type Operators:");
// console.log("typeof 123 =>", typeof 123);
// console.log("typeof 'hello' =>", typeof "hello");

// let arr = [1, 2, 3];
// console.log("arr instanceof Array =>", arr instanceof Array);

// let obj = { name: "John" };
// console.log("'name' in obj =>", "name" in obj);

// // NULLISH COALESCING OPERATOR
// console.log("Nullish Coalescing Operator:");
// let user = null;
// console.log("user ?? 'Guest' =>", user ?? "Guest");


// // SPREAD OPERATOR
// console.log("Spread Operator:");
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5];
// console.log(arr2);

// let obj1 = { a: 1, b: 2 };
// let obj2 = { ...obj1, c: 3 };
// console.log(obj2);

// // REST OPERATOR

// console.log("Rest Operator:");
// function sum(...numbers) {
//   return numbers.reduce((acc, val) => acc + val, 0);
// }
// console.log("sum(1,2,3,4) =", sum(1,2,3,4));


// // VOID OPERATOR

// console.log("Void Operator:");
// console.log(void 0); // undefined

// // COMMA OPERATOR

console.log("Comma Operator:");
let d = (1, 2, 3);
console.log(d); // 3 (last value)
