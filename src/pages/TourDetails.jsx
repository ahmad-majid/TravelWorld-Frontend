import React, { useEffect, useRef, useState, useContext } from "react";
import "../Styles/tourdetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
// import tourData from "../assets/data/tours.json";
import calculateAvgRating from "../Utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../Components/Booking/Booking";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../Utils/config";

import { AuthContext } from "../Context/authContext";
const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const { user } = useContext(AuthContext);

  console.log(">>>>>>", tour);
  // const tour=tourData.find(tour=>tour.id===id)

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    


    try {
      if (!user) {
        alert("Please Sign In");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };
     
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });
      const result =await res.json()
      if(!res.ok){return alert(result.message)
      }    alert (result.message) }
      catch(err){alert(err.message)}
    }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <section>
      <Container>
        {loading && <h4 className="text-center pt-5">LOADING....</h4>}
        {error && <h4 className="text-center pt-5">{error}</h4>}
        {!loading && !error && (
          <Row>
            <Col lg="8">
              <div className="tour_content">
                <img src={photo} alt=""></img>
                <div className="tour_info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5 ">
                    <span className="tour_rating d-flex align-items-center gap-1">
                      <i
                        class="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not Rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>

                    <span>
                      <i class="ri-map-pin-user-fill"></i>
                      {address}
                    </span>
                  </div>

                  <div className="tour_extra-details">
                    <span>
                      {" "}
                      <i class="ri-map-pin-2-line" />
                      {city}
                    </span>
                    <span>
                      {" "}
                      <i class="ri-money-dollar-circle-line" />
                      {price} /per person{" "}
                    </span>
                    <span>
                      {" "}
                      <i class="ri-map-pin-time-line" />
                      {distance} k/m{" "}
                    </span>
                    <span>
                      {" "}
                      <i class="ri-group-line" />
                      {maxGroupSize} people{" "}
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/*------------------------TOUR REVIEW-------------------------------  */}
                <div className="tour_review mt-4">
                  <h4>Reviews({reviews?.length}reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                      <span onClick={() => setTourRating(1)}>
                        {" "}
                        1 <i class="ri-star-s-fill" />{" "}
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        {" "}
                        2 <i class="ri-star-s-fill" />{" "}
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        {" "}
                        3 <i class="ri-star-s-fill" />{" "}
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        {" "}
                        4 <i class="ri-star-s-fill" />{" "}
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        {" "}
                        5 <i class="ri-star-s-fill" />{" "}
                      </span>
                    </div>

                    <div className="review_input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share Your thoughts"
                        required
                      ></input>
                      <button
                        className="btn primary_btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user_reviews">
                    {reviews?.map((review) => (
                      <div className="review_item">
                        <img src={avatar} alt=""></img>
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>
                                {new Date(review.createdAt).toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating}
                              <i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default TourDetails;
