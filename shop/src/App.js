import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from "react";
import shoedata from "./data.js";
import Detail from "./routes/detail.js";


function App() {

  let navigate = useNavigate();
  let [shoes,setShoes] = useState(shoedata);
  let [shoeNumber, setShoeNumber] = useState(0);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><span><i class="bi bi-shop"></i></span> ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#Cart">Cart</Nav.Link>
            <Link to="/">홈</Link>
            <Link to="detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
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
          </>
        } />
        <Route path="/detail" element={ <Detail productImage={"./images/shoes1.jpg"}/> } />
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
        <Route path="*" element={ 
          <>
            <h3>Page doesn't exist. <i class="bi bi-bell-slash-fill"></i></h3>
            <a href="/"><i class="bi bi-house-door-fill"></i> Go back to home</a>
          </>
        } />

      </Routes>

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
