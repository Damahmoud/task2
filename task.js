const axios = require('axios');
const fs = require('fs');

const user = process.argv[2];
const url = `https://api.github.com/users/${user}/repos`;

axios.get(url).then(r => {
    const repo = [];
    for (let i = 0; i < r.data.length; i++) {
      repo.push(r.data[i].name);
    }
    fs.writeFile(`${user}.txt`, repo.join('\n'), (err) => {  
      if (err) {
        console.error('err');
      } else {
        console.log('done');
      }
    });
  }).catch(error => {
    console.error('err2'); 
});
