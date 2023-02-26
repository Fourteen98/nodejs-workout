const { readFile, writeFile, read } = require('fs');

readFile('./content/first.txt','utf8', (err, result) => {
  if (err)
    return err;
  console.log(result);
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      return err;
    }
    console.log(result);
    const second = result;
    writeFile('./content/result-async.txt', `Here is the result ${first}, ${second}`, (err, result) => {
      if (err) {
        return err;
      }
    })
  })
})