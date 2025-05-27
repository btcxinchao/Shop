import React from "react";
import "./Home.scss";
import { products } from "../../products/latest";
import { Link  } from "react-router";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <div className="title-home">
                <p>----OUR BESTSELLER</p>
                <h1> LASTEST ARRIVAL</h1>
                <p>SHOP NOW----</p>
              </div>
            </div>
            <div className="col-right">
              <img
                src="https://sakidorico.s3.amazonaws.com/wp/wp-content/uploads/2023/08/64d95d6730d22.jpg"
                alt="thoitrang"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="latest-products">
        <h2 style={{ textAlign: "center", marginTop: 30, fontSize: 40 }}>
          Sản phẩm mới nhất
        </h2>
         <h4> <Link to="products">XEM THÊM SẢN PHẨM  </Link></h4>
      </section>
      <section id="products">
        <ul className="product-list">
          {products.map((item) => (
            <li key={item.id} className="product-item">
              <img src={item.image} alt={item.name} />
              <p className="product-name">{item.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <footer style={{textAlign:"center"}}>
        <h2>BESTSELLER</h2>
<h1>lorem autido haud js jsho uhuao nahas iek </h1>
      </footer>
    </>
  );
};

export default Home;
