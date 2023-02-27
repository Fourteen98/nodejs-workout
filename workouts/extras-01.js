const { readFile, writeFile, write } = require('fs');
// const { readFile, writeFile, write } = require('fs').promises;

const util = require('util')

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise('./content/first.txt', 'utf-8');
    const second = await readFilePromise('./content/second.txt', 'utf-8');
    await writeFilePromise('./content/result-mind-grenade.txt', `This is aWesome: ${first} ${second}`);
    console.log(first, second);
  } catch (err) {
    console.log(err)
  }

}

start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }