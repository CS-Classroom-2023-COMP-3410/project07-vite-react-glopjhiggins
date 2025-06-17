import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={setCurrentPage} />;
            case 'profile':
                return <ProfilePage />;
            case 'products':
                return <ProductsPage
                    cartItems={cartItems}
                    onAddToCart={addToCart}
                    onRemoveFromCart={removeFromCart}
                    onCheckout={() => alert('Checkout completed!')}
                />;
            case 'cart':
                return <CartPage cartItems={cartItems} onRemoveFromCart={removeFromCart} />;
            default:
                return <HomePage onNavigate={setCurrentPage} />;
        }
    };

    return (
        <div>
            <Header currentPage={currentPage} onNavigate={setCurrentPage} cartItemCount={cartItems.length} />
            {renderPage()}
        </div>
    );
}

export default App;