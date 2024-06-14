import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {
  createProduct,
  findAllBrand,
  findAllProducts,
} from "../../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import DetailProduct from "./DetailProduct";

const AddProduct = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store);

  const initialProductData = {
    imageUrl: "",
    title: "",
    soldAt: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    brand: "",
    colors: [{ name: "", sizes: [{ name: "", quantity: "" }] }],
    price: "",
    discountPersent: "",
    screen: "",
    operatingSystem: "",
    chip: "",
    ram: "",
    storageCapacity: "",
    connector: "",
    frontCamera: "",
    rearCamera: "",
    rechargeableBatteries: "",
    theFirm: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialProductData);
  useEffect(() => {
    if (formData.price && formData.discountPersent) {
      const price = parseFloat(formData.price.replace(/,/g, ""));
      const discountPersent = parseFloat(formData.discountPersent);
      if (!isNaN(price) && !isNaN(discountPersent)) {
        const discountedPrice = price - (price * discountPersent) / 100;
        setFormData((prevData) => ({
          ...prevData,
          totalPrice: formatInputValue(discountedPrice.toFixed(0)),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        totalPrice: "",
      }));
    }
    dispatch(findAllProducts());
    dispatch(findAllBrand());
  }, [formData.price, formData.discountPersent]);

  const formatInputValue = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleColorChange = (index, event) => {
    const newColors = [...formData.colors];
    if (newColors[index]) {
      newColors[index].name = event.target.value;
      setFormData({ ...formData, colors: newColors });
    }
  };

  const handleSizeChange = (colorIndex, sizeIndex, field, event) => {
    const newColors = [...formData.colors];
    if (newColors[colorIndex]?.sizes[sizeIndex]) {
      newColors[colorIndex].sizes[sizeIndex][field] = event.target.value;
      setFormData({ ...formData, colors: newColors });
    }
  };

  const handleAddColor = () => {
    setFormData({
      ...formData,
      colors: [
        ...formData.colors,
        { name: "", sizes: [{ name: "", quantity: "" }] },
      ],
    });
  };

  const handleAddSize = (colorIndex) => {
    const newColors = [...formData.colors];
    if (newColors[colorIndex]) {
      newColors[colorIndex].sizes.push({ name: "", quantity: "" });
      setFormData({ ...formData, colors: newColors });
    }
  };

  const handleRemoveColor = (index) => {
    const newColors = [...formData.colors];
    if (newColors[index]) {
      newColors.splice(index, 1);
      setFormData({ ...formData, colors: newColors });
    }
  };

  const handleRemoveSize = (colorIndex, sizeIndex) => {
    const newColors = [...formData.colors];
    if (newColors[colorIndex]?.sizes[sizeIndex]) {
      newColors[colorIndex].sizes.splice(sizeIndex, 1);
      setFormData({ ...formData, colors: newColors });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProduct(formData));
    setFormData(initialProductData);
  };

  const categories = {
    "do-dien-tu-va-cong-nghe": {
      subcategories: [
        { value: "may-tinh-phu-kien", label: "Máy Tính và Phụ Kiện" },
        { value: "dien-thoai-va-phu-kien", label: "Điện Thoại và Phụ Kiện" },
      ],
      subSubcategories: {
        "may-tinh-phu-kien": [
          { value: "MayTinh-MayTinhBang", label: "Máy tính - Máy tính bảng" },
          { value: "man-hinh", label: "Màn hình" },
          { value: "webcams", label: "Webcams" },
          { value: "phu-kien-va-linh-kien", label: "Phụ kiện , Linh kiện" },
          { value: "thiet-bi-mang", label: "Thiết bị mạng" },
        ],
        "dien-thoai-va-phu-kien": [
          { value: "dien-thoai", label: "Điện thoại" },
          { value: "phu-kien-dien-thoai", label: "Phụ kiện điện thoại" },
          {
            value: "op-lung-va-cuong-luc-dien-thoai",
            label: "Phụ kiện điện thoại",
          },
          { value: "tai-nghe-dien-thoai", label: "Tai nghe điện thoại" },
          { value: "dien-thoai-unlock", label: "Điện thoại unclock" },
        ],
      },
    },
    "do-ho-hang-hieu": {
      subcategories: [
        { value: "dong-ho-nam", label: "Đồng hồ Nam" },
        { value: "dong-ho-nu", label: "Đồng hồ Nữ" },
      ],
      subSubcategories: {
        "dong-ho-nam": [
          { value: "dong-ho-thoi-trang", label: "Đồng hồ thời trang" },
          { value: "dong-ho-the-thao", label: "Đồng hồ thể thao" },
          { value: "dong-ho-doanh-nhan", label: "Đồng hồ doanh nhân" },
          { value: "dong-ho-bo-tui", label: "Đồng hồ bỏ túi" },
          { value: "dong-ho-thong-minh", label: "Đồng hồ thông minh" },
        ],
        "dong-ho-nu": [
          { value: "dong-ho-thoi-trang", label: "Đồng hồ thời trang" },
          { value: "dong-ho-doanh-nhan", label: "Đồng hồ doanh nhân" },
          { value: "dong-ho-bo-tui", label: "Đồng hồ bỏ túi" },
          { value: "dong-ho-thông minh", label: "Đồng hồ thông minh" },
        ],
      },
    },
  };

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === "topLavelCategory" && {
        secondLavelCategory: "",
        thirdLavelCategory: "",
      }),
      ...(name === "secondLavelCategory" && { thirdLavelCategory: "" }),
    });
  };
  return (
    <div className="Addproduct-main">
      <div style={{ display: "flex", alignItems: "center", gap: "20" }}>
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/nolan/96/sell.png"
          alt="sell"
        />

        <h2>Sản Phẩm</h2>
      </div>
      <hr />
      <div className="form-AddProduct">
        <button
          type="button"
          class="btn btn-primary btn-Addproduct"
          data-bs-toggle="collapse"
          data-bs-target="#Addproduct"
        >
          Tạo Sản Phẩm
        </button>
        <div id="Addproduct" class="collapse">
          <div class="container " id="container-Addproduct">
            <form action="" className="From-addproduct" onSubmit={handleSubmit}>
              <label for="fname">Hình ảnh</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                placeholder="Enter your image..."
                value={formData.imageUrl || ""}
                onChange={handleInputChange}
              />
              <label for="fname">Tiêu đề</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter your title..."
                value={formData.title || ""}
                onChange={handleInputChange}
              />
              <label for="fname">Xuất xứ</label>
              <select
                id="soldAt"
                name="soldAt"
                value={formData.soldAt}
                onChange={handleInputChange}
              >
                <option value="null">Chọn quốc gia xuất xứ</option>
                <option value="Việt Nam">Việt Nam</option>
                <option value="Mỹ">Mỹ</option>
                <option value="Nhật">Nhật</option>
                <option value="Đức">Đức</option>
                <option value="Anh">Anh</option>
              </select>

              {/* Category Begin */}
              <label
                htmlFor="topLavelCategory"
                style={{ marginTop: "14px", marginBottom: "5px" }}
              >
                Danh mục thứ nhất
              </label>
              <select
                id="topLavelCategory"
                name="topLavelCategory"
                value={formData.topLavelCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Chọn danh mục thứ nhất</option>
                <option value="do-dien-tu-va-cong-nghe">
                  Đồ điện tử và công nghệ
                </option>
                <option value="do-ho-hang-hieu">Đồ hồ hàng hiệu</option>
              </select>

              <label
                htmlFor="secondLavelCategory"
                style={{ marginTop: "14px", marginBottom: "5px" }}
              >
                Danh mục thứ hai
              </label>
              <select
                id="secondLavelCategory"
                name="secondLavelCategory"
                value={formData.secondLavelCategory}
                onChange={handleCategoryChange}
                disabled={!formData.topLavelCategory}
              >
                <option value="">Chọn danh mục thứ hai</option>
                {formData.topLavelCategory &&
                  categories[formData.topLavelCategory].subcategories.map(
                    (subcategory) => (
                      <option key={subcategory.value} value={subcategory.value}>
                        {subcategory.label}
                      </option>
                    )
                  )}
              </select>

              <label
                htmlFor="thirdLavelCategory"
                style={{ marginTop: "14px", marginBottom: "5px" }}
              >
                Danh mục thứ ba 
              </label>
              <select
                id="thirdLavelCategory"
                name="thirdLavelCategory"
                value={formData.thirdLavelCategory}
                onChange={handleCategoryChange}
                disabled={!formData.secondLavelCategory}
              >
                <option value="">Chọn danh mục thứ ba</option>
                {formData.secondLavelCategory &&
                  categories[formData.topLavelCategory].subSubcategories[
                    formData.secondLavelCategory
                  ].map((subSubcategory) => (
                    <option
                      key={subSubcategory.value}
                      value={subSubcategory.value}
                    >
                      {subSubcategory.label}
                    </option>
                  ))}
              </select>
              {/* Category End */}
              <label
                for="fname"
                style={{ marginTop: "14px", marginBottom: "5px" }}
              >
                Thương hiệu
              </label>
              <select
                id="brand"
                name="brand"
                value={
                  formData.brand ||
                  (products.brands.find((brand) => brand.id === 1) &&
                    products.brands.find((brand) => brand.id === 1).name) ||
                  ""
                }
                onChange={handleInputChange}
              >
                <option value="null">Chọn thương hiệu</option>

                {products.brands.map((brand) => (
                  <option key={brand.id} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
              <label for="fname" style={{marginTop:"10px"}}>Màn hình</label>
              <input
                type="text"
                id="screen"
                name="screen"
                placeholder="Enter your title..."
                value={formData.screen || ""}
                onChange={handleInputChange}
              />

              <label for="fname">Hệ điều hành</label>
              <input
                type="text"
                id="operatingSystem"
                name="operatingSystem"
                placeholder="Enter your title..."
                value={formData.operatingSystem || ""}
                onChange={handleInputChange}
              />
               <label for="fname">Chip</label>
              <input
                type="text"
                id="chip"
                name="chip"
                placeholder="Enter your title..."
                value={formData.chip || ""}
                onChange={handleInputChange}
              />
               <label for="fname">Ram</label>
              <input
                type="text"
                id="ram"
                name="ram"
                placeholder="Enter your title..."
                value={formData.ram || ""}
                onChange={handleInputChange}
              />
              <label for="fname">Dung lượng lưu trữ</label>
              <input
                type="text"
                id="storageCapacity"
                name="storageCapacity"
                placeholder="Enter your title..."
                value={formData.storageCapacity || ""}
                onChange={handleInputChange}
              />
              <label for="fname">Cổng kết nối</label>
              <input
                type="text"
                id="connector"
                name="connector"
                placeholder="Enter your title..."
                value={formData.connector || ""}
                onChange={handleInputChange}
              />
              <label for="fname">Camera trước</label>
              <input
                type="text"
                id="frontCamera"
                name="frontCamera"
                placeholder="Enter your title..."
                value={formData.frontCamera || ""}
                onChange={handleInputChange}
              />
              <label for="fname">Camera sau</label>
              <input
                type="text"
                id="rearCamera"
                name="rearCamera"
                placeholder="Enter your title..."
                value={formData.rearCamera || ""}
                onChange={handleInputChange}
              />
              <label for="fname">Pin và Cáp sạc</label>
              <input
                type="text"
                id="rechargeableBatteries"
                name="rechargeableBatteries"
                placeholder="Enter your title..."
                value={formData.rechargeableBatteries || ""}
                onChange={handleInputChange}
              />
              <label for="fname">Hãng</label>
              <input
                type="text"
                id="theFirm"
                name="theFirm"
                placeholder="Enter your title..."
                value={formData.theFirm || ""}
                onChange={handleInputChange}
              />
              <div className="button-group">
                {formData.colors.map((color, colorIndex) => (
                  <div key={colorIndex} className="List-item-color">
                    <label htmlFor={`color-${colorIndex}`}>Màu</label>

                    <input
                      type="text"
                      id={`color-${colorIndex}`}
                      value={color.name}
                      onChange={(event) => handleColorChange(colorIndex, event)}
                    />
                    {color.sizes.map((size, sizeIndex) => (
                      <div key={sizeIndex}>
                        <label htmlFor={`size-${colorIndex}-${sizeIndex}`}>
                          Size
                        </label>
                        <input
                          type="text"
                          id={`size-${colorIndex}-${sizeIndex}`}
                          value={size.name}
                          onChange={(event) =>
                            handleSizeChange(
                              colorIndex,
                              sizeIndex,
                              "name",
                              event
                            )
                          }
                        />
                        <label htmlFor={`quantity-${colorIndex}-${sizeIndex}`} style={{marginRight:"9px"}}>
                          Số lượng
                        </label>
                        <input
                          type="number"
                          id={`quantity-${colorIndex}-${sizeIndex}`}
                          value={size.quantity}
                          className="input-quantity"
                          onChange={(event) =>
                            handleSizeChange(
                              colorIndex,
                              sizeIndex,
                              "quantity",
                              event
                            )
                          }
                        />
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveSize(colorIndex, sizeIndex)
                          }
                          className="btn-remove-size"
                        >
                          Bỏ Size
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleAddSize(colorIndex)}
                      className="btn-remove-color"
                    >
                      Thêm Size
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveColor(colorIndex)}
                      className="btn-remove-color"
                    >
                      Bỏ màu
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn-add-color"
                  onClick={handleAddColor}
                >
                  Thêm màu
                </button>
              </div>
              <div className="list-value-price">
                <label for="fname">Giá</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="Product price.."
                  value={formData.price}
                  onChange={handleInputChange}
                />
                <label for="fname">Giảm giá(%)</label >
                <input
                  type="text"
                  id="discountPersent"
                  name="discountPersent"
                  placeholder="Discount percentage.."
                  value={formData.discountPersent}
                  onChange={handleInputChange}
                />
                <label for="fname">Tổng tiền</label>
                <input
                  type="text"
                  id="totalPrice"
                  name="totalPrice"
                  // value={formData.totalPrice}
                  value={
                    formData.totalPrice
                      ? `${formData.totalPrice.toLocaleString()}.000 đ`
                      : "0 đ"
                  }
                  readOnly
                  disabled="true"
                  style={{
                    backgroundColor: "#d7d7d7",
                    color: "black",
                  }}
                />
              </div>
              <label for="fname">Miêu tả sản phẩm</label>
              <textarea
                id="description"
                name="description"
                placeholder="Viết cái gì đó.."
                value={formData.description || ""}
                onChange={handleInputChange}
                style={{ height: "100px" }}
              ></textarea>
              {/* vừa thêm vào */}
              <button
                className="btn-xac-nhan-them"
                // onClick={toastaddpro}
              >
                Tạo
              </button>
              {/* <ToastContainer /> */}
            </form>
          </div>
        </div>
      </div>
      <div
        className="Admin-table-Product"
        style={{ width: "2000px !important" }}
      >
        <div class="container mt-3">
          <h2>Product Information</h2>
          <p>List of currently available products :</p>
          <table class="table-addproduct ">
            <thead>
              <tr>
                <th style={{ width: "20px" }}>ID</th>
                <th style={{ width: "10%" }}>Image</th>
                <th style={{ width: "21%" }}>Title</th>
                <th style={{ paddingLeft: "20px" }}>Made in</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
                <th>Discount (%)</th>
                <th>Total Price</th>
                <th>Stock</th>
                <th style={{ width: "6%" }}>Action</th>
              </tr>
            </thead>
          </table>
          <br />
          <table className="table-showadd">
            <tbody>
              {products.products &&
                products.products?.map((products) => (
                  <DetailProduct key={products.id} products={products} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
