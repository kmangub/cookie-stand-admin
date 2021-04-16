import { useState } from 'react'
import LoginForm from '../components/login-form';
import { getToken } from '../services/data-fetcher'
import CookieStandAdmin  from '../components/cookie-stand-admin'

export default function Home() {

    const [token, setToken] = useState();

    const [username, setUsername] = useState('');

    async function loginHandler(values) {

        const fetchedToken = await getToken(values);

        setToken(fetchedToken);

        setUsername(values.username);
    }

    function logoutHandler() {
        setToken(null);
    }

    if (!token) return <LoginForm onSubmit={loginHandler} />
    
    return <h2><CookieStandAdmin token={token} username={username} onLogout={logoutHandler}/></h2>
}


