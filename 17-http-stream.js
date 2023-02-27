const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', { highWaterMark: 900000, encoding: 'utf8' });

// default buffer size is 64kb
// last buffer - remainder
// highWaterMark - control size 
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createdReadStream('./content/big.txt', {encoding: 'utf8'})


stream.on('data', (result) => {
  console.log(result);
})

stream.on('error', (err) => console.log(err));