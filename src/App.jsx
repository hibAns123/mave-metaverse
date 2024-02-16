
import { Container, Navbar } from 'react-bootstrap'
import './App.css'
import Home1 from './components/Home1'
import Create from './components/Create'
import Foot from './components/Foot'

function App() {


  return (
    <>

      <Navbar className=" w-100%" style={{backgroundColor:'--bs-dark'}}>
        <Container>
        <img width={'150px'}  src="/public/image/meta (1).png" alt="" />          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className='.d-flex'>
                <a style={{textDecoration:'none',marginRight:'20px'}} href="#login">HOME</a>
                
                <a style={{textDecoration:'none',marginRight:'20px'}} href="#login">ABOUT</a>
                
                <a style={{textDecoration:'none',marginRight:'20px'}} href="#login">FEATURES</a>
                
                <a style={{textDecoration:'none',marginRight:'20px'}} href="#login">PROJECTS</a>
                
                <a style={{textDecoration:'none',marginRight:'20px'}} href="#login">CONTACT US</a>
                
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>




      <Home1 />
      <Create/>
      <Foot/>


    </>
  )
}

export default App
