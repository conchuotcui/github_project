import React, { useEffect } from "react";
import "./Dealhot.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDealhot } from "../../../State/Admin/Action";
import { findAllBrand } from "../../../State/Product/Action";
const Dealhot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin } = useSelector((store) => store);
  const { products } = useSelector((store) => store);

  console.log("data", admin.dealhotItems);
  
  useEffect(() => {
    dispatch(getAllDealhot())
    dispatch(findAllBrand()) 
  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <main>
        <sectionc className="dealhot-trademark" >
          <div className="dealhot-title">
            <h1>Top các thương hiệu hàng đầu thế giới</h1>
            <div className="dealhot-carsoul">
            
            {products.brands &&
                products.brands.map((item) => (
                     <div className="brand-item-inner" >
                <img
                  className="brand-item-img ls-is-cached lazyloaded"
                  src={item.imageUrl}
                  data-src="https://static.fado.vn/uploads/icon/2019/11/28/Fado.VN_1574932009.4426.png"
                      alt=""
                      style={{width:"120px" , height:"120px"}}
                    />
              </div> 
                ))}
            </div>
            <div className="fade" />
          </div>
        </sectionc>
        <section className="list-card-dealhot-dealhot">
         
          {admin.dealhotItems &&
              admin.dealhotItems.map((item) => (
                
                  <div className="card-sales card-sales1" onClick= {()=>navigate(`/filterproduct/${item?.id}`)}>
            <div className="sales-img">
              <img
                src={item?.imageUrl}
                width="100%"
                height="100%"
                alt="Giảm Đến 46% - Tai Nghe Bluetooth"
                className="global-home-deal-card__image"
              />
            </div>
            <div className="sales-content">
              <div className="card-detail">
                <div className="sales-name-detail">
                  Giảm Đến {item?.discountPercent}% - {item?.title}
                </div>
                <div className="sales-depict">
                  <div className="sales-depict-text">Chỉ từ</div>
                  <div className="value values-price"> {item?.totalPrice ? `${Math.round(item?.totalPrice).toLocaleString()},000 đ` : '0 đ'}</div>
                  <div className="sales-depict-text depict-date">
                    còn 4 ngày
                  </div>
                </div>
              </div>
              <div className="sales-price">
                <div className="sales" style={{ color: "#98a5b9" }}>
                  Giảm
                </div>
                <div
                  className="values-sales"
                  style={{ fontSize: "30px", fontWeight: 700 }}
                >
              {item?.discountPercent}%
                </div>
              </div>
            </div>
          </div> 
              ))}
        </section>
        <section className="btn-tab-page">
          <Link to="/productworlk">
            <button>Trải nghiệm đẳng cấp mua sắm thế giới</button>
          </Link>
        </section>
      </main>

      {/* go top */}
      <div className="bar-icon-top">
        <a href="$">
          <i className="icofont-rocket-alt-1" />
        </a>
      </div>
    </div>
  );
};

export default Dealhot;
