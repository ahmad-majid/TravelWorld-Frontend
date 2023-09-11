import React from 'react'
import '../Styles/Home.css'
import {Container,Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../Shared/Subtitle';
import worldImg from '../assets/images/world.png';
import SearchBar from '../Shared/SearchBar';
import ServiceList from '../Services/ServiceList';
import FeaturedTourList from '../Components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../Components/image-gallery/MasonryImagesGallery';
import Testimonial from '../Components/Testimonial/Testimonial';
import Newsletter from '../Shared/Newsletter';
import Footer from '../Components/Footer/Footer';
const Home = () => {
  return (
<>
<section>
  <Container>
    <Row>
      <Col lg='6'>

                   <div className='hero_content'>
                    <div className='hero_subtitle d-flex align-items-center '>
                      <Subtitle subtitle={'Know Before You Go'}/>
                      <img src={worldImg}></img>
                    </div>
                    <h1>Travelling under the door to creating 
                      <span className="highlight"> memories</span></h1>
                      <p>Welcome to our travel agency, where we help you plan your next dream vacation. We offer customized and personalized travel packages for various destinations around the world. We take care of everything from booking your flights, hotels, and transportation, to arranging your visas, insurance, and tours. You can also choose from our wide range of optional activities and excursions. We guarantee you the best quality service and value for your money. Contact us today and let us make your travel dreams come true.</p>
                   </div>
      </Col>

      <Col lg='2'>
        <div className='hero_img-box'>
          <img src={heroImg}></img>
        </div>
      </Col>
      <Col lg='2'>
        <div className='hero_img-box mt-4'>
          <video src={heroVideo} controls></video>
        </div>
      </Col>
      <Col lg='2'>
        <div className='hero_img-box mt-5'>
          <img src={heroImg02}></img>
        </div>
      </Col>
      <SearchBar></SearchBar>
    </Row>
  </Container>
</section>

  
                    {/*===============---MID SECTIONN---==========*/}
<section>
  <Container>
    <Row>
      <Col lg='3'>
        <h5 className='services_subtitle'>What we serve</h5>
        <h2 className='services_title'>We offer our best services</h2>
      </Col>
      <ServiceList/>
    </Row>
  </Container>

</section>

      {/* =========================================================================*/}
                    {/* ========================Featured tour section================================*/}
<section>
  <Container>
    <Row>
      <Col lg='12' className='mb-5'>
        <Subtitle subtitle ={'Explore'}/>
        <h2 className='featured_tour-title'>Our featured tours</h2>
       </Col>
       <FeaturedTourList></FeaturedTourList>
    </Row>
  </Container>
</section>
        {/* ========================Featured tour section End================================*/}

                {/* ========================Experience section ================================*/}

<section>
  <Container>
    <Row>
    <Col lg='6'>
    <div className='experience_content'>
      <Subtitle subtitle={"Experience"}/>
<h2>With our all experience <br/>We will serve you</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> sed do eiusmod tempor incididunt aliqua.</p>
    </div>

    <div className='counter_wrapper d-flex align-items-center gap-5'>
      <div className='counter_box'>
        <span>12k+</span>
        <h6>Successfull trip</h6>
      </div>
      <div className='counter_box'>
        <span>2k</span>
        <h6>Regular client</h6>
      </div>
           <div className='counter_box'>
        <span>15k</span>
        <h6>Years experience</h6>
      </div>
    </div>
    
    
    </Col>

    <Col lg='6'>
      <div className='experience_img'>
        <img src={experienceImg}></img>
      </div>
    </Col>
    </Row>
  </Container>
</section>
                {/* ========================Experience section End ================================*/}


                 {/* ========================Gallery section Start ================================*/}
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={"Gallery"}/>
        <h2 className='gallery_title'>
          Visit our customer tour gallery
        </h2>
      </Col>

      <Col lg='12'>
        <MasonryImagesGallery></MasonryImagesGallery>
      </Col>
    </Row>
  </Container>
</section>
            {/* ========================Gallery section End ================================*/}

   {/* ========================Testimonial section Start ================================*/}
<section>
  <Container>
    <Row>
      <Col lg='12'>
       <Subtitle subtitle={"Fans Love"}/>
       <h2 className='testimonial_text'>What our fans say about us</h2>
      </Col>
      <Col lg='12'>
        <Testimonial/>
      </Col>
    </Row>
  </Container>
</section>
      {/* ========================Testimonial section End ================================*/}
<Newsletter></Newsletter>

</>
  )
}

export default Home