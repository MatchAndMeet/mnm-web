import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'

function Admin() {
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    // 환경변수에서 비밀번호 가져오기
    const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

    useEffect(() => {
        // localStorage에서 인증 상태 확인
        const isAuth = localStorage.getItem('admin_authenticated');
        if (isAuth === 'true') {
            setAuthenticated(true);
            fetchEmails();
        } else {
            setLoading(false);
        }
    }, []);

    const fetchEmails = async () => {
        const { data, error } = await supabase
            .from('emails')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error:', error);
        } else {
            setEmails(data);
        }
        setLoading(false);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (password === ADMIN_PASSWORD) {
            localStorage.setItem('admin_authenticated', 'true');
            setAuthenticated(true);
            fetchEmails();
        } else {
            alert('Wrong password!');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_authenticated');
        setAuthenticated(false);
        setPassword('');
    };

    // 로그인 화면
    if (!authenticated) {
        return (
            <div className="admin-container">
                <h1>Admin Login</h1>
                <form onSubmit={handleLogin} className="login-form">
                    <input
                        type="password"
                        placeholder="Enter admin password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }

    if (loading) {
        return <div className="admin-container">Loading...</div>;
    }

    return (
        <div className="admin-container">
            <h1>Admin - Email Waitlist</h1>
            <p>Total subscribers: {emails.length}</p>

            <table>
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Registered At</th>
                </tr>
                </thead>
                <tbody>
                {emails.map((item) => (
                    <tr key={item.id}>
                        <td>{item.email}</td>
                        <td>{new Date(item.created_at).toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;