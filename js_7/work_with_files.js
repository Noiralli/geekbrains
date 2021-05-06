const fs = require('fs');
const json_req = require('./files/data.json')

fs.readFile('./files/data.json', 'utf-8', (err, data) => {
  if (!err) {
      const json_data = JSON.parse(data);
      json_data.thksdafnksdffnklsdjnfkljsdnfird = 'dsfkjvndlfkjvnlsdkfjvnlkdfjsnv';

      fs.writeFile('./files/data.json', JSON.stringify(json_data), (err) => {
          if (err) {
              console.log(err);
          }
      })
  } else {
      console.log(err)
  }
});
