import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/Productdisplay/ProductDisplay';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  // Ensure all_products is available and an array
  if (!Array.isArray(all_products) || all_products.length === 0) {
    return <p>No products available</p>; // Or handle the case when there are no products
  }

  const product = all_products.find((e) => e.id === Number(productId));

  if (!product) {
    return <p>Product not found</p>; // Or handle the case when the product isn't found
  }

  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
