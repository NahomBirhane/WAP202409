try {
    throw new Error('Whoops!');
} catch (e) {
    console.log(e.name);
    console.log(e.message);
    // console.log(e.stack);
} finally {
    console.log('always executed');
}