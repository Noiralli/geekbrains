const async = (a, cb) => {
  setTimeout(() => {
    const b = a + 1;
    cb(b);
  }, 200);
}

async(5, (b) => {
  console.log(b);  // 6
});

// getData(params, (data) => {
//   sendData(newData, (res) => {
//     sendToAnother(res, (resData) => {
      
//     })
//   })
// })