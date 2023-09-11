import React from 'react'
import { Container,Row,Col,button } from 'reactstrap'
import {Link}from 'react-router-dom'
import '../Styles/ThankYou.css'
import Newsletter from './../Shared/Newsletter'
const ThankYou = () => {
  return (
    <>
  <section>
    <Container>
        <Row>
            <Col lg='12' className='pt-5 text-center'>
                <div className='thank_you'>
                    <span><i class="ri-checkbox-circle-line"></i></span>
                    <h1 className='mb-3 fw-semibold'>Thank You</h1>
                    <h3 className='mb-4'>Your tour is booked.</h3>
                    <button className='btn primary_btn w-25'> <Link to='/home'>Back to Home</Link></button>
                </div>
            </Col>
        </Row>
    </Container>
  </section>

  <Newsletter/>
  </>
  )
}

export default ThankYou