import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from "react";
import shoedata from "./data.js";


function App() {

  let [shoes,setShoes] = useState(shoedata);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><span><i class="bi bi-shop"></i></span> ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <div className="main-bg"></div>
      <br />
      <div className="container">
        <div className="row">
          {
            <FrontShoes shoedata={shoedata}/>
          }

          <div className="col-md-4">
            <img className = "front-shoes" src={process.env.PUBLIC_URL + '/images/shoes2.jpg'} /> 
            <h4>{shoedata[1].title}</h4>
            <p>Explanation</p>
          </div>
          <div className="col-md-4">
            <img className = "front-shoes" src={process.env.PUBLIC_URL + '/images/shoes3.jpg'} /> 
            <h4>{shoedata[2].title}</h4>
            <p>Explanation</p>
          </div>
        </div>
      </div>

    </div>
    
  );

  function FrontShoes(props){
    return(
      <div className="col-md-4">
        <img className = "front-shoes" src={process.env.PUBLIC_URL + './images/shoes1.jpg'} /> 
        <h4>{props.shoedata[0].title}</h4>
        <p>Explanation</p>
      </div>
    );
  };
}

export default App;
