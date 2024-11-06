import React, {useState} from 'react'

const Counter =  () => {
    // count là giá trị trạng thái hiện tại
    // setCount là hàm dùng để cập nhật giá trị
    const [count, setCount] = useState(0)

    return (
        <div className='wraper'>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count + 1)}>tăng</button>
            <button onClick={()=>setCount(count - 1)}>giảm</button>
        </div>
    )
}

export default Counter;