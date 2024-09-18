import { ReactNode } from "react";

export default function Child({ count, children }: {count: number, children: ReactNode}) {
    return (
        <>
            <div>Child, count: {count + 1}</div>
            {children}     
        </>
    )
}
