import { Container, Grid, Typography, Button, Divider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import { FC } from 'react';
import { ProductDetailsProps } from '../../interfaces/product';
import { useCart } from '../../store/cartContext';

const ProductDetailsView: FC<ProductDetailsProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div style={{ height: '500px', overflow: 'hidden' }}>
            <Carousel
              animation="slide"
              duration={1000}
              navButtonsProps={{
                style: {
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  color: '#fff',
                },
              }}
            >
              {product.images.map((image, index) => (
                <Paper key={index}>
                  <img src={image} alt={`Image ${index}`} style={{ width: '100%', height: '500px', objectFit: 'contain' }} /> 
                </Paper>
              ))}
            </Carousel>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            $ {product.price}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            In Stock: {product.stock}
          </Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
            style={{ marginRight: '10px', marginBottom: '10px' }}
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                quantity: 1,
                price: product.price,
                image: product.thumbnail
              })
            }
          >
            Add to Cart
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FavoriteIcon />}
            style={{ marginRight: '10px', marginBottom: '10px' }}
          >
            Add to Wishlist
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetailsView;
