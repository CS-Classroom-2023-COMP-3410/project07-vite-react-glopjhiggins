import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProductsPage from './pages/ProductsPage';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={setCurrentPage} />;
            case 'profile':
                return <ProfilePage />;
            case 'products':
                return <ProductsPage />;
            default:
                return <HomePage onNavigate={setCurrentPage} />;
        }
    };

    return (
        <div>
            <Header currentPage={currentPage} onNavigate={setCurrentPage} />
            {renderPage()}
        </div>
    );
}

export default App;