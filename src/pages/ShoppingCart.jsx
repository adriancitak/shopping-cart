import { useOutletContext } from "react-router-dom";

const ShoppingCart = () => {

    const { cartItems, removeFromCart, removeAllFromCart } = useOutletContext();

    const totalPrice = cartItems.reduce((acc, item) => (item.price * item.quantity) + acc, 0);

    return (
        <>
            <h1>shopping cart page</h1>
            <ul style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem'}}>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <div style={{display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between', // key!
                                    backgroundColor: 'lightgrey',
                                    height: '100%',
                                    padding: '1rem',
                                    position: 'relative'}}>
                                <p>Quantity = {item.quantity}</p>
                                <img src={item.image} alt={`image of ${item.title}`} style={{height: '200px', objectFit: 'contain'}}/>
                                <p style={{fontSize: '1.5rem'}}>{item.title}</p>
                                <p className="price">${item.price}</p>
                                <div>
                                    <button onClick={() => removeFromCart(item.id)}>x</button>
                                    <button onClick={() => removeAllFromCart(item.id)}>Remove All</button>
                                </div>
                                
                            </div>
                        </li>
                    ))}
                </ul>
                <br></br>
                <div style={{textAlign: 'center'}}>
                    <h2>Your total is ${totalPrice.toFixed(2)}</h2>
                    <button>Checkout</button>
                </div>
           
        </>
    )
}

export default ShoppingCart;