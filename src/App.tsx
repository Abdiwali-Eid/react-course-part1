import { useState } from 'react'
import Listgroup from './component/Listgroup'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const items = ['xamar', 'Abdudwaq', 'Kismanyo', 'Hargaysa'];
  return (
    <div className="App">
      
      <Listgroup items={items} heading="cities"/>
    </div>
  )
}

export default App
