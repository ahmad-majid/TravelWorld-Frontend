import React from 'react'
import './Newsletter.css'
import { Container,Col,Row } from 'reactstrap'
import maletourist from '../assets/images/male-tourist.png';
const Newsletter = () => {
  return (
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter_content'>
                   <h2>Subscribe now to get useful travelling information.</h2>

                   <div className='newsletter_input'>
                    <input type='email' placeholder='Enter your Email'></input>
                    <button className='btn newsletter_btn'>Subsribe</button>
                   </div>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua.
                   </p>
                </div>
            </Col>
            <Col lg='6'>
                <div className='newletter_img'>
                    <img src={maletourist}></img>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter