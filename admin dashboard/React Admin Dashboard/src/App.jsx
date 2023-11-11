import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import AddMedicine from './components/Medicine/AddMedicine';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <Router>
       <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home /> 
      <div className='content-container'>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/add-medicine" component={<AddMedicine/>} />
            
            {/* <Route path="/manage-medicine" component={ManageMedicine} /> */}
        
            </Routes>
        </div>
    </div>
    </Router>
   
  )
}

export default App

