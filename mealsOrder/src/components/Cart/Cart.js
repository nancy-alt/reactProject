import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHander = id => { 
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => { 
        cartCtx.addItem({...item,amount:1});
    };

    const cartItems =
        <ul className={classes['cart-items']}>{
            cartCtx.items.map((item) => <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHander.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)} />)
        }
        </ul>;
    return (
        <Modal hide={props.hide}>
            {cartItems}
            <div className={classes.total}>
                <span>total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.hide}>close</button>
                {hasItems && <button className={classes.button}>order</button>}
            </div>
        </Modal>
    );
};
export default Cart;