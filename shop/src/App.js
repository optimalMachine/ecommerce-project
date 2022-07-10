import './App.css';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from "react";
import shoedata from "./data.js";
import Detail from "./routes/detail.js";

function App() {

  let navigate = useNavigate();
  let [shoes,setShoes] = useState(shoedata);
  let [shoeNumber, setShoeNumber] = useState(0);
  let [modalOn, setModalOn] = useState(false);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><span><i class="bi bi-shop"></i></span> ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}} >About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}} >Detail</Nav.Link>
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
                      <Card onClick={()=>{
                        setModalOn(!modalOn);
                      }} i={i} shoedata={shoedata}/>
                    )
                  })
                  modalOn == true ? <Detail shoeData={shoedata}/> : null;
                }
              </div>
            </div>
          </>
        } />
        <Route path="/detail/:id" element={ <Detail shoeData={shoedata} />} /> 
        <Route path="/about" element={ <About /> }>
          <Route path="member" element={ <div>Member list</div> } />
          <Route path="location" element={ <div>Where we are</div> } />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
    
  );

  function PageNotFound(){
    return(
      <>
        <h3>404</h3>
        <h3>Page doesn't exist.<i class="bi bi-bell-slash-fill"></i></h3>
        <a style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}><i class="bi bi-house-door-fill"></i> Go back to home</a>
      </>
    )
  }

  function About(){
    return (
      <>
        <div className="aboutus">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium tortor et mi placerat, ut feugiat tellus rutrum. Nam eleifend congue accumsan. Vivamus sit amet nunc quis massa feugiat cursus. Nunc at dapibus felis, et pulvinar nibh. Integer tempor dolor a iaculis gravida. Ut vel pharetra ipsum. Maecenas bibendum ac lacus sed commodo. Nulla risus massa, imperdiet et ligula scelerisque, cursus lobortis augue. Phasellus finibus congue elit id dictum.</p>
        </div>
        <Outlet></Outlet>
      </>
    )
  }

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
