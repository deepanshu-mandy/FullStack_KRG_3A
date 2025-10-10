import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import AuthService from './services/authService';
import Login from './components/Login';
import Signup from './components/Signup';
import SellerPortal from './components/SellerPortal';
import CustomerPortal from './components/CustomerPortal';

// A small component to handle logout and navigation
const LogoutLink = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        AuthService.logout();
        navigate('/login');
        window.location.reload();
    };
    return <a href="/login" className="nav-link" onClick={handleLogout}>Logout</a>;
};

const App = () => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return (
        <Router>
            <div>
                <nav className="navbar">
                    <Link to="/" className="navbar-brand">ApnaDukaan</Link>
                    <div className="navbar-nav">
                        {currentUser ? (
                            <>
                               <li className="nav-item">
                                   <span className="nav-link">Welcome, {currentUser.name}</span>
                               </li>
                                <li className="nav-item">
                                    <LogoutLink />
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link">Sign Up</Link>
                                </li>
                            </>
                        )}
                    </div>
                </nav>

                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<h2>Welcome to ApnaDukaan Home Page!</h2>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/seller-portal" element={<SellerPortal />} />
                        <Route path="/customer-portal" element={<CustomerPortal />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
