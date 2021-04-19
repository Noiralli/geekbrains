// const promise = new Promise((resolve, reject) => {
// 	const { res, status } = xml.send()

// 	if (status === 200) {
// 		resolve(data)
// 	} else {
// 		reject()
// 	}
// });

// promise.then(() => {
// 	// Колбэк для resolve()
// 	},
// 	() => {
// 	// Колбэк для reject()
// });

const async = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a) {
        const b = a + 1;
        resolve(b);
      } else {
        reject('Error dsfhbsdafbsadkjfbskjhfbdskjhfbkjhfsdkjhb');
      }
    }, 200);
  });
}

// async(5).then((b) => {
//   console.log(b);      // Сработает первый колбэк и выведет в консоль 6
// }, (error) => {
//   console.log(error)
// });

// async().then((b) => {
//   console.log(b);
// }, (error) => {
//   console.log(error)   // Сработает второй колбэк и выведет в консоль 'Error'
// });

const giveMeNumber = (number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, 200)
  });
}

giveMeNumber(5)
  .then((number) => { return number + 1; })
  .then((number) => { return number + 10; })
  .then((number) => { console.log(number) })
	.catch((err) => console.log(error))
	.finally(() => console.log('FINALY'))
