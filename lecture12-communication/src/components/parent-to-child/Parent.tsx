import { useState } from "react";
import Child from "./Child";
import Son from "./Son";

export default function Parent() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Parent, Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            {/* <Child 
                count={count} 
                username='John Smith'
                age={20}
                list={['banana', 'apple']}
                obj={{x:1, y:2}}
                cb={() => console.log('callback')}
                child={<span>This is a span</span>}></Child> */}
            <Child count={count} >
                <div>Hello</div>
            </Child>
            <Son>
                <div>This is from Parent</div>
                <p>This is a P</p>
            </Son>
        </div>
    )
}
