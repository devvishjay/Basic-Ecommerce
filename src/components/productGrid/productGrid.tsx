
import { FC, lazy, Suspense } from 'react';
const ProductCard = lazy(() => import('../productCard/productCard'));
import styles from './productGrid.module.css';
import { ProductGridProps } from '../../interfaces/product';

const ProductsGrid: FC<ProductGridProps> = ({ products }) => {
  return (
    <div className={styles.main}>
      <div className={styles.productsContainer}>
        <Suspense fallback={<div>Loading...</div>}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

export default ProductsGrid;
