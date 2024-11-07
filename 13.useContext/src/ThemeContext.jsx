import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext(); // Khởi tạo một Context

// {children} chứa các phần tử con(element, text, component khác) được đặt giữa cặp thẻ mở và đóng(Ví dụ: 1 giao diện) 
export const ThemeProvider = ({ children }) => { 
    const [theme, setTheme] = useState("light"); // khởi tạo 1 useState

    // Hàm sử lý setTheme cho theme
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Tạo 1 object
    const value = {
        theme, 
        toggleTheme
    }

    // Bọc dữ liệu trả ra bằng 1 useContext
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// Thêm propTypes để xác định kiểu của children
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};
