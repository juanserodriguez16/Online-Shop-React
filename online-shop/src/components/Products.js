import { React, Component, useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import ProductCard from './ProductCard';
function Products() {
   
  const [computers, setComputers] = useState([]);

    
  useEffect(() => {
    const handlerComputers = async () => {
        let url = 'http://localhost:8080/computers'
        const tkn = localStorage.getItem("Token")
        const res = await fetch(url, {
            method: 'GET',
            headers: { 
                Authorization: 'Bearer '+ tkn
             }
        })
        const answer = await res.json()
    
        //console.log(answer)
    
        setComputers(answer)
    }
    
    handlerComputers().catch(console.error)
}, [])


    return(<>
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {
          computers.map((item) => {
              return(
                <div className="col" key={item.computerId}> 
                {
                  console.log(item.computerId)
                }
                  <ProductCard name={item.name} price={item.price} description={item.description} computerId={item.computerId}/>
                </div>
              )
          })
        }

      </div>
    </div>

    </>
          );
    }
export default Products
    

