import React, { useContext } from 'react';
import '../pages/pagesCss/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/item/Item';

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcatnew">
        <p className='shopcat'><span>Showing 1-12</span> out of 36 products</p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products ? (
          all_products.map((item) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={item.id} // Assuming item.id is a unique identifier
                  id={item.id} // Pass the id prop to the Item component
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })
        ) : (
          <p>Loading...</p> // or any loading indicator
        )}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
      <hr/>
    </div>
  );
};

export default ShopCategory;
