const fs = require('fs');

const readFile = (file) => {
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) throw err;
    const lines = data.split('\n');
    return lines.join(',');
  });
};

readFile();
