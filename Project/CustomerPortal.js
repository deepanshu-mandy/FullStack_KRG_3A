import React from 'react';
import AuthService from '../services/authService';

const CustomerPortal = () => {
    const currentUser = AuthService.getCurrentUser();
    return (
        <div className="container">
            <header>
                <h3>Welcome to your Dashboard, {currentUser?.name}!</h3>
            </header>
            <p>Here you can view your orders and manage your profile.</p>
        </div>
    );
};

export default CustomerPortal;
