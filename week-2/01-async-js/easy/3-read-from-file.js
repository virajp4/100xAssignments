const fs = require("fs");

function simulateExpensiveOperation() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
}

async function readFileContents(filePath, callback) {
  fs.readFile(filePath, "utf8", async (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    simulateExpensiveOperation();
    await callback(data);
  });
}

const filePath = "sample.txt";

readFileContents(filePath, (data) => {
  console.log("File Contents:", data);
});
