import '../App.css';
import '../styles.css';
import {React, useState }from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link} from 'react-router-dom';
import SingUpPage from './SingUpPage';


function LoginPage() {
    return(
        <>

        {
          
            <MDBContainer fluid className='p-5 background-radial-gradient overflow-hidden'>
    
            <MDBCard>
              <MDBRow className='g-0'>
      
                <MDBCol md='6'>
                  <MDBCardImage src='https://w0.peakpx.com/wallpaper/106/535/HD-wallpaper-pc-gamer.jpg' alt="login form" className='rounded-start w-100'/>
                </MDBCol>
      
                <MDBCol md='6'>
                  <MDBCardBody className='d-flex flex-column'>
      
                    <div className='d-flex flex-row mt-2'>
                      <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                      <span className="h1 fw-bold mb-0">Online shop</span>
                    </div>
      
                    <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
      
                      <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' size="lg"/>
                      <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg"/>
                    
                    <button className="button" color='dark' size='lg' onClick={ sendLogin}>Login</button>
                  
                    <div>
                      <h2 id="messageSuccess"></h2>
                      <h2 id="messageError"></h2>
                    </div>
                    <p>Don't have an account? </p>
                    <a className="button_register" color='dark' href='/singup'>Register here</a>
    

      
                  </MDBCardBody>
                </MDBCol>
      
              </MDBRow>
            </MDBCard>
      
          </MDBContainer>
          
        }
        </>
    )

}
export default LoginPage
const sendLogin = async () => {

    let url = 'http://localhost:8080/login'
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    const res = await fetch(url, {
      method: 'POST',
      headers: {
          'content-type': "application/json",
          'accept' : "application/json",
         // 'authorization': localStorage.getItem("Token")
      },
      body: JSON.stringify({
          "email": email,
          "password": password
  
      })
  })
  const answer = await res.json()
  console.log(res.status)
  localStorage.setItem("Token", " ")
  localStorage.setItem("cart", " ")
  if (res.status == 200) {
    document.getElementById('messageSuccess').innerHTML = answer.token  
    localStorage.setItem("Token",answer.token)
    alert(answer.token)
    window.location.href="main/listUsers"
  }
  }