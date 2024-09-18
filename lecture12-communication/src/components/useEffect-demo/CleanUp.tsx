import React, { useEffect, useState } from 'react'

export default function CleanUp() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds(prev => prev + 1);
            console.log('inside Interval', seconds);
        }, 1000);
        return () => {
            clearInterval(timerId);
        }
    }, []);

    return (
        <div>
            Time: {seconds}
        </div>
    )
}
