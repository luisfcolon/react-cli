import fs from 'fs';

function writeComponentFile(filename, content, path) {
  fs.writeFile(filename, content, (error) => {
    if (error) {
      return console.log(error);
    }

    console.log(`${filename} was saved.`);
  });
}

export default writeComponentFile;
