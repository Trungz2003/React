import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

/*
  - useMemo là một hook trong React dùng để memoize (ghi nhớ) giá trị tính toán từ một hàm, 
      giúp tránh việc tính toán lại mỗi lần render nếu giá trị không thay đổi. 
      Nó rất hữu ích khi bạn có một phép toán nặng hoặc tính toán phức tạp mà không muốn nó thực thi lại mỗi lần component render
  - thành phần chính: 
    + 1 hàm sử lý
    + đối số truyền vào 
*/

function App() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(()=>{
    return count * 2;
    
  }, [count]);


  return (
    <>
      <h1>{`Count: ${count}`}</h1>
      <h2>{`Expensive Calculation: ${expensiveCalculation}`}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </>
  )
}

export default App
