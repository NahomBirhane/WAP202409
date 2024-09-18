import React, { useEffect, useState } from 'react'

export default function Logging() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Logging here', count);
    });
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}
