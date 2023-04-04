import React, { useEffect } from 'react';
import { useState } from 'react';
import img from '../images/img1.jpg'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
//   MDBIcon,
  MDBInput
}

from 'mdb-react-ui-kit';

const Login=()=> {

  const [imageSrc, setImageSrc] = useState(img);
  const [imageno,setimageno]=useState(1);
  const Navigate=useNavigate();

const loadImage = async () => {
    if(imageno===9)
      setimageno(1);
    else    
      setimageno(imageno+1);
    // console.log('load image is called')
  
    let imageName=`img${imageno}.jpg`;
    const { default: imageSrc } = await import(`../images/${imageName}`);
    setImageSrc(imageSrc);
  };
  useEffect(()=>{
    // console.log('useeffect is called')
    const intervalId = setInterval(loadImage, 1000);
    return () => clearInterval(intervalId);
  },[imageSrc,loadImage])
  const gotoSignup=()=>{
    Navigate('../Signup')
  }
  return (
    <MDBContainer className="my-2 my-container">
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage src={imageSrc} alt="login form" type="image/png" className='rounded-start w-100 img_size'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/> */}
                <img src={logo} alt="not found" type="image/png" className='logo_jis'/>
                {/* <MDBCardImage src={logo} alt="login form" className='logo'/> */}
                <span className="h1 fw-bold mb-0">Judiciary information</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              <a className="small text-muted" href="/">Forgot password?</a>
              <span className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <span onClick={gotoSignup} style={{cursor:'pointer', paddingLeft:'5px'}}>Create New</span></span> 

              <div className='d-flex flex-row justify-content-start'>
                <a href="/" className="small text-muted me-1">Terms of use.</a>
                <a href="/" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}
export default Login;