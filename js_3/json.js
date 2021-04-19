const obj = {
  "foo": "bar",
  "marvin": 42,
  "dharma": [4, 8, 15, 16, 23, 42],
  "avg": {
    "cap": "Steve Rogers"
  }
}

const objAsJson = JSON.stringify(obj)

console.log(objAsJson)
console.log(JSON.parse(objAsJson))