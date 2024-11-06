import {useState, useEffect} from 'react'
import axios from 'axios';



/*
    userEffect: đươc sử dụng để gọi api, cập nhật DOM, thiết lập hoặc xóa bị nhớ(cleanup) sau khi compoment render hoặc khi dữ liệu
        thay đổi
    
    Các cách sử dụng useEffect:
        1. Điểm khác nhau
            - useEffect(callback)
                + gọi callback mỗi khi compoment re-render
                + gọi callback sau khi thêm element vào DOM
            - useEffect(callback, [])
                + Chỉ gọi callback 1 lần sau khi compoment mount
            - useEffect(callback, [deps])
                + Chỉ gọi lại callback mỗi khi deps thay đổi
        2. Điểm giống nhau
            Callback luôn dược gọi khi compoment mount(được khởi tạo)
*/

const tabs = ['posts', 'albums', 'users'] // tạo các đầu api

export const Content = () => {
    // Tạo các useState
    const [title, setTitel] = useState('');
    const [posts, setPosts] = useState([]); 
    const [type, setType] = useState('')

    //  Khởi tạo cùng với giao diện
    useEffect(()=>{
        
        if(type !== ''){
            axios.get(`https://jsonplaceholder.typicode.com/${type}`) // Call api với phương thức get
            .then((response)=>{
                setPosts(response.data) // thay đổi giá trị cho posts
            })
        }
    }, [type])// deps truyền vào khi chọn type

    return(
        <>
            <div>
                <input 
                    type="text"
                    value={title} // gán giá trị của title vào input
                    onChange={(e) => setTitel(e.target.value)}  // khi gọi sự kiện onChange set giá trị từ input cho title
                />

                <br />

                {tabs.map((tab) => {
                    return( 
                        <button 
                            key={tab}
                            onClick={() => setType(tab)} // gọi sự kiện onclick set giá trị tab cho type
                            style={type === tab ? {
                                color: "white",
                                backgroundColor: "black",
                                margin: '20px'
                            } : {margin: '20px'}}
                        >
                            {tab}
                        </button>    
                    )
                })}

                <ul>
                    {
                        posts.map((post)=> {
                            // Nếu có trường post.title thì hiện thị nếu không có hiển thị post.email
                            return <li key={post.id}>{post.title || post.email}</li> 
                        })
                    }
                </ul>
            </div>
        </>
    )
}