let rows = 5;

// 1. Left Half Pyramid
console.log("1. Left Half Pyramid");
for (let i = 1; i <= rows; i++) {
  console.log("*".repeat(i));
}

// 2. Inverted Left Half Pyramid
console.log("\n2. Inverted Left Half Pyramid");
for (let i = rows; i >= 1; i--) {
  console.log("*".repeat(i));
}

// 3. Full Pyramid
console.log("\n3. Full Pyramid");
for (let i = 1; i <= rows; i++) {
  let line = "";

  for (let j = 1; j <= rows - i; j++) line += " ";
  for (let j = 1; j <= 2 * i - 1; j++) line += "*";

  console.log(line);
}

// 4. Hollow Full Pyramid
console.log("\n4. Hollow Full Pyramid");
for (let i = 1; i <= rows; i++) {
  let line = "";

  for (let j = 1; j <= rows - i; j++) line += " ";

  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1 || i === rows) {
      line += "*";
    } else {
      line += " ";
    }
  }

  console.log(line);
}

// 5. Inverted Full Pyramid
console.log("\n5. Inverted Full Pyramid");
for (let i = rows; i >= 1; i--) {
  let line = "";

  for (let j = 1; j <= rows - i; j++) line += " ";
  for (let j = 1; j <= 2 * i - 1; j++) line += "*";

  console.log(line);
}

// 6. Diamond
console.log("\n6. Diamond");
for (let i = 1; i <= rows; i++) {
  let line = "";

  for (let j = 1; j <= rows - i; j++) line += " ";
  for (let j = 1; j <= 2 * i - 1; j++) line += "*";

  console.log(line);
}
for (let i = rows - 1; i >= 1; i--) {
  let line = "";

  for (let j = 1; j <= rows - i; j++) line += " ";
  for (let j = 1; j <= 2 * i - 1; j++) line += "*";

  console.log(line);
}