import React, { useEffect, useState } from 'react'

interface User {
    id: number;
    name: string;
}

export default function FetchDemo() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            console.log('fetchUsers......');
            const response = await fetch('https://tinaxing2012.github.io/jsons/data.json');
            const data = await response.json();
            setUsers(data.data.channels);
        }
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    );
}
