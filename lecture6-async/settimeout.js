const timerId = setTimeout(() => alert('Hello'), 1000);
alert(timerId);
clearTimeout(timerId);
alert(timerId);