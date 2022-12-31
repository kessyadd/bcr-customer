import React from "react";
import Photo1 from "../assets/img/img_photo1.png";
import Photo2 from "../assets/img/img_photo2.png";
import Rate from "../assets/img/Rate.png";
import ArrowLeft from "../assets/img/left_button.png";
import ArrowRight from "../assets/img/right_button.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonial" className="container-fluid py-5 mx-0 px-0">
      <div className="row my-5 mx-0 px-0">
        <div className="col-lg-12 text-center mb-5">
          <h1>Testimonial</h1>
          <h5>Berbagai Review Positif dari Para Pelanggan Kami</h5>
        </div>
        <div className="col-lg-12 mx-0 px-0">
          <OwlCarousel
            className="owl-theme"
            center={true}
            loop={true}
            margin={10}
            nav={true}
            dots={false}
            autoplay={true}
            autoplayTimeout={2000}
            navText={[
              `<img src="${ArrowLeft}"/>`,
              `<img src="${ArrowRight}"/>`,
            ]}
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 2,
              },
            }}
          >
            <div className="item">
              <div className="row testimonial-card flex align-items-center">
                <div className="col-lg-4" id="ph">
                  <img
                    src={Photo1}
                    className="tes-photo"
                    style={{ width: "5em", display: "block" }}
                    alt="user"
                  />
                </div>
                <div className="col-lg-8">
                  <img
                    src={Rate}
                    className="tes-rate"
                    style={{
                      width: "5em",
                      marginTop: "1em",
                      marginBottom: "1em",
                    }}
                    alt="rate"
                  />
                  <p className="text-left">
                    <q className="fw-bold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem numquam assumenda corrupti architecto officiis ab,
                      eveniet quis maiores earum omnis similique illo nostrum
                      magni placeat! Veritatis nemo commodi fugit cum.
                    </q>
                  </p>
                  <h6 className="text-left">John Dee 32, Bromo</h6>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row testimonial-card flex align-items-center">
                <div className="col-lg-4" id="ph">
                  <img
                    src={Photo2}
                    className="tes-photo"
                    style={{ width: "5em", alignSelf: "center" }}
                    alt="user"
                  />
                </div>
                <div className="col-lg-8">
                  <img
                    src={Rate}
                    className="tes-rate"
                    style={{
                      width: "5em",
                      marginTop: "1em",
                      marginBottom: "1em",
                    }}
                    alt="rate"
                  />
                  <p className="text-left">
                    <q className="fw-bold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem numquam assumenda corrupti architecto officiis ab,
                      eveniet quis maiores earum omnis similique illo nostrum
                      magni placeat! Veritatis nemo commodi fugit cum.
                    </q>
                  </p>
                  <h6 className="text-left">John Dee 32, Bromo</h6>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row testimonial-card flex align-items-center">
                <div className="col-lg-4" id="ph">
                  <img
                    src={Photo1}
                    id="tes-photo"
                    style={{ width: "5em", alignSelf: "center" }}
                    alt="user"
                  />
                </div>
                <div className="col-lg-8">
                  <img
                    src={Rate}
                    id="tes-rate"
                    style={{
                      width: "5em",
                      marginTop: "1em",
                      marginBottom: "1em",
                    }}
                    alt="rate"
                  />
                  <p className="text-left">
                    <q className="fw-bold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem numquam assumenda corrupti architecto officiis ab,
                      eveniet quis maiores earum omnis similique illo nostrum
                      magni placeat! Veritatis nemo commodi fugit cum.
                    </q>
                  </p>
                  <h6 className="text-left">John Dee 32, Bromo</h6>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
