import React from 'react';
import styles from './CardComponent.module.scss';

interface CardProps {
  name: string;
  description: string;
  image: string;
}

const CardComponent: React.FC<CardProps> = ({ name, description, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default CardComponent;
