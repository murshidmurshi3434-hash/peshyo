let rows = 5;

console.log("Hourglass Pattern");

// Upper part
for (let i = rows; i >= 1; i--) {
  let line = "";

  for (let j = 0; j < rows - i; j++) {
    line += " ";
  }

  for (let j = 0; j < 2 * i - 1; j++) {
    line += "*";
  }

  console.log(line);
}

// Lower part
for (let i = 2; i <= rows; i++) {
  let line = "";

  for (let j = 0; j < rows - i; j++) {
    line += " ";
  }

  for (let j = 0; j < 2 * i - 1; j++) {
    line += "*";
  }

  console.log(line);
}