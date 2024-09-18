import React, { ReactNode } from "react";

export default function Son(props: { children: ReactNode }) {
    const {children} = props;
    return (
        <div>
            <h1>Son</h1>
            {children}
        </div>
    )
}
