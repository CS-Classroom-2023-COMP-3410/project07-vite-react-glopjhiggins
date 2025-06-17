import Button from './Button';

function ShoppingCart({ cartItems, onRemoveItem, onCheckout }) {
    const totalPrice = cartItems.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    return (
        <div style={{
            width: '300px',
            padding: '15px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            alignSelf: 'flex-start'
        }}>
            <h3>Shopping Cart</h3>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul style={{ padding: 0, listStyle: 'none' }}>
                        {cartItems.map(item => (
                            <li key={item.id} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '8px 0',
                                borderBottom: '1px solid #ddd'
                            }}>
                                <div>
                                    <strong>{item.title}</strong> × {item.quantity}
                                    <div>${item.price * item.quantity}</div>
                                </div>
                                <Button
                                    onClick={() => onRemoveItem(item.id)}
                                    variant="danger"
                                >
                                    −
                                </Button>
                            </li>
                        ))}
                    </ul>

                    <div style={{
                        marginTop: '15px',
                        padding: '10px 0',
                        borderTop: '2px solid #ddd',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <strong>Total:</strong>
                        <strong>${totalPrice}</strong>
                    </div>

                    <Button
                        onClick={onCheckout}
                        variant="success"
                        style={{ width: '100%', marginTop: '10px' }}
                    >
                        Checkout
                    </Button>
                </>
            )}
        </div>
    );
}

export default ShoppingCart;