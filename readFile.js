const fs = require('fs');
const path = process.argv[2] || '.';

const writeStream = fs.createWriteStream(`${path}/data.js`);
writeStream.once('open', function (fd) {
  writeStream.write('const Data = [{input:[\n');
});

const readerStream = fs.createReadStream('data.txt');
readerStream.on('data', (chunk) => {
  const splitted = chunk.toString('utf8').replace(/\r/g, '').split(/\n/g)
  const formatted = splitted.map( element => 
    typeof element === 'number' ? element : `"${element}"`
  ).join(',');
  writeStream.write(formatted);
});

readerStream.on('end', () => {
  writeStream.write('], output:""}];\n\n');
  writeStream.write('module.exports = { Data };\n');
});
