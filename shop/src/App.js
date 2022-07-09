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
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <div className="main-bg">
      </div>
      <div className="container">
        <div className="row">
          {
            shoes.map((data,i)=>{
              return(
                <Card i={i} shoedata={shoedata}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );

  function Card(props){
    return(
      <div className="col-md-4">
        <img className = "front-shoes" src={process.env.PUBLIC_URL + './images/shoes'+[props.i+1]+'.jpg'} /> 
        <h4>{props.shoedata[props.i].title}</h4>
        <p>{props.shoedata[props.i].content}</p>
        <p>price: {props.shoedata[props.i].price} Won(KRW)</p>
      </div>
    );
  };
}

export default App;
