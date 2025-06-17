import ShoppingCart from '../components/ShoppingCart';

function CartPage({ cartItems, onRemoveFromCart, onCheckout }) {
    return (
        <div>
            <h1>Cart Page</h1>
            <p>Review your items and proceed to checkout.</p>
            <ShoppingCart
                cartItems={cartItems}
                onRemoveItem={onRemoveFromCart}
                onCheckout={onCheckout}
            />
        </div>
    );
}

export default CartPage;