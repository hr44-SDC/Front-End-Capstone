import React from 'react';
import Rating from 'react-rating';
import Image from './Image';
import ProductInfo from './ProductInfo';
import Price from './Price';

const YourOutfitEntry = (props) => {
  const { item, handleRemove } = props;
  const {
    photos,
    category,
    name,
    styleName,
    salePrice,
    origPrice,
    rating,
  } = item;

  let ratingComp;
  if (rating === 0) {
    ratingComp = (
      <div />
    );
  } else {
    ratingComp = (
      <Rating
        initialRating={rating}
        readonly
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
      />
    );
  }

  return (
    <div className="product-card">
      <Image photos={photos} />
      <ProductInfo
        category={category}
        mainName={name}
        styleName={styleName}
      />
      <Price
        sale={salePrice}
        original={origPrice}
      />
      {ratingComp}
      <button className="remove-button" type="button" onClick={() => handleRemove(item.id)}>Remove Item</button>
    </div>
  );
};

export default YourOutfitEntry;