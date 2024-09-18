import React, { ChangeEvent, useState } from 'react'

type PropsType = {
    onData: (data: number) => void;
    onContent: (data: string) => void;
}


export default function Child({onData, onContent}: PropsType) {
    const [count, setCount] = useState(0);
    const [content, setContent] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setContent(value);
        // onContent(value);
    }

    return (
        <div>
            <h2>Child: {count}, {content}</h2>
            <button onClick={() => setCount(prev => prev+1)}>+1</button>
            <button onClick={() => {onData(count); onContent(content)}}>Send to Parent</button>

            <input value={content} onChange={handleChange}/>
        </div>
    )
}
