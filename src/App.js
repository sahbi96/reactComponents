
import FullName from './Component/Profile/FullName';
import './App.css';
import Address from './Component/Profile/Address';
import Photo from './Component/Profile/Photo';
import './style.css';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    
    <div className="App">
     
    
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Welcome to my profile !</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#About me">About me</Nav.Link>
      <Nav.Link href="Contact me">Contact me</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

<div className="App">
    <FullName/>
      <Photo/>
     <Address/>
     </div>
    </div>
    
  );
}

export default App;
