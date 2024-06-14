import React, { useEffect, useState } from "react";
import "./AdminDealhot.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {
  addProductToDealhot,
  createProduct,
  findAllBrand,
  findAllProducts,
  findProductsByBrandId,
  findProductsByBrands,
  removeProductToDealhot,
} from "../../../State/Product/Action";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../State/Cart/Action";

const AddDealhot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((store) => store); 
  const params = useParams(); 
  const [checkedItems, setCheckedItems] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  useEffect(() => {
    const data = { brandId: params.brandId };
    if (isFirstLoad) {
      console.log("data", data);
      dispatch(findProductsByBrandId(data));
      setIsFirstLoad(false); 
    }
    if (products.products && products.products.length > 0) {
      const newCheckedItems = {};
      products.products.forEach(product => {
        newCheckedItems[product.id] = product.dealhot ? true : false;
      });
      setCheckedItems(newCheckedItems);
    }
  }, [dispatch, isFirstLoad, products.products, params.brandId]);

  const handleChange = (productId, dealhotId) => {
    const isCheckedExist = checkedItems[productId];

    if (isCheckedExist) {
      dispatch(removeProductToDealhot(productId, dealhotId));
    } else {
      dispatch(addProductToDealhot(productId, dealhotId));
    }
    setCheckedItems(prev => ({
      ...prev,
      [productId]: !isCheckedExist
    }));
  };

  return (
    <div className="Addproduct-main">
      <div className="container back-home">
       
        <button onClick={() => navigate('/Admin/AdminDealhot')}>
      <i className="icofont-rounded-double-left"></i>
    </button>
       
      </div>
      <div
        className="Admin-table-Product"
        style={{ width: "2000px !important" }}
      >
        <div class="container mt-3">
          <h2>Order Items Information</h2>
          <p>List of currently available order items :</p>
          <table class="table-addproduct ">
            <thead>
              <tr>
                <th style={{width:"5%"}}>ID</th>
                <th>Image</th>
                <th style={{width:"15%"}}>Product's name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
                <th>Discounted Percent</th>
                <th>Total Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
          <br />
          <table className="table-showadd">
            <tbody>
              {Array.isArray(products?.products) &&
                products?.products?.map((item) => (
                  <tr>
                    <td style={{width:"5%"}}>{item?.id}</td>

                    <td>
                      <img
                        src={item?.imageUrl}
                        alt=""
                        style={{ width: "80%", height: "80%" }}
                      />
                    </td>
                    <td style={{width:"15%"}}>{item?.title}</td>
                    <td >{item?.brand?.name}</td>
                    <td>{item?.category.name}</td>
                    <td>
                      {item?.price
                        ? `${Math.round(item?.price).toLocaleString()},000 đ`
                        : "0 đ"}
                    </td>
                    <td> {item?.discountPersent}</td>
                    <td>
                      {item?.discountedPrice
                        ? `${Math.round(
                            item?.discountedPrice
                          ).toLocaleString()},000 đ`
                        : "0 đ"}
                    </td>
                    <td>{item?.quantity}</td>
                    <td>
                      <label className="container">
                        <input
                          type="checkbox"
                          className="checkboxchirl"
                          checked={checkedItems[item?.id] || false}
                          onChange={() => handleChange(item?.id, params.dealhotId)}
                        />

                        <svg viewBox="0 0 64 64" height="21px" width="21px">
                          <path
                            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                            pathLength="575.0541381835938"
                            className="path"
                          ></path>
                        </svg>
                      </label>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddDealhot;
