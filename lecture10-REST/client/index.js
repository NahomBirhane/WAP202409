document.getElementById('btn1').onclick = function () {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {console.log(data)});
}

document.getElementById('btn2').onclick = async function () {
    const response = await fetch('http://localhost:3000/products');
    const result = await response.json();
    console.log(result);
}

document.getElementById('btn3').onclick = async () => {
    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify({
            "title": "DELL",
            "price": 3333,
            "description": "Great job!---3333-----"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    console.log(result);
}