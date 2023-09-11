import React from "react";
import { Container, Row, Col, button } from "reactstrap";
import { Link } from "react-router-dom";
import "../Styles/ThankYou.css";
import Newsletter from "./../Shared/Newsletter";
import MasonryImagesGallery from "../Components/image-gallery/MasonryImagesGallery";
import CommonSection from "../Shared/CommonSection";
const Gallery = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="" style={{ paddingBottom: "2rem" }}>
                <CommonSection title={"Gallery"} />
              </div>
              <div className="">
                <MasonryImagesGallery></MasonryImagesGallery>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Gallery;
