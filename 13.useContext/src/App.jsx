import './App.css'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import { Content } from './Content'

/*
  I. useContext cho phép bạn sử dụng cho phép bạn sử dụng context dễ dàng trong các funcion component, cung cấp 
    một cách chia sẻ dữ liệu giữa các component mà không cần phải truyền prop qua từng cấp của component tree
*/

function App() {

  const context = useContext(ThemeContext)


  return (
    
      <div style={{padding: 20}}>
        <button className={context.theme} onClick={context.toggleTheme}>Toggle theme</button>
        <Content/>
      </div>
  )
}

export default App
