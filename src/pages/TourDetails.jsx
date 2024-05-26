import React, { useEffect, useRef, useState, useContext } from 'react';
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
// import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import avatar from "../assets/images/avatar.jpg";
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';

import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  //static data to be called API and db from db
  // const tour = tourData.find(tour => tour.id === id)
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  //destructure properties from our object
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  //submit req to server
  const submitHandler = async e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;
    // alert(`${reviewText}, ${tourRating}`);

    try {
      // const res = await fetch(`${BASE_URL}/review/${id}`);
      if (!user || user === undefined || user === null) {
        alert("Please sign in")
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating
      }

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'post',
        headers: {
          "content-type": "application/json",

        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message)
      }
      alert(result.message);
      // alert('review submitted');

    } catch (err) {
      alert(err.message)
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tour]);
  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {
            !loading && !error &&
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt="" />
                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="d-flex
                align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i class="ri-star-fill"
                          style={{ color: "var(--secondary-color)" }}></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>
                      <span>
                        <i class="ri-map-pin-user-line"></i> {address}
                      </span>
                    </div>
                    <div className="tour__extra-details">
                      <span><i class="ri-map-pin-2-line"></i>{city}
                      </span>
                      <span><i class="ri-money-dollar-circle-line"></i>${price} /per
                        person</span>
                      <span><i class="ri-map-pin-line"></i>{distance} /per
                        km</span>
                      <span><i class="ri-group-line"></i>{maxGroupSize} people
                      </span>
                    </div>
                    <div>
                      <span>
                        Kailash Mansarovar Tour takes you to the western part of Tibet, where you get to explore some of the exotic vegetation, ancient cultural heritage, high Himalayan mountains, and holy lakes. Kailash Mansarovar Tour is a very famous tour among pilgrims from Hindus, Buddhists, Jain, and Bon religions. Mt. Kailash and Lake Mansarovar are the two main highlights of this tour. During the Kailash Mansarovar Yatra, you will get to have deep insights into the Tibetan culture and the daily lifestyle of the Tibetans. The journey is adventurous, divine, and full of gorgeous views.
                      </span>
                    </div>
                    <br></br>
                    <h5>ITINERARY</h5>
                    <p>
                      {desc}<br></br>
                      Day 01: Arrive in Kathmandu and transfer to hotel<br></br>
                      Day 02: Kathmandu valley sightseeing, visa preparation and, evening trip briefing<br></br>
                      Day 03: Drive Kathmandu to Kerung (3500 M)<br></br>
                      Day 04: Acclimatization day<br></br>
                      Day 05: Drive to Saga (4500 M)<br></br>
                      Day 06: Drive to Mansarovar Lake (4600 M)<br></br>
                      Day 07: Drive to Darchen (4580 M)<br></br>
                      Day 08: Drive to Yama Dwar; 30 minutes and trek to Dirapuk (4900 M); 4-5 hours<br></br>
                      Day 09: Trek to Zutul-Puk (4750 M) via Dolma la pass (5600 M)<br></br>
                      Day 10: Trek to Darchen (4580 M) and drive to Saga<br></br>
                      Day 11: Drive to Kerung(3500 M)<br></br>
                      Day 12: Drive to Kathmandu(1350 M)<br></br>
                      Day 13: Free day<br></br>
                      Day 14: Final Departure
                    </p>
                  </div>
                  { /* ======================= tour reviews section ================== */}
                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)}>
                          1<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5<i class="ri-star-s-fill"></i>
                        </span>
                      </div>
                      <div className="reviews__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="share your thoughts"
                          required
                        />
                        <button className="btn primary__btn text-white" type="submit">
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className="user__reviews">
                      {
                        reviews?.map(review => (
                          <div className="reviews__item">
                            <img src={avatar} alt="" />
                            <div className="w-100">
                              <div className="d-flex align-items-center
                          justify-content-between">
                                <div>
                                  <h5>{review.username}</h5>
                                  <p>
                                    {new Date(review.createdAt).toLocaleDateString("en-US", options)}
                                  </p>
                                </div>
                                <span className="d-flex align-items-center">
                                  {review.rating}<i class="ri-star-s-fill"></i>
                                </span>
                              </div>
                              <h6>{review.reviewText}</h6>
                            </div>
                          </div>
                        ))
                      }
                    </ListGroup>
                  </div>
                  {/* {============================tour reviews section end===============================} */}
                </div>
              </Col>
              <Col lg='4'>
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          }
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default TourDetails