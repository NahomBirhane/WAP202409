// primitive types: number, boolean, string, null, undefined, symbol

// let firstname = null;
// let lastname; //undefined
// console.log(name.trim());

// all falsy values: false, 0, 0.0, '', null, undefined, NaN
// let isAdmin = -10;
// if(isAdmin){
//     console.log('Truthy...')
// } else {
//     console.log('falsy----');
// }

// let num = 2.34;
// console.log(typeof num);

const name1 = 'John';
const name2 = "Smith";

const sentence1 = 'This is "MIU".';
const sentence2 = "It's a cat.";
// template literal
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <script>
        var i = 10;
        let j = 'hello';
        const k = 'world';
        console.log(i, j, k);
    </script> -->
    <script src="./variable-declaration.js" type="text/javascript"></script>
</head>
<body>
    See console for result
</body>
</html>
`;

const firstname = 'John';
const lastname = 'Smith';
const fullname = `${firstname} ${lastname}`;
console.log(fullname);
console.log(typeof fullname);
