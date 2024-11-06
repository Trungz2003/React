import './App.css'
import { Content } from './view/Content'
import { useState } from 'react'


function App() {
  
  const [showContent, setShowContent] = useState(false)

  const handleClickShow = () =>{
    if(showContent === false){
      return setShowContent(true)
    }
    
    return setShowContent(false)
  }

  return (
    <>
      <button
        onClick={handleClickShow}
      >
        {showContent ? 'Hide' : 'Show'}
      </button>
      {showContent && <Content />}
    </>
  )
}

export default App
