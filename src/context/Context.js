// src/context/ShopContext.jsx
import { createContext, useState } from "react";
import { product } from "../../src/products/Products"; //  import dữ liệu

export const Context = createContext();
//Dùng useContext để chuyền dữ liệu của sản phẩm vào bất cứ nơi nào muốn 
const ShopContextProvider = (props) => {
    const [products, setProducts] = useState(product); // dùng useState nếu cần cập nhật

    const value = {
        products,
        setProducts,
        // có thể thêm hàm addToCart, removeProduct, ...
    };

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
};

export default ShopContextProvider;
