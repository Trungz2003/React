import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

// useRef được sử dụng để giữ một giá trị không thay đổi

const tabs = ['start', 'stops'] // Khởi tạo 2 nút ấn

function App() {

  // khởi tạo các hook useState
  const [number, setNumber] = useState(60)
  const [status, setStatus] = useState('')

  // khởi tạo hook useref
  const timerId = useRef()

  // Hàm sử lý start
  const handleStart = () => {
    timerId.current = setInterval(()=>{
      setNumber( prev => prev - 1);
    }, 1000)
  }

  const handleStops = () => {
    clearInterval(timerId.current)
  }

  useEffect(() => {
    if(status === 'start'){
      return handleStart();
    }
    
    return handleStops();
    
    
  }, [status])

  return (
    <>
      <h1>{number}</h1>
      {tabs.map((tab) => {
        return(
          <button
          key={tab}
          onClick={() => setStatus(tab)}
          style={status == tab ? {
            color: 'white',
            backgroundColor: 'black',
            margin: '20px'
          } : {margin: '20px'}}
          >
            {tab}
          </button>
        )
      })}
    </>
  )
}

export default App
