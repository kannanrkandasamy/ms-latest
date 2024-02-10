import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../Components/Navbar";

const IKON = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>
      <div className="banner mb-4">
        <iframe
          src="https://player.vimeo.com/video/806813966?background=1"
          style={{
            position: "absolute",
            top: " 50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "177.77777778vh",
            height: "56.25vw",
            boxSizing: "border-box",
            minHeight: "100%",
            minWidth: "100%",
          }}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen=""
          data-ready="true"
          title="..."
        ></iframe>

        <div className="banner-text container-fluid col-lg-11">
          <div>
            <p className="mb-0">Test the Waters. Find Your iKon Today.</p>

            {/* <Row className="g-2 mb-2">
              <Col
                xs={12}
                md={4}
                lg={2}
                className="btn btn-light me-2"
                type="button"
              >
                Explore Models
              </Col>
              <Col
                xs={12}
                md={4}
                lg={2}
                className="btn btn-dark me-2"
                type="button"
              >
                Enquire Now
              </Col>
            </Row> */}
          </div>
        </div>
      </div>

      <div>
        <Container>
          {/* <Row>
            <Col xs={12} md={6}>
              <div className="shadow-c1">
                <div class="card border-0">
                  <div class="row g-0">
                    <div class="col-md-7">
                      <img
                        src="https://ikonboats.com/wp-content/uploads/2023/04/ikon2023-4.jpg"
                        class="img-fluid"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-5">
                      <div class="card-body">
                        <h6 class="text-dark fw-bold fs-5 text-c1">LX20</h6>
                        <p class="fs-6 fw-bold mb-1">
                          Why limit your potential? Upgrade to iKon
                        </p>
                        <p class="card-text mb-1">
                          Length: <span className="fw-bold">20’10”</span>
                        </p>

                        <div class="d-grid gap-2">
                          <button class="btn btn-light" type="button">
                            View Details
                          </button>
                          <button class="btn btn-c1" type="button">
                            Enquire Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="fs-18px bg-white p-2">
                  The LX20 by Ikon Boats is a versatile watercraft, blending
                  cutting-edge design, advanced technology, and exceptional
                  performance for unforgettable aquatic experiences.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="shadow-c1">
                <div class="card border-0">
                  <div class="row g-0">
                    <div class="col-md-7">
                      <img
                        src="https://ikonboats.com/wp-content/uploads/2023/03/3-scaled.jpeg"
                        class="img-fluid"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-5">
                      <div class="card-body">
                        <h6 class="text-dark fw-bold fs-5 text-c1">LX21</h6>
                        <p class="fs-6 fw-bold mb-1">
                          Step up to iKon - Where legacy meets innovation
                        </p>
                        <p class="card-text mb-1">
                          Length: <span className="fw-bold">21’10”</span>
                        </p>

                        <div class="d-grid gap-2">
                          <button class="btn btn-light" type="button">
                            View Details
                          </button>
                          <button class="btn btn-c1" type="button">
                            Enquire Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="fs-18px bg-white p-2">
                  The Ikon Boats LX21 boasts innovative design and
                  state-of-the-art features, delivering thrilling performance
                  and comfort for remarkable boating adventures on any water.
                </p>
              </div>
            </Col>
          </Row> */}
          <Row className="g-3 gradient-c2" style={{ fontFamily: "Roboto" }}>
            <Col xs={12} md={6}>
              <div className="p-3 m-2">
                <div>
                  <p className="text-white fw-bold my-2 mb-0">LX20</p>
                  <h2 className="text-white">World-Class Helm</h2>
                  <table className="mt-3 table table-striped table-hover fw-bold">
                    <tbody>
                      <tr>
                        <th scope="row" className="t-header">
                          Length
                        </th>
                        <td>20’10”</td>
                      </tr>
                      <tr>
                        <th scope="row" className="t-header">
                          Beam
                        </th>
                        <td>98”</td>
                      </tr>
                      <tr>
                        <th scope="row" className="t-header">
                          Fuel Capacity
                        </th>
                        <td>50 Gallons</td>
                      </tr>
                      <tr>
                        <th scope="row" className="t-header">
                          Livewell Capacity
                        </th>
                        <td>35 Gallons</td>
                      </tr>
                      <tr>
                        <th scope="row" className="t-header">
                          Rod Box Length
                        </th>
                        <td>9’8”</td>
                      </tr>
                    </tbody>
                  </table>
                  <span>
                    <a href="##" className="text-white fs-5">
                      Enquire Now{"  "}
                    </a>
                    <i class="fa-solid fa-angles-right text-white"></i>
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="p-3 m-2">
                <img
                  src="https://www.megasails.com/ikonboats/src/images/gallery9%20copy.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
          <br />
          <Row className="g-3 gradient-c3 " style={{ fontFamily: "Roboto" }}>
            <Col xs={12} md={6}>
              <div className="p-3 m-2">
                <div>
                  <p className="text-white fw-bold my-2 mb-0">LX21</p>
                  <h2 className="text-white">Massive Machine Room</h2>
                  <table class="mt-3 table table-striped table-hover fw-bold">
                    <tbody>
                      <tr>
                        <th scope="row" class="t-header">
                          Length
                        </th>
                        <td>21’10”</td>
                      </tr>
                      <tr>
                        <th scope="row" class="t-header">
                          Beam
                        </th>
                        <td>98”</td>
                      </tr>
                      <tr>
                        <th scope="row" class="t-header">
                          Fuel Capacity
                        </th>
                        <td>50 Gallons</td>
                      </tr>
                      <tr>
                        <th scope="row" class="t-header">
                          Livewell Capacity
                        </th>
                        <td>35 Gallons</td>
                      </tr>
                      <tr>
                        <th scope="row" class="t-header">
                          Rod Box Length
                        </th>
                        <td>9’8”</td>
                      </tr>
                    </tbody>
                  </table>
                  <span>
                    <a href="##" className="text-white fs-5">
                      Enquire Now{"  "}
                    </a>
                    <i class="fa-solid fa-angles-right text-white"></i>
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="p-3 m-2">
                <img
                  src="https://www.megasails.com/ikonboats/src/images/gallery9%20copy.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    </>
  );
};

export default IKON;
