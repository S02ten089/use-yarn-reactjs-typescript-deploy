import React, { useState } from 'react';
import { Product } from '../types';
import styles from '../styles/ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={styles.productCard}
      onClick={() => setShowDetails(!showDetails)}
    >
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h3>{product.name}</h3>
      {showDetails && (
        <div className={styles.productDetails}>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
