import React from 'react';
import AuthService from '../services/authService';

const SellerPortal = () => {
    const currentUser = AuthService.getCurrentUser();
    return (
        <div className="container">
            <header>
                <h3>Welcome to the Seller Portal, {currentUser?.name}!</h3>
            </header>
            <p>This is your dashboard to manage products and view sales.</p>
        </div>
    );
};

export default SellerPortal;
