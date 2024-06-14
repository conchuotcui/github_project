import React, { useEffect, useState } from "react";
import "./AdminDealhot.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createDealhot, getAllDealhot } from "../../../State/Admin/Action";
import DealhotDetail from "./DealhotDetail";
import { findAllBrand } from "../../../State/Product/Action";

const AdminDealhot = () => {
  const dispatch = useDispatch();
  const { admin } = useSelector((store) => store);
  const { products } = useSelector((store) => store);

  const initialDealhotData = {
    imageUrl: "",
    title: "",
    discountPercent: "",
    price: "",
    brand: "",

  };

  const [DealhotData, setDealhotData] = useState(initialDealhotData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDealhotData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (DealhotData.price && DealhotData.discountPercent) {
      const price = parseFloat(DealhotData.price.replace(/,/g, ""));
      const discountPercent = parseFloat(DealhotData.discountPercent);
      if (!isNaN(price) && !isNaN(discountPercent)) {
        const discountedPrice = price - (price * discountPercent) / 100;
        setDealhotData((prevData) => ({
          ...prevData,
          totalPrice: formatInputValue(discountedPrice.toFixed(0)),
        }));
      }
    } else {
      setDealhotData((prevData) => ({
        ...prevData,
        totalPrice: "",
      }));
    }
    dispatch(getAllDealhot());
    dispatch(findAllBrand());
  }, [DealhotData.price, DealhotData.discountPercent]);

  const formatInputValue = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDealhot(DealhotData));
    setDealhotData(initialDealhotData);
  };
  return (
    <div>
      <div className="Dealhot-main">
        <div className="Dealhot-logo-title">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/cotton/64/sale-time--v2.png"
            alt="sale-time--v2"
          />

          <h2>Dealhot</h2>
        </div>
        <hr />
        <div className="form-Dealhot">
          <button
            type="button"
            class="btn btn-primary btn-Dealhot"
            data-bs-toggle="collapse"
            data-bs-target="#Dealhot"
          >
            Add Dealhot
          </button>
          <div id="Dealhot" class="collapse">
            <div class="container container-Dealhot">
              <form action="" className="From-Dealhot" onSubmit={handleSubmit}>
                <label for="fname">Image</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Your name.."
                  value={DealhotData.imageUrl || ""}
                  onChange={handleInputChange}
                />
                <label for="fname">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Your name.."
                  value={DealhotData.title || ""}
                  onChange={handleInputChange}
                />
               <label for="fname" style={{ marginTop: "14px", marginBottom: "5px" }}>Brand</label>
              <select
                id="brand"
                name="brand"
                value={
                  DealhotData.brand ||
                  (products.brands.find((brand) => brand.id === 0) &&
                    products.brands.find((brand) => brand.id === 0).name) ||
                  ""
                }
                onChange={handleInputChange}
              >
                <option value="null">Select a Brand</option>

                {products.brands.map((brand) => (
                  <option key={brand.id} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
                <label for="fname">Price</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="Your name.."
                  value={DealhotData.price || ""}
                  onChange={handleInputChange}
                />{" "}
                <label for="fname">Discount (%)</label>
                <input
                  type="text"
                  id="discountPercent"
                  name="discountPercent"
                  placeholder="Your name.."
                  value={DealhotData.discountPercent || ""}
                  onChange={handleInputChange}
                />{" "}
                <label for="fname">Total price</label>
                <input
                  type="text"
                  id="totalPrice"
                  name="totalPrice"
                  value={
                    DealhotData.totalPrice
                      ? `${DealhotData.totalPrice.toLocaleString()}.000 đ`
                      : "0 đ"
                  }
                  readOnly
                  disabled="true"
                  style={{ backgroundColor: "#d7d7d7", color: "black" }}
                />
                <input type="submit" value="Add" />
              </form>
            </div>
          </div>
        </div>
        <div className="Admin-table-Product">
          <div class="container mt-3">
            <h2>Dealhot Information</h2>
            <p>List of dealhots currently available :</p>
            <table class="table-Dealhot ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Discount (%)</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>
            <br />
            <table className="table-showadd">
              <tbody>
                {Array.isArray(admin.dealhotItems) &&
                  admin.dealhotItems.map((dealhotItems) => (
                    <DealhotDetail
                      key={dealhotItems.id}
                      dealhotItems={dealhotItems}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDealhot;
