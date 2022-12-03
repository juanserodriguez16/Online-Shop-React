import React, { Component } from 'react';
import { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
}
from 'mdb-react-ui-kit';
import  '../App.css';

class SingUpPage extends Component {
  
  render(){

  
  return (
  <>{
  <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

  <MDBRow>

    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

      <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
        The best place <br />
        <span style={{color: 'hsl(218, 81%, 75%)'}}>
          to find everything you need</span>
      </h1>

      <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
        quibusdam tempora at cupiditate quis eum maiores libero
        veritatis? Dicta facilis sint aliquid ipsum atque?
      </p>

    </MDBCol>

    <MDBCol md='6' className='position-relative'>

      <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
      <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

      <MDBCard className='my-5 bg-glass'>
        <MDBCardBody className='p-5'>


          <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password'/>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Address' id='address' type='text'/>
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Phone Number' id='phoneNumber' type='text'/>
            </MDBCol>
          </MDBRow>

          <div className="text-center">
          <button className="button" onClick={createuser}>Sign up</button>
          {/* <MDBBtn onClick={toggleShow}>Launch static backdrop modal</MDBBtn> */}
          </div>

          <div className='p-2'>
          Already have a registered account? 
            <a className='a' href='/' >
                Login</a>
          </div>
          
           


        </MDBCardBody>
      </MDBCard>

    </MDBCol>

  </MDBRow>

</MDBContainer>
  }
  {/* {
    <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
    <MDBModalDialog>
      <MDBModalContent>
        <MDBModalHeader>
          <MDBModalTitle>Modal title</MDBModalTitle>
          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
        </MDBModalHeader>
        <MDBModalBody>...</MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color='secondary' onClick={toggleShow}>
            Close
          </MDBBtn>
          <MDBBtn>Understood</MDBBtn>
        </MDBModalFooter>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal>
  } */}
</>
  );
  }
}

export default SingUpPage;

const createuser = async () => {
  let url = 'http://localhost:8080/users'
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var address = document.getElementById('address').value
  var phoneNumber = document.getElementById('phoneNumber').value

  const res = await fetch(url, {
    method: 'POST',
    headers: {
        'content-type': "application/json",
        'accept' : "application/json",
       // 'authorization': localStorage.getItem("Token")
    },
    body: JSON.stringify({
        "email": email,
        "password": password,
        "address": address,
        "phoneNumber": phoneNumber
    })
})
const answer = await res.json()
console.log(res.status)
if (res.status == 200) {
  alert(`bienvenido ${answer.email} ${answer.id}`)
  //localStorage.setItem("Token",answer.token)

}else{
    // document.getElementById('messageError').innerHTML = "No se pudo registrar el suricato" + answer.code
    document.getElementById('messageError').innerHTML = "No se pudo registrar el suricato (" + answer.message + ")"

}
}