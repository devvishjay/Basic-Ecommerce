import { FC } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ProductCardProps } from '../../interfaces/product';
import styles from "./productCard.module.css";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../store/cartContext';

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const maxDescriptionLength = 40;
  const maxTitleLength = 30;
  const description = product.description?.length > maxDescriptionLength ? `${product.description.substring(0, maxDescriptionLength)}...` : product.description;
  const title = product.title?.length > maxTitleLength ? `${product.title.substring(0, maxTitleLength)}...` : product.title;

  return (
    <div className={styles.productCard} >
      <Card sx={{ maxWidth: '100%', height: '100%' }}>
        <div onClick={() => navigate(`/products/${product.id}`)}>
          <CardMedia
            component="img"
            alt="green iguana"
            image={product.thumbnail}
            title={product.title}
            sx={{ height: 250 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography variant="body1" component="p">
              Price: ${product.price}
            </Typography>
            <Typography variant="body2" component="p">
              In Stock: {product.stock}
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <Button variant="contained" color="primary" startIcon={<AddShoppingCartIcon />} sx={{ marginBottom: 2 }}
            onClick={() => addToCart(
              {
                id: product.id,
                title: product.title,
                quantity: 1,
                price: product.price,
                image: product.thumbnail
              }

            )}

          >
            Add to Cart
          </Button>
          <Button variant="contained" color="secondary" startIcon={<FavoriteIcon />} sx={{ marginBottom: 2 }}>
            WhishList
          </Button>
        </CardActions>
      </Card>

    </div>
  );
}

export default ProductCard;
