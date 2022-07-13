import { useParams } from "react-router-dom";
import styled from 'styled-components'

let YellowBtn = styled.button`
    background:yellow;
    color:black;
    padding: 10px;

`

let Box = styled.div`
    background: grey;
    padding: 20px;
`

function Detail(props){
    
    let {id} = useParams();
    let findProduct = props.shoeData.find((x)=>{
        console.log (x.id==id)
        return x.id == id
    })
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={ process.env.PUBLIC_URL + '/images/shoes'+ (Number(id) + 1)+'.jpg' } width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>{findProduct.price} Won</p>
                    <button className="btn btn-danger">Order Now</button> 
                </div>
            </div>
        </div> 
        
    )
};

export default Detail;