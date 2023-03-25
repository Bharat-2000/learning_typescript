import { useState } from "react";

type AuthUser = {
    name: string,
    email: string,
};

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const handleLogin = () => {
        setUser({
            name: 'Bharat',
            email: 'bharat@example.com ',
        })
    };
    const handleLogout = () => {
        setUser({
            name: "'no user located'",
            email: "'no email located'"
        });
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}