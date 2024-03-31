
import { FC } from 'react';
import ProductCard from '../productCard/productCard';
import styles from './productGrid.module.css';
import {ProductGridProps} from '../../interfaces/product';

const ProductsGrid:FC<ProductGridProps> = ({ products }) => {
  return (
    <div className={styles.main}>
    <div className={styles.productsContainer}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
}

export default ProductsGrid;
