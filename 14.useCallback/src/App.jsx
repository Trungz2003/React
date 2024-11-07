import { useCallback, useState, useEffect } from 'react'

import './App.css'

import {MemoizedContent} from './Content'

/*
  - useCallback là hook để ghi nhớ các hàm nhằm tránh tái tạo hàm trong mỗi lần render 
  - Sử dụng chủ yếu khi: 
    + tránh tái tạo hàm mỗi lần render
    + khi truyền hàm vào các component con
  - khi nào không nên dùng
    + hiệu xuất không đáng kể
    + gây phức tạp không cần thiết 
*/


function App() {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0)

  const handelIncreace = useCallback(() =>{
    setCount(prev => prev + 1)
  }, [])

  // Sử dụng useEffect để tự động cập nhật number khi count thay đổi
  useEffect(() => {
    setNumber(count);
  }, [count]); // Khi count thay đổi, number sẽ được cập nhật theo count


  return (
    <>
      <h1>{`Gia tri lay ra: ${number}`}</h1>
      <h1>{count}</h1>
      <MemoizedContent
        onIncrease = {handelIncreace}
      />
    </>
  )
}

export default App
