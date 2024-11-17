import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.scss';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className={styles.productList}>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
