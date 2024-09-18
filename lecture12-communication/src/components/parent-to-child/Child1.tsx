import { ReactNode } from "react";

type PropsType = {
    count: number;
    username: string;
    age: number;
    list: string[],
    obj: {
        x: number;
        y: number;
    },
    cb: () => void;
    child: ReactNode
}

export default function Child(props: PropsType) {
    const { count, username, age, list, obj, cb, child } = props;
    return (
        <>
            <div>Child, count: {count}</div>
            <div>username: {username}</div>
            <div>Age: {age}</div>
            <div>List: {list}</div>
            <div>obj: {obj.x}, {obj.y}</div>
            <button onClick={cb}>Click me</button>
            {child}
        </>
    )
}
