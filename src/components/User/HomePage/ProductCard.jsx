import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { addProductToFavourite } from "../../../State/Product/Action";
const ProductCart = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(products?.favouriteStatus === "true");
  const handleAddToFavourite = (productId , event) => {
    event.stopPropagation();
    dispatch(addProductToFavourite(productId));
  };
  useEffect(() => {
    setIsFavourite(products?.favouriteStatus === "true");
  }, [products?.favouriteStatus]);
  return (

       
      <div onClick= {()=>navigate(`/CardPay/${products?.id}`)} >
        <div className="card-product card-product-watch">
            <div className="card-product-img">
              <span className="card-product-discout">-{ products?.discountPersent}%</span>
              <Link to="/CardPay">
                <img
                  src={products?.imageUrl }
                
                  alt="Tissot T-ClassicTradition Chronograph Men's Watch T0636171103700"
                  className="product-card__img lazyloaded"
                />
              </Link>
            </div>
            <div className="card-product-title">
              <Link
                to="/CardPay"
                title="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                className="product-deal-action-card__title-inner"
              >
               {products?.title}
              </Link>
              <div className="sao-danh-gia">
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
                <i class="icofont-star"></i>
            <span>-</span><span className="country-of-manufacture">{ products?.soldAt}</span>
              </div>
              <p>Xem thêm nguồn từ hàng</p>
            </div>
            <div className="price-product-icon">
          <ul className="price-product">
          <li className="price-product-default">
                  <span>
                  {products?.price ? `${Math.round(products?.price).toLocaleString()},000 đ` : '0 đ'}

                  </span>
                </li>
            <li className="price-product-values">
            {products?.discountedPrice ? `${Math.round(products?.discountedPrice).toLocaleString()},000 đ` : '0 đ'}
              
                </li>
             
              </ul>
              <ul className="item-icon">
                <li className="add-cart" >
                  <i className="icofont-cart-alt" />
                </li>
                <li
              className={`add-like ${isFavourite ? 'active-effect' : ''}`}
              onClick={(event) => handleAddToFavourite(products?.id, event)}
            >
              <i className="icofont-heart-alt" />
            </li>
              </ul>
            </div>
      </div>
      </div>
      
      
    )
}
export default ProductCart