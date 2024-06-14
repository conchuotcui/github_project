import React, { useEffect, useRef, useState } from "react";
import "./NavOption.css";
import "./Cardsales.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  findAllBrand,
  findProductsByCategory,
  findProductsByCategory1,
  findProductsByCategory2,
  findProductsByCategory3,
  findProductsByCategory4,
  findProductsByCategory5,
  findProductsByCategory6,
  findProductsByCategory7,
  findProductsByCategory8,
  findProductsByCategory9,
  findProductsByCategory10,
} from "../../../State/Product/Action";
import { FaArrowUp } from "react-icons/fa";
import ProductCard from "./ProductCard";

const HomePage = () => {
  const {
    products,
    productsHomePage1,
    products3HomeReducer,
    products4HomeReducer,
    products5HomeReducer,
    products6HomeReducer,
    products7HomeReducer,
    products8HomeReducer,
    products9HomeReducer,
    products10HomeReducer,
    products11HomeReducer,
  } = useSelector((store) => store);
  const [isVisible, setIsVisible] = useState(false);
  const marqueeRef = useRef(null);
  const dispatch = useDispatch();
  const [activeCategory1, setActiveCategory1] = useState("dong-ho-nam");
  const [activeCategory2, setActiveCategory2] = useState("tui-xach-nam");
  const [activeCategory3, setActiveCategory3] = useState("sneaker-nu");
  const [activeCategory4, setActiveCategory4] = useState("tai-nghe");
  const [activeCategory5, setActiveCategory5] = useState("may-anh-ky-thuat-so");
  const [activeCategory6, setActiveCategory6] = useState("mat-kinh-nam");
  const [activeCategory7, setActiveCategory7] = useState("vay-dam");
  const [activeCategory8, setActiveCategory8] = useState("ao-thun");
  const [activeCategory9, setActiveCategory9] = useState("trang-suc");
  const [activeCategory10, setActiveCategory10] = useState("den");

  useEffect(() => {
    const data1 = { category: activeCategory1 };
    const data2 = { category: activeCategory2 };
    const data3 = { category: activeCategory3 };
    const data4 = { category: activeCategory4 };
    const data5 = { category: activeCategory5 };
    const data6 = { category: activeCategory6 };
    const data7 = { category: activeCategory7 };
    const data8 = { category: activeCategory8 };
    const data9 = { category: activeCategory9 };
    const data10 = { category: activeCategory10 };

    dispatch(findProductsByCategory1(data1));
    dispatch(findProductsByCategory2(data2));
    dispatch(findProductsByCategory3(data3));
    dispatch(findProductsByCategory4(data4));
    dispatch(findProductsByCategory5(data5));
    dispatch(findProductsByCategory6(data6));
    dispatch(findProductsByCategory7(data7));
    dispatch(findProductsByCategory8(data8));
    dispatch(findProductsByCategory9(data9));
    dispatch(findProductsByCategory10(data10));

    dispatch(findAllBrand());
  }, [
    dispatch,
    activeCategory1,
    activeCategory2,
    activeCategory3,
    activeCategory4,
    activeCategory5,
    activeCategory6,
    activeCategory7,
    activeCategory8,
    activeCategory9,
    activeCategory10,
  ]);

  const handleCategoryClick1 = (category) => {
    setActiveCategory1(category);
    const data = { category };
    dispatch(findProductsByCategory1(data));
  };
  const handleCategoryClick2 = (category) => {
    setActiveCategory2(category);
    const data = { category };
    dispatch(findProductsByCategory2(data));
  };
  const handleCategoryClick3 = (category) => {
    setActiveCategory3(category);
    const data = { category };
    dispatch(findProductsByCategory3(data));
  };
  const handleCategoryClick4 = (category) => {
    setActiveCategory4(category);
    const data = { category };
    dispatch(findProductsByCategory4(data));
  };
  const handleCategoryClick5 = (category) => {
    setActiveCategory5(category);
    const data = { category };
    dispatch(findProductsByCategory5(data));
  };
  const handleCategoryClick6 = (category) => {
    setActiveCategory6(category);
    const data = { category };
    dispatch(findProductsByCategory6(data));
  };
  const handleCategoryClick7 = (category) => {
    setActiveCategory7(category);
    const data = { category };
    dispatch(findProductsByCategory7(data));
  };
  const handleCategoryClick8 = (category) => {
    setActiveCategory8(category);
    const data = { category };
    dispatch(findProductsByCategory8(data));
  };
  const handleCategoryClick9 = (category) => {
    setActiveCategory9(category);
    const data = { category };
    dispatch(findProductsByCategory9(data));
  };
  const handleCategoryClick10 = (category) => {
    setActiveCategory10(category);
    const data = { category };
    dispatch(findProductsByCategory10(data));
  };
  const limitedProducts = Array.isArray(productsHomePage1?.products)
    ? productsHomePage1.products.slice(0, 5)
    : [];
  const limitedProducts3 = Array.isArray(products3HomeReducer?.products)
    ? products3HomeReducer.products.slice(0, 5)
    : [];
  const limitedProducts4 = Array.isArray(products4HomeReducer?.products)
    ? products4HomeReducer.products.slice(0, 5)
    : [];
  const limitedProducts5 = Array.isArray(products5HomeReducer?.products)
    ? products5HomeReducer.products.slice(0, 5)
    : [];
  const limitedProducts6 = Array.isArray(products6HomeReducer?.products)
    ? products6HomeReducer.products.slice(0, 5)
    : [];
  const limitedProducts7 = Array.isArray(products7HomeReducer?.products)
    ? products7HomeReducer.products.slice(0, 5)
    : [];
  const limitedProducts8 = Array.isArray(products8HomeReducer?.products)
    ? products8HomeReducer.products.slice(0, 5)
    : [];
  const limitedProducts9 = Array.isArray(products9HomeReducer?.products)
    ? products9HomeReducer.products.slice(0, 5)
    : [];
  const limitedProducts10 = Array.isArray(products10HomeReducer?.products)
    ? products10HomeReducer.products.slice(0, 5)
    : [];
  const limitedProducts11 = Array.isArray(products11HomeReducer?.products)
    ? products11HomeReducer.products.slice(0, 5)
    : [];

  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let position = marquee.offsetWidth;
    const speed = 0.6;

    function move() {
      position -= speed;
      if (position <= -marquee.scrollWidth) {
        position = marquee.offsetWidth;
      }
      marquee.style.transform = `translateX(${position}px)`;

      requestAnimationFrame(move);
    }

    move();
  }, []);

  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={0}
            className="active"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={1}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={2}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={3}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={4}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={5}
          />
          <button
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={6}
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2024/06/05/Fado.VN_1717569379.4273.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2024/01/15/Fado.VN_1705298825.4553.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480795.525.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/12/02/Fado.VN_1701480795.525.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2024/02/27/Fado.VN_1708999308.9194.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2024/02/27/Fado.VN_1708999308.9194.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/07/10/Fado.VN_1688966521.7044.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/07/10/Fado.VN_1688966521.7044.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/08/11/Fado.VN_1691734617.131.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/08/11/Fado.VN_1691734617.131.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img ls-is-cached lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/12/27/Fado.VN_1703659346.2122.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/12/27/Fado.VN_1703659346.2122.jpg"
              alt=""
              height={272}
            />
          </div>
          <div className="carousel-item">
            <img
              className="home-slider-img lazyloaded"
              src="https://cdn-beup.woka.io/uploads/banners/2023/10/02/Fado.VN_1696219891.285.jpg"
              data-src="https://cdn-beup.woka.io/uploads/banners/2023/10/02/Fado.VN_1696219891.285.jpg"
              alt=""
              height={272}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
      <nav className="nav-table">
        <li className="nav-show-info">
          <ul>
            <li>
              <ul className="table-icon">
                <div>
                  <i className="icofont icofont-euro" />
                </div>
                <div>Giá bạn thấy bằng giá bạn trả</div>
              </ul>
            </li>
            <li>
              <ul className="table-icon">
                <div>
                  <i className="icofont icofont-shopify" />
                </div>
                <div>Yên tâm mua sắm, giải tỏa rủi ro</div>
              </ul>
            </li>
            <li>
              <ul className="table-icon">
                <div>
                  <i className="icofont icofont-box" />
                </div>
                <div>Hàng chất lượng, rõ nguồn gốc</div>
              </ul>
            </li>
            <li>
              <ul className="table-icon">
                <div>
                  <i className="icofont icofont-checked" />
                </div>
                <div>Sản phẩm nhập khẩu chính ngạch</div>
              </ul>
            </li>
            <li>
              <ul className="table-icon">
                <div>
                  <i className="icofont icofont-map" />
                </div>
                <div>Liên tục cập nhật hành trình</div>
              </ul>
            </li>
            <li>
              <ul className="table-icon">
                <div>
                  <i className="icofont icofont-world" />
                </div>
                <div>Miễn phí giao hàng trong nước</div>
              </ul>
            </li>
          </ul>
        </li>
        <div className="nav-show-info nav-show-info2">
          <ul>
            <li>Cam kết giá bán niêm yết chính xác trên website</li>
            <li>Bảo vệ quyền lợi Khách Hàng, hỗ trợ đổi trả nhanh chóng</li>
            <li>
              Chất lượng đảm bảo, nguồn gốc rõ ràng, có đánh giá từ người mua và
              thẩm định độ uy tín người bán
            </li>
            <li>An toàn, minh bạch hợp pháp, không sợ rủi ro</li>
            <li>Theo dõi và cập nhật quá trình vận đơn thường xuyên</li>
            <li>
              Miễn phí giao hàng trong nước, áp dụng cho đơn hàng từ 1,5 triệu
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <nav>
          <div className="nav-country">
            <h4>Khám phá thế giới</h4>
            <div className="select-country">
              <ul className="country">
                <li className="active text-center">
                  <Link href=".">Mỹ</Link>
                </li>
                <li className="line-underline">
                  <Link className="line-text" href=".">
                    Nhật
                  </Link>
                </li>
                <li className="line-underline">
                  <Link className="line-text" href=".">
                    Đức
                  </Link>
                </li>
                <li className="line-underline">
                  <Link className="line-text" href=".">
                    Anh
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* khám phá thế giới */}
        <section>
          <div className="list-card-sales ">
            <Link to="/Dealhot">
              <div className="card-sales card-sales1">
                <div className="sales-img">
                  <img
                    src="https://cdn-beup.woka.io/uploads/banners/2023/07/06/Fado.VN_1688631732.1104.jpg"
                    width="100%"
                    height="100%"
                    alt="Giảm Đến 46% - Tai Nghe Bluetooth"
                    className="global-home-deal-card__image"
                  />
                </div>
                <div className="sales-content">
                  <div className="card-detail">
                    <div className="sales-name-detail">
                      Giảm Đến 46% - Tai Nghe Bluetooth
                    </div>
                    <div className="sales-depict">
                      <div className="sales-depict-text">Chỉ từ</div>
                      <div className="value values-price">650,000 đ</div>
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
                      style={{
                        fontSize: "30px",
                        fontWeight: 700,
                        color: "#000",
                      }}
                    >
                      -46%
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/Dealhot">
              <div className="card-sales card-sales1">
                <div className="sales-img">
                  <img
                    src="https://cdn-beup.woka.io/uploads/banners/2023/07/06/Fado.VN_1688632079.8993.jpg"
                    width="100%"
                    height="100%"
                    alt="Giảm Đến 46% - Tai Nghe Bluetooth"
                    className="global-home-deal-card__image"
                  />
                </div>
                <div className="sales-content">
                  <div className="card-detail">
                    <div className="sales-name-detail">
                      Giảm Đến 46% - Tai Nghe Bluetooth
                    </div>
                    <div className="sales-depict">
                      <div className="sales-depict-text">Chỉ từ</div>
                      <div className="value values-price">650,000 đ</div>
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
                      style={{
                        fontSize: "30px",
                        fontWeight: 700,
                        color: "#000",
                      }}
                    >
                      -46%
                    </div>
                  </div>
                </div>
              </div>
            </Link>{" "}
            <Link to="/Dealhot">
              <div className="card-sales card-sales1">
                <div className="sales-img">
                  <img
                    src="https://cdn2.jomashop.com/media//wysiwyg/sales-event/2020/tissot_3_08.jpg"
                    width="100%"
                    height="100%"
                    alt="Giảm Đến 46% - Tai Nghe Bluetooth"
                    className="global-home-deal-card__image"
                  />
                </div>
                <div className="sales-content">
                  <div className="card-detail">
                    <div className="sales-name-detail">
                      Giảm Đến 46% - Tai Nghe Bluetooth
                    </div>
                    <div className="sales-depict">
                      <div className="sales-depict-text">Chỉ từ</div>
                      <div className="value values-price">650,000 đ</div>
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
                      style={{
                        fontSize: "30px",
                        fontWeight: 700,
                        color: "#000",
                      }}
                    >
                      -46%
                    </div>
                  </div>
                </div>
              </div>
            </Link>{" "}
            <Link to="/Dealhot">
              <div className="card-sales card-sales1">
                <div className="sales-img">
                  <img
                    src="https://cdn2.jomashop.com/media//wysiwyg/sales-event/2020/versace_3.jpg"
                    width="100%"
                    height="100%"
                    alt="Giảm Đến 46% - Tai Nghe Bluetooth"
                    className="global-home-deal-card__image"
                  />
                </div>
                <div className="sales-content">
                  <div className="card-detail">
                    <div className="sales-name-detail">
                      Giảm Đến 46% - Tai Nghe Bluetooth
                    </div>
                    <div className="sales-depict">
                      <div className="sales-depict-text">Chỉ từ</div>
                      <div className="value values-price">650,000 đ</div>
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
                      style={{
                        fontSize: "30px",
                        fontWeight: 700,
                        color: "#000",
                      }}
                    >
                      -46%
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* trademark */}
          <div className="trademark-famous">
            <h4>Thương hiệu nổi bật</h4>
          </div>
          <div className="trademark-carsoul">
            <div className="trademark" ref={marqueeRef}>
              {products.brands &&
                products.brands.map((item, index) => (
                  <div className="card-trademark" key={index}>
                    <div className="trademark-img">
                      <img
                        className="cate-item-img ls-is-cached lazyloaded"
                        src={item.imageUrl}
                        alt={item.name}
                      />
                    </div>
                    <div className="trademark-content">
                      <div className="trademark-detail">
                        <a rel="nofollow" href="#" className="cate-item-title">
                          {item.name}
                        </a>
                        <div className="sales-depict-text"></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
        </section>
        {/* deal world */}
        <nav>
          <div className="nav-country nav-country2">
            <h4>Sản phẩm đang giảm giá khắp thế giới</h4>
            <div className="select-country select-country2">
              <ul className="country country2">
                <li className="active">
                  <Link href=".">Khắp thế giới</Link>
                </li>
                <li className="line-underline">
                  <Link className="line-text" href=".">
                    Săn Deal Deluxe
                  </Link>
                </li>
                <li className="line-underline">
                  <Link className="line-text" href=".">
                    Săn Deal Việt Nam
                  </Link>
                </li>
                <li className="line-underline">
                  <Link className="line-text" href=".">
                    Săn Deal từ Nhật
                  </Link>
                </li>
                <li className="line-underline">
                  <Link className="line-text" href=".">
                    Săn Deal từ Đức
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section>
          <div className="card-product-world">
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  src="https://cdn-jms.woka.io/media/catalog/product/p/r/prada-ladies-paradoxe-intense-edp-spray-30-oz-fragrances-3614273961707.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/p/r/prada-ladies-paradoxe-intense-edp-spray-30-oz-fragrances-3614273961707.jpg"
                  className="product-deal-action-card__img ls-is-cached lazyloaded"
                />
              </div>
              <div className="card-product-title">
                Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances
                3614273961707
              </div>
            </div>
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  src="https://cdn2.jomashop.com/media/catalog/product/r/o/rolex-gmtmaster-ii-gmt-black-dial-batman-bezel-mens-watch-126710blnr.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/p/r/prada-ladies-paradoxe-intense-edp-spray-30-oz-fragrances-3614273961707.jpg"
                  className="product-deal-action-card__img ls-is-cached lazyloaded"
                />
              </div>
              <div className="card-product-title">
                GMT-Master II GMT Black Dial Batman Bezel Men's Watch 126710blnr
              </div>
            </div>{" "}
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  src="https://cdn2.jomashop.com/media/catalog/product/m/i/michael-kors-medium-leather-parker-crossbody-bag-32f2s7pc8l388_1.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/p/r/prada-ladies-paradoxe-intense-edp-spray-30-oz-fragrances-3614273961707.jpg"
                  className="product-deal-action-card__img ls-is-cached lazyloaded"
                />
              </div>
              <div className="card-product-title">
                Medium Leather Parker Crossbody Bag
              </div>
            </div>{" "}
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  src="https://images-na.ssl-images-amazon.com/images/I/611xWSXv63L._SR200,200_.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/p/r/prada-ladies-paradoxe-intense-edp-spray-30-oz-fragrances-3614273961707.jpg"
                  className="product-deal-action-card__img ls-is-cached lazyloaded"
                />
              </div>
              <div className="card-product-title">Women's 515 V3 Sneaker</div>
            </div>{" "}
            <div className="card-product">
              <div className="card-product-img">
                <img
                  alt="Ladies Paradoxe Intense EDP Spray 3.0 oz Fragrances 3614273961707"
                  src="https://images-na.ssl-images-amazon.com/images/I/81FTa3aSdnL._SR200,200_.jpg"
                  data-src="https://cdn-jms.woka.io/media/catalog/product/p/r/prada-ladies-paradoxe-intense-edp-spray-30-oz-fragrances-3614273961707.jpg"
                  className="product-deal-action-card__img ls-is-cached lazyloaded"
                />
              </div>
              <div className="card-product-title">
                Acer KB272 EBI 27" IPS Full HD (1920 x 1080) Zero-Frame Gaming
                Office Monitor | AMD FreeSync Technology | Up to 100Hz Refresh |
                1ms (VRB) | Low Blue Light | Tilt | HDMI & VGA Ports,Black{" "}
              </div>
            </div>
          </div>
          {/* button next world */}
          <div className="btn-link-sales">
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/Dealhot"
            >
              {" "}
              <button className="button">
                <span className="text">Khám phá tất cả Deal hot</span>
                <svg
                  className="arrow"
                  viewBox="0 0 448 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </button>
            </Link>
          </div>
        </section>
        {/* card-product-watch */}
        <nav>
          <div className="nav-country3">
            <h4>Sản phẩm nhập khẩu chọn lọc</h4>
            <div className="select-country select-country3">
              <ul className="country country3">
                <li
                  className={activeCategory1 === "dong-ho-nam" ? "active" : ""}
                >
                  <Link
                    to="."
                    onClick={() => handleCategoryClick1("dong-ho-nam")}
                  >
                    Đồng hồ nam
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory1 === "dong-ho-nu" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    to="."
                    onClick={() => handleCategoryClick1("dong-ho-nu")}
                  >
                    Đồng hồ nữ
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory1 === "dong-ho-unisex" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    to="."
                    onClick={() => handleCategoryClick1("dong-ho-unisex")}
                  >
                    Đồng hồ Unisex
                  </Link>
                </li>
                <li className="btn-link-sales">
                  <Link to="/Filterproduct">
                    <button className="button-product">Xem tất cả</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-watch all-card-product">
          {limitedProducts.map((products) => (
            <ProductCard products={products} key={products.id} />
          ))}
        </section>
        <hr style={{ width: "100%" }} />

        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
              <ul className="country country3">
                <li
                  className={activeCategory2 === "tui-xach-nam" ? "active" : ""}
                >
                  <Link
                    href="."
                    onClick={() => handleCategoryClick2("tui-xach-nam")}
                  >
                    Túi xách nam
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory2 === "tui-xach-nu" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick2("tui-xach-nu")}
                  >
                    Túi xách nữ
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory2 === "vi-nu" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick2("vi-nu")}
                  >
                    Ví nữ
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory2 === "vi-nam" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick2("vi-nam")}
                  >
                    Ví nam
                  </Link>
                </li>
                <li className="btn-link-sales">
                  <Link to="/Filterproduct">
                    <button className="button-product">Xem tất cả</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-hangbag all-card-product">
          {limitedProducts3.map((products) => (
            <ProductCard products={products} key={products?.id} />
          ))}
        </section>
        <hr style={{ width: "100%" }} />
        {/* card-product-shoes */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
              <ul className="country country3">
                <li
                  className={activeCategory3 === "sneaker-nu" ? "active" : ""}
                >
                  <Link
                    href="."
                    onClick={() => handleCategoryClick3("sneaker-nu")}
                  >
                    Sneaker nữ
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory3 === "giay-nam" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick3("giay-nam")}
                  >
                    Giày nam
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory3 === "sandals" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick3("sandals")}
                  >
                    Sandals
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory3 === "cao-got" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick3("cao-got")}
                  >
                    cao gót
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory3 === "boosts" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick3("boosts")}
                  >
                    Boosts
                  </Link>
                </li>
                <li className="btn-link-sales">
                  <Link to="/Filterproduct">
                    <button className="button-product">Xem tất cả</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
          {limitedProducts4.map((products) => (
            <ProductCard products={products} key={products.id} />
          ))}
        </section>
        <hr style={{ width: "100%" }} />
        {/* card-product-speaker */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
            <ul className="country country3">
                <li
                  className={activeCategory4 === "tai-nghe" ? "active" : ""}
                >
                  <Link
                    href="."
                    onClick={() => handleCategoryClick4("tai-nghe")}
                  >
                    Tai nghe
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory4 === "loa" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick4("loa")}
                  >
                    Loa
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory4 === "laptop" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick4("laptop")}
                  >
                    Laptop
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory4 === "MayTinh-MayTinhBang" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick4("MayTinh-MayTinhBang")}
                  >
                    Máy Tính Bảng
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory4 === "phu-kien-may-tinh" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick4("phu-kien-may-tinh")}
                  >
                    Phụ Kiện Máy tính 
                  </Link>
                </li>
                <li className="btn-link-sales">
                  <Link to="/Filterproduct">
                    <button className="button-product">Xem tất cả</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
        {limitedProducts5.map((products) => (
            <ProductCard products={products} key={products.id} />
          ))}
        </section>
        <hr style={{ width: "100%" }} />
        {/* card-product-camera */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
            <ul className="country country3">
                <li
                  className={activeCategory5 === "may-anh-ky-thuat-so" ? "active" : ""}
                >
                  <Link
                    href="."
                    onClick={() => handleCategoryClick5("may-anh-ky-thuat-so")}
                  >
                    Máy Ảnh Kỹ Thuật Số 
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory5 === "may-anh-film" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick5("may-anh-film")}
                  >
                    Máy Ảnh Film 
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory5 === "lens" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick5("lens")}
                  >
                    Lens
                  </Link>
                </li>
                <li className="btn-link-sales">
                  <Link to="/Filterproduct">
                    <button className="button-product">Xem tất cả</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
        {limitedProducts6.map((products) => (
            <ProductCard products={products} key={products.id} />
          ))}
        </section>
        <hr style={{ width: "100%" }} />
        {/* carf-product-glasses */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
            <ul className="country country3">
                <li
                  className={activeCategory6 === "mat-kinh-nam" ? "active" : ""}
                >
                  <Link
                    href="."
                    onClick={() => handleCategoryClick6("mat-kinh-nam")}
                  >
                    Mắt Kính Nam
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory6 === "mat-kinh-nu" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick6("mat-kinh-nu")}
                  >
                    Mắt Kính Nữ
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory6 === "gong-kinh" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick6("gong-kinh")}
                  >
                    Gọng Kính
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory6 === "mat-kinh-unisex" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick6("mat-kinh-unisex")}
                  >
                    Mắt Kính Unisex
                  </Link>
                </li>
                
                <li className="btn-link-sales">
                  <Link to="/Filterproduct">
                    <button className="button-product">Xem tất cả</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
        {limitedProducts7.map((products) => (
            <ProductCard products={products} key={products.id} />
          ))}
        </section>
        <hr style={{ width: "100%" }} />
        {/* card-product-clothes-girl */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
            <ul className="country country3">
                <li
                  className={activeCategory7 === "vay-dam" ? "active" : ""}
                >
                  <Link
                    href="."
                    onClick={() => handleCategoryClick7("vay-dam")}
                  >
                    Váy Đầm 
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory7 === "ao" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick7("ao")}
                  >
                    Áo
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory7 === "quan" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick7("quan")}
                  >
                    Quần 
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory7 === "blazer" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick7("blazer")}
                  >
                    Blazer
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory7 === "ao-khoac" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick7("ao-khoac")}
                  >
                    Áo Khoác
                  </Link>
                </li>
                <li className="btn-link-sales">
                  <Link to="/Filterproduct">
                    <button className="button-product">Xem tất cả</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
        {limitedProducts8.map((products) => (
            <ProductCard products={products} key={products.id} />
          ))}
        </section>
        <hr style={{ width: "100%" }} />
        {/* carf-product-clothes-boy */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
            <ul className="country country3">
                <li
                  className={activeCategory8 === "ao-thun" ? "active" : ""}
                >
                  <Link
                    href="."
                    onClick={() => handleCategoryClick8("ao-thun")}
                  >
                    Áo Thun
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory8 === "ao-so-mi" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick8("ao-so-mi")}
                  >
                    Áo Sơ Mi
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory8 === "quan" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick8("quan")}
                  >
                    Quần
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory8 === "ao-khoac" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick8("ao-khoac")}
                  >
                    Áo Khoác
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory8=== "suits" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick8("suits")}
                  >
                    Suits
                  </Link>
                </li>
                <li className="btn-link-sales">
                  <Link to="/Filterproduct">
                    <button className="button-product">Xem tất cả</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
        {limitedProducts9.map((products) => (
            <ProductCard products={products} key={products.id} />
          ))}
        </section>
        <hr style={{ width: "100%" }} />
        {/* carf-product-adorn */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
            <ul className="country country3">
                <li
                  className={activeCategory9 === "trang-suc" ? "active" : ""}
                >
                  <Link
                    href="."
                    onClick={() => handleCategoryClick9("trang-suc")}
                  >
                    Trang Sức
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory9 === "non" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick9("non")}
                  >
                    Nón
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory9 === "khan-choang" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick9("khan-choang")}
                  >
                    Khăn Choàng
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory9 === "day-nit" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick9("day-nit")}
                  >
                    Dây Nịt
                  </Link>
                </li>
                
                <li className="btn-link-sales">
                  <Link to="/Filterproduct">
                    <button className="button-product">Xem tất cả</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
        {limitedProducts10.map((products) => (
            <ProductCard products={products} key={products.id} />
          ))}
        </section>
        <hr style={{ width: "100%" }} />
        {/* carf-product-lamp */}
        <nav>
          <div className="nav-country4">
            <div className="select-country select-country3 select-country4">
            <ul className="country country3">
                <li
                  className={activeCategory10 === "den" ? "active" : ""}
                >
                  <Link
                    href="."
                    onClick={() => handleCategoryClick10("den")}
                  >
                    Đèn
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory10 === "tham" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick10("tham")}
                  >
                    Thảm
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory10 === "nen-thom" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick10("nen-thom")}
                  >
                    Nến Thơm
                  </Link>
                </li>
                <li
                  className={`line-underline ${
                    activeCategory10 === "loa-hoa" ? "active" : ""
                  }`}
                >
                  <Link
                    className="line-text"
                    href="."
                    onClick={() => handleCategoryClick10("loa-hoa")}
                  >
                    Loa
                  </Link>
                </li>
                
                <li className="btn-link-sales">
                  <Link to="/Filterproduct">
                    <button className="button-product">Xem tất cả</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="product-shoes all-card-product">
        {limitedProducts11.map((products) => (
            <ProductCard products={products} key={products.id} />
          ))}
        </section>
        <hr style={{ width: "100%" }} />
        <div className="trademark-famous">
          <h4>T&T Blog</h4>
        </div>
        {/* Fado article */}
        <section className="Fado-article">
          <div className="list-card-article">
            <div className="card-article">
              <div className="card-article-img">
                <img
                  src="https://fado.vn/blog/wp-content/uploads/2022/03/nen-thom-la-gi-768x432.webp"
                  alt="Nến thơm là gì? Top 8 công dụng tuyệt vời của nến thơm"
                  className="home-blog__item-img"
                />
              </div>
              <div className="card-article-title">
                <h5>Nến thơm là gì? Top 8 công dụng tuyệt vời của nến thơm</h5>
              </div>
            </div>
            <div className="card-article">
              <div className="card-article-img">
                <img
                  src="https://fado.vn/blog/wp-content/uploads/2022/03/tui-xach-tang-me-768x432.webp"
                  alt="Bật mí 7 mẫu túi xách sang trọng quý phái tặng mẹ  "
                  className="home-blog__item-img"
                />
              </div>
              <div className="card-article-title">
                <h5>
                  Bật mí 7 mẫu túi xách sang trọng quý phái tặng mẹ&nbsp;&nbsp;
                </h5>
              </div>
            </div>
            <div className="card-article">
              <div className="card-article-img">
                <img
                  src="https://fado.vn/blog/wp-content/uploads/2022/03/kem-chong-nang-cell-fusion-c-768x448.webp"
                  alt="Review Top 6 kem chống nắng Cell Fusion C hiệu quả nhất hiện nay"
                  className="home-blog__item-img"
                />
              </div>
              <div className="card-article-title">
                <h5>
                  Review Top 6 kem chống nắng Cell Fusion C hiệu quả nhất hiện
                  nay
                </h5>
              </div>
            </div>
            <div className="card-article">
              <div className="card-article-img">
                <img
                  src="https://fado.vn/blog/wp-content/uploads/2022/03/tay-te-bao-chet-cho-moi-768x432.webp"
                  alt="Chia sẻ 12 cách tẩy tế bào chết cho môi hiệu quả tại nhà"
                  className="home-blog__item-img"
                />
              </div>
              <div className="card-article-title">
                <h5>
                  Chia sẻ 12 cách tẩy tế bào chết cho môi hiệu quả tại nhà
                </h5>
              </div>
            </div>
            <div className="card-article">
              <div className="card-article-img">
                <img
                  src="https://fado.vn/blog/wp-content/uploads/2024/03/nuoc-tay-trang-bioderma-768x432.webp"
                  alt="Review top 3 nước tẩy trang Bioderma được tin dùng"
                  className="home-blog__item-img"
                />
              </div>
              <div className="card-article-title">
                <h5>Review top 3 nước tẩy trang Bioderma được tin dùng</h5>
              </div>
            </div>
            <div className="card-article">
              <div className="card-article-img">
                <img
                  src="https://fado.vn/blog/wp-content/uploads/2024/03/calisthenics-la-gi-768x512.webp"
                  alt="Calisthenics là gì? Những lưu ý cho người mới tập Calisthenics"
                  className="home-blog__item-img"
                />
              </div>
              <div className="card-article-title">
                <h5>
                  Calisthenics là gì? Những lưu ý cho người mới tập Calisthenics
                </h5>
              </div>
            </div>
          </div>
          {/* button next */}
          <div className="btn-link-sales">
            <button className="button">
              <span className="text">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                  to="/Shareinfo"
                >
                  Xem thêm
                </Link>
              </span>
              <svg
                className="arrow"
                viewBox="0 0 448 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </section>
        {/* user-review */}
        <section className="user-review">
          <hr style={{ width: "100%" }} />
          <div className="comment-famous">
            <h3>Nhận xét từ khách hàng</h3>
            <button className="add-user-review">
              Gửi đánh giá của quý khách
            </button>
          </div>
          {/* Carousel */}
          <div className="carousel-slide">
            <div className="group-comment">
              <div className="carousel-comment">
                <div className="card-user-review">
                  <div className="user-review-avatar">
                    <i className="icofont-user" />
                  </div>
                  <div className="user-name">
                    <div className="user-name-email">
                      thanh0981263712@gmail.com
                    </div>
                    <div className="customer">Khách hàng</div>
                  </div>
                </div>
                <div className="customer customer-comment">
                  Hàng tốt, giao nhanh, uy tín Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Blanditiis aspernatur ab maxime
                  asperiores ex! Quasi a soluta ratione porro veniam sed ad
                  sequi? Quae, delectus praesentium! Quisquam nesciunt et
                  doloremque!
                </div>
              </div>
              <div className="carousel-comment">
                <div className="card-user-review">
                  <div className="user-review-avatar">
                    <i className="icofont-user" />
                  </div>
                  <div className="user-name">
                    <div className="user-name-email">
                      thanh0981263712@gmail.com
                    </div>
                    <div className="customer">Khách hàng</div>
                  </div>
                </div>
                <div className="customer customer-comment">
                  Hàng tốt, giao nhanh, uy tín Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Blanditiis aspernatur ab maxime
                  asperiores ex! Quasi a soluta ratione porro veniam sed ad
                  sequi? Quae, delectus praesentium! Quisquam nesciunt et
                  doloremque!
                </div>
              </div>
              <div className="carousel-comment">
                <div className="card-user-review">
                  <div className="user-review-avatar">
                    <i className="icofont-user" />
                  </div>
                  <div className="user-name">
                    <div className="user-name-email">
                      thanh0981263712@gmail.com
                    </div>
                    <div className="customer">Khách hàng</div>
                  </div>
                </div>
                <div className="customer customer-comment">
                  Hàng tốt, giao nhanh, uy tín Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Blanditiis aspernatur ab maxime
                  asperiores ex! Quasi a soluta ratione porro veniam sed ad
                  sequi? Quae, delectus praesentium! Quisquam nesciunt et
                  doloremque!
                </div>
              </div>
              <div className="carousel-comment">
                <div className="card-user-review">
                  <div className="user-review-avatar">
                    <i className="icofont-user" />
                  </div>
                  <div className="user-name">
                    <div className="user-name-email">
                      thanh0981263712@gmail.com
                    </div>
                    <div className="customer">Khách hàng</div>
                  </div>
                </div>
                <div className="customer customer-comment">
                  Hàng tốt, giao nhanh, uy tín Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Blanditiis aspernatur ab maxime
                  asperiores ex! Quasi a soluta ratione porro veniam sed ad
                  sequi? Quae, delectus praesentium! Quisquam nesciunt et
                  doloremque!
                </div>
              </div>
              <div className="carousel-comment">
                <div className="card-user-review">
                  <div className="user-review-avatar">
                    <i className="icofont-user" />
                  </div>
                  <div className="user-name">
                    <div className="user-name-email">
                      thanh0981263712@gmail.com
                    </div>
                    <div className="customer">Khách hàng</div>
                  </div>
                </div>
                <div className="customer customer-comment">
                  Hàng tốt, giao nhanh, uy tín Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Blanditiis aspernatur ab maxime
                  asperiores ex! Quasi a soluta ratione porro veniam sed ad
                  sequi? Quae, delectus praesentium! Quisquam nesciunt et
                  doloremque!
                </div>
              </div>{" "}
              <div className="carousel-comment">
                <div className="card-user-review">
                  <div className="user-review-avatar">
                    <i className="icofont-user" />
                  </div>
                  <div className="user-name">
                    <div className="user-name-email">
                      thanh0981263712@gmail.com
                    </div>
                    <div className="customer">Khách hàng</div>
                  </div>
                </div>
                <div className="customer customer-comment">
                  Hàng tốt, giao nhanh, uy tín Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Blanditiis aspernatur ab maxime
                  asperiores ex! Quasi a soluta ratione porro veniam sed ad
                  sequi? Quae, delectus praesentium! Quisquam nesciunt et
                  doloremque!
                </div>
              </div>{" "}
              <div className="carousel-comment">
                <div className="card-user-review">
                  <div className="user-review-avatar">
                    <i className="icofont-user" />
                  </div>
                  <div className="user-name">
                    <div className="user-name-email">
                      thanh0981263712@gmail.com
                    </div>
                    <div className="customer">Khách hàng</div>
                  </div>
                </div>
                <div className="customer customer-comment">
                  Hàng tốt, giao nhanh, uy tín Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Blanditiis aspernatur ab maxime
                  asperiores ex! Quasi a soluta ratione porro veniam sed ad
                  sequi? Quae, delectus praesentium! Quisquam nesciunt et
                  doloremque!
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*  */}

      {/* go top */}
      <div className="bar-icon-top">
        {isVisible && (
          <div className="back-to-top" onClick={scrollToTop}>
            <FaArrowUp />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
