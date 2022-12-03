
import React from "react";
import {Compu} from '../objects/Compu'
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
function ProductCard (props){
const saveData =() => {
    console.log(props.computerId)
    console.log(props.name)
    if(localStorage.getItem('cart') === null){
        let computs = []
        const  newcompu = new Compu(1,props.computerId )
        computs.push(newcompu)
                       
        localStorage.setItem('cart',  JSON.stringify(computs))
    }else{

        let storage = localStorage.getItem('cart') 
        const arr = JSON.parse(storage)
        let founded = false
        for(let c = 0; c < arr.length; c++) {
            if(arr[c].computer == props.computerId) {
                arr[c].quantity = parseInt(arr[c].quantity) + 1
                founded = true
            }
        }
        if(!founded) {
            const  newcompu = new Compu(1,props.computerId )
            arr.push(newcompu);
        }
        localStorage.setItem('cart',  JSON.stringify(arr))
        //storage.keys(MyObject).forEach(key => arr.push({name: key, value: MyObject[key]}))
        // + JSON.stringify(computs)
        //localStorage.setItem('cart',  storage)
    }
    
    alert(`${props.name} agregado al carrito`)
}


    return(
        <>
        <MDBContainer fluid className="my-5">
        <MDBRow className="justify-content-center">
            <MDBCol md="8" lg="6" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
                <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-overlay"
                >
                <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
                    fluid
                    className="w-100"
                    style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    }}
                />
                <a>
                    <div className="mask"></div>
                </a>
                </MDBRipple>
                <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between">
                    <div>
                    <p>
                        <a className="text-dark" id="name" >
                        {props.name}
                        </a>
                    </p>
                    <p className="small text-muted" id="description">{props.description}</p>
                    </div>

                </div>
                </MDBCardBody>
                <hr class="my-0" />
                <MDBCardBody className="pb-0">
                <div className="d-flex justify-content-between">
                    <p>
                    <a  className="text-dark" id="price">
                        {props.price}
                    </a>
                    </p>
                   
                </div>
                <p className="small text-muted">Certifcado</p>
                </MDBCardBody>
                <hr class="my-0" />
                <MDBCardBody className="pb-0">
                <div className="d-flex  align-items-center pb-2 mb-4">
                    
                    <button className="btn btn-primary" onClick={saveData}>Buy now</button>
                </div>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
        </>
    )
    
} export default ProductCard
