const myurl = new URL('/p/a/t/h?course1=nodejs&course2=angular#hash');
console.log(myurl);
console.log(myurl.port);
const searchParams = myurl.searchParams;
console.log(searchParams.get('course1'));
