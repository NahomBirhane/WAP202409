const result = new Promise((resolve: (value: number) => void) => {
  resolve(1)
}).then(data => { return data * 2 }) //return new Promise( (resolve) => resolve(data * 2))
.then(data => console.log(data));

console.log(result);
