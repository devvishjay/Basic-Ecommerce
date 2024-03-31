import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Clear, ShoppingCart } from '@mui/icons-material';
import { CartProps } from '../../interfaces/cart';
import styles from "./cart.module.css";
import { Divider } from '@mui/material';

const CartView: React.FC<CartProps> = ({ open, onClose, products, onClearCart, onClearItem }) => {

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        width: { sm: 300, md: 400 },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: { sm: 300, md: 400 },
        },
      }}
    >
      <div className={styles.cartContent}>
        {products.length === 0 ? (
          <div className={styles.emptyCart}>Cart is empty.</div>
        ) : (
          <>
            <List>
              {products.map((product) => (
                <ListItem key={product.id}>
                  <ListItemAvatar>
                    <Avatar alt={product.title} src={product.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.title}
                    secondary={`Quantity: ${product.quantity} | Price: $${product.price}`}
                  />
                  <Button size="small" onClick={() => onClearItem(product.id)}>
                    <Clear /> Clear
                  </Button>
                </ListItem>
              ))}
            </List>
            <div className={styles.cartActions}>
              <div className={styles.price}>Total Price: ${products.reduce((acc, product) => acc + product.quantity * product.price, 0)}</div>
              <Divider style={{ margin: '20px 0' }} />
              < div className={styles.buttonWrapper}>
                <Button variant="contained" color="error" startIcon={<Clear />} onClick={onClearCart}>
                  Clear Cart
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ShoppingCart />}
                  style={{ marginLeft: '16px' }}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}

      </div>
    </Drawer>
  );
};

export default CartView;
