import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container m-auto mt-4 px-4"> 
      <div className="flex min-h-screen flex-col justify-between"> 
        < Header />
        {/* < MainContent /> */}
        <Outlet />
        {/* < Footer /> */}
      </div>
    </div>
  )
}

export default App
