import './App.css';
import { user } from './view/ViewUser'; // import giao diện user
import { admin } from './view/ViewAdmin'; // import giao diện admin
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Import Routes ở đây
import React from 'react';

const Login = () => { // Đổi tên hàm thành Login
  const navigate = useNavigate(); // sử dụng hook useNavigate để điều hướng trang
  const [role, setRole] = React.useState(''); // Khởi tạo useState để lưu vai trò của người dùng

  // vì role chỉ có thể gán giá trị từ value nên cần có setRole để cập nhật giá trị mỗi khi giá trị input thay đổi
  const handleChange = (event) => {
    // target là thuộc tính đại diện cho phần tử DOM mà sự kiện sảy ra 
    setRole(event.target.value); // Cập nhật state role khi người dùng nhập vào ô input
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //

    // Sửa điều kiện kiểm tra vai trò
    if (role.toLowerCase().trim() === 'user') {
      navigate('/user'); // sử dụng navigate điều hướng đến trang user
    } else if (role.toLowerCase().trim() === 'admin') {
      navigate('/admin'); // tương tự như user
    } else {
      alert('Not Found') // hiển thị thông báo 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter role (user/admin)"
          value={role} // Gán giá trị cho ô input từ state role
          onChange={handleChange} // Gọi handleChange khi người dùng nhập dữ liệu
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

function App() {
  return (
    // Bọc ứng dụng trong router để kích hoạt routing
    <Router> 
      {/* Định nghĩa route */}
      <Routes>
        {}
        <Route path="/" element={<Login />} />
        <Route path="/user" element={user()} />
        <Route path="/admin" element={admin()} />
      </Routes>
    </Router>
  );
}

export default App;
