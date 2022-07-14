import { useEffect, useState } from "react";
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
    let [alert, setAlert] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setAlert(false);
        },2000);
    },[])
    
    let {id} = useParams();
    let findProduct = props.shoeData.find((x)=>{
    
        return x.id == id;
    })

    return(
        <div className="container">
            {
                alert == true ? <div className="alert alert-warning">2초내 구입시 할인</div> : null 
            }
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