import { useReducer } from 'react'
import './App.css'
import { useState } from 'react';

// Khởi tạo giá trị ban đầu cho reducer
const initState = ['css', 'js', 'react'];

// Tạo các action
const UPDATE_ACTION = 'update';
const DELETE_ACTION = 'delete';

// Tạo hàm reducer
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ACTION:
      return [...state, action.payload];
    case DELETE_ACTION:
      console.log(action);
      return state.filter((_, index) => index !== action.payload)
    default:
      return new Error('Invalid action');
  }
}


function App() {
  // state giá trị lưu sau mỗi lần thay đổi
  // dispatch là các action
  // hàm reducer nhận vào 2 đối số là state và dispatch
  // initState là giá trị ban đầu
  const [state, dispatch] = useReducer(reducer, initState);
  const [inputValue, setInputValue] = useState('')

  const handleUpdate = () => {
    // Kiểm tra xem giá trị nhập vào có khác null hay không
    if(inputValue.trim() !== ''){
      // set dữ liệu để gửi lên action thực hiện tiếp
      dispatch({
        type: UPDATE_ACTION,
        payload: inputValue
      })

      // set lại giá trị cho inputValue bằng ''
      setInputValue('');
    }else{
      let err = 'input not empty'
      alert(err)
    }
  }

  const handleDelete = (index) => {
    if(index === null || index < 0){
      alert('Xóa chưa nhận đúng giá trị');
    }

    dispatch({
      type: DELETE_ACTION,
      payload: index
    })
  }
  return (
    <>
      <input 
        type="text" 
        value={inputValue} // gán giá trị vào input
        onChange={(e) => setInputValue(e.target.value)} //dùng useState để lấy giá trị nhập vào cập nhật lại inputValue
        placeholder='thêm môn học mới'
      />
      
      {/* dùng hàm handleUpdate để sử lý dữ liệu */}
      <button onClick={handleUpdate}>
        update 
      </button>
      <ul>
        {state.map((item, index)=>{ // map đọc qua từng dữ liệu có trong mảng
          return <li key={index}>
            {item}
            <span 
              style={{cursor: 'pointer', marginLeft: '8px'}}
              onClick={()=>handleDelete(index)}
            >-</span>
          </li>
        })} 
      </ul>
    </>
  )
}

export default App
