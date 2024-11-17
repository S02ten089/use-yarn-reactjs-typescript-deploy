import React, { useState } from 'react';
import Header from './project/Header';
import FilterSearch from './project/FilterSearch';
import ProductList from './project/ProductList';
import Footer from './project/Footer';
import { Product } from './types';
import styles from './styles/Sample.module.scss';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Dữ liệu sản phẩm mẫu
  const products: Product[] = [
    {
      id: 1,
      name: 'Project 1',
      description: 'Dự án đầu tiên của tôi.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Dự án thứ hai của tôi.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'Dự án thứ ba của tôi.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'Dự án thứ tư của tôi.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  // Lọc sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <FilterSearch setSearchTerm={setSearchTerm} />
        <ProductList products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
