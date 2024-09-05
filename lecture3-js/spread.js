let a, b, c, d;
a = [1,2,3];
b = "dog";
c = [42, "cat"];

// d = [1,2,3,'d', o, g, 42, cat]

d = [...a, ...b, ...c];
console.log(d);

