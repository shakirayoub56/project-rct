import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../item/Item'

const NewCollection = () => {
  return (
<div className="collections">
  {new_collections.map((item) => (
    <Item
      key={item.id}
      id={item.id} // Make sure to pass the `id` prop to the `Item` component
      name={item.name}
      image={item.image}
      new_price={item.new_price}
      old_price={item.old_price}
    />
  ))}
</div>
  )
}

export default NewCollection
