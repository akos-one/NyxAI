import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navigation/navbar';
import Footer from '../navigation/footer';

const RootLayout: React.FC = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default RootLayout;