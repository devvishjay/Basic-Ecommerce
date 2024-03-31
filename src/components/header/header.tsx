import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./header.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReorderIcon from '@mui/icons-material/Reorder';
import useScreenWidth from "../../hooks/screenWidth";
import CartView from "../cart/cart";
import { useCart } from "../../store/cartContext";
import MobileDrawer from "../mobileHeaderDrawer/mobileDrawer";


const HeaderSection = () => {
    const screenWidth = useScreenWidth();
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [open, setOpen] = useState(false);
    const [cartDrawer, setCartDrawer] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <div className={styles.headwrap}>
                <div className={styles.headItemswrap}>
                    <div className={styles.logoItemsHolder}>
                        <Link to="/">
                        <img alt="netflix-logo : Developed By Vishwa udugama" src="/images/logo.png" />
                        </Link>
                        {screenWidth > 625 &&
                            <div className={styles.listItemsWrap}>
                                <Link to="/" className={styles.listItemsActive}>Home</Link>
                                <Link to="/shop" className={styles.listItems}>Shop</Link>
                                <Link to="/about" className={styles.listItems}>About</Link>
                                <Link to="/contact" className={styles.listItems}>Contact</Link>
                            </div>
                        }
                    </div>
                    <div className={styles.iconwrapper}>
                        <ShoppingCartIcon sx={{ fontSize: 35, cursor:'pointer' }} onClick={()=> setCartDrawer(true)} />
                        <AccountCircleIcon sx={{ fontSize: 35 }} />
                        {screenWidth < 625 && <ReorderIcon sx={{ fontSize: 35 }} onClick={toggleDrawer(!open)} />}
                    </div>
                </div>
                <MobileDrawer open={open} toggleDrawer={()=>toggleDrawer(false)} />
                <CartView onClose={()=>  setCartDrawer(false)} open={cartDrawer} products={cartItems} onClearCart={clearCart} onClearItem={removeFromCart} />
            </div>

       
        </>
    );
}

export default HeaderSection;
