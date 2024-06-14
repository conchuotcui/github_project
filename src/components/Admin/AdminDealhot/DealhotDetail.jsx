import React from "react";
import { ToastContainer } from "react-toastify";
import { deleteDealhot } from "../../../State/Admin/Action";
import { findProductsByBrands } from "../../../State/Product/Action";
import {  NavLink, useNavigate } from 'react-router-dom';

import { useDispatch } from "react-redux";

const DealhotDetail = ({ dealhotItems }) => {
  const navigate = useNavigate();
    const dispatch = useDispatch();

  
  const handleDelete = (dealhotId) => {
    dispatch(deleteDealhot(dealhotId));
  };
  console.log("id" , dealhotItems?.brand?.id);
  
  const handleButtonClick = () => {
    navigate(`/AddDealhot/${dealhotItems?.id}/${dealhotItems?.brand?.id}`);
  };
    return (
        <tr>
            <td>{ dealhotItems?.id}</td>
            <td className="col-Image-Dealhot">
                <img
                    src={ dealhotItems?.imageUrl}
                    alt=""
                />
            </td>
           
            <td>{dealhotItems?.title}</td>
            <td>{ dealhotItems?.brand?.name}</td>

            <td>{dealhotItems?.price ? `${dealhotItems?.price.toLocaleString()},000 đ` : '0 đ'}</td>  
            <td>{ dealhotItems?.discountPercent} %</td>
            <td>{dealhotItems?.totalPrice ? `${dealhotItems?.totalPrice.toFixed(0).toLocaleString()},000 đ` : '0 đ'}</td>
            
            <td>
                <button class=" btn-outline-edit"   onClick={handleButtonClick}>
                    <NavLink to="/AddDealhot">
                        Add
                        </NavLink>
                </button>
               
                <button
                 
                    class=" btn-outline-delete" onClick={() => handleDelete(dealhotItems?.id)}
                >
                    <ToastContainer />
                    Delete
                </button>
            </td>
        </tr>
    )
}
export default DealhotDetail