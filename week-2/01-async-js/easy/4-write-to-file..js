// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

// The content you want to write to the file
const content = 'hello     world    my    name   is       raman.';

// The file path where you want to write the content
const filePath = 'sample.txt';

// Using the writeFile function to write to the file
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
  } else {
    console.log('File has been written successfully!');
  }
});
