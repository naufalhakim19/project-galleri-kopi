import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../img/carousel_1.png";
import carousel2 from "../img/carousel_2.png";
import carousel3 from "../img/carousel_3.png";
import React from "react";
import Carousel2 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Menu1 from "../img/ourBeans.jpg";
import Menu2 from "../img/coffeMenu.jpg";
import Menu3 from "../img/noncoffeeMenu.jpg";
import Menu4 from "../img/blackteaMenu.jpg";
import logo_about from "../img/logo_about.png";
import Gallery_photo1 from "../img/behind_bar.jpg";
import Gallery_photo2 from "../img/blacktea_hand.jpg";
import Gallery_photo3 from "../img/customer_working.jpg";
import Gallery_photo4 from "../img/machine_coffee_and_figure.jpg";
import Gallery_photo5 from "../img/share_blacktea_Friday.jpg";
import Gallery_photo6 from "../img/secFloor.jpg";
import Sosmed_logo1 from "../img/ig_logo.png";
import Sosmed_logo2 from "../img/wa_logo.png";

import "../style/Homepage.css";

function HomePage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="wrapper">
      <Carousel className="carousel" fade>
        <Carousel.Item>
          <img
            className="d-block w-100 bg-color-black"
            src={carousel1}
            alt="First slide"
          />
          <h1 className="TextCentered"></h1>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bg-color-black"
            src={carousel2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bg-color-black"
            src={carousel3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <section id="menu">
        <div className="container">
          <div className="OurMenu py-5">
            <h5> WE ARE SERVED WHOLEHEARTEDLY </h5>
            <h1>OUR MENU</h1>

            <hr className="py-2"></hr>
          </div>

          <div className="product">
            <Carousel2 responsive={responsive}>
              <div>
                <img src={Menu1}></img>
                <h4>MOCKTAIL</h4>
                <p>
                  {" "}
                  Our signatures are <b>Coffee Mocktail</b> that has a fresh
                  impression, for bestseller our moktail are{" "}
                  <b>Auntumn and Winter. </b>
                  for other moktail are Cloudy, Sunset, and Aurora.
                </p>
              </div>
              <div>
                <img src={Menu2}></img>
                <h4>COFFEE</h4>
                <p>
                  {" "}
                  Our signatures are{" "}
                  <b>
                    Abstract Coffee, Natural Coffee, and Classic Coffee.
                  </b>{" "}
                  for other coffees are Cappuccino, Americano, Long Black,
                  Vanilla latte. For manual brew are Javanesse, V60, and Vietnam
                  drip.
                </p>
              </div>
              <div>
                <img src={Menu3}></img>
                <h4>NON COFFEE</h4>
                <p>
                  {" "}
                  We serve a variety of flavors. Taro, Banana, Avocado, Green
                  Tea, and Chocolate. Our best seller is <b>Redvelvet.</b>
                </p>
              </div>
              <div>
                <img src={Menu4}></img>
                <h4>TEA</h4>
                <p>
                  {" "}
                  We serve two kinds of tea. Black tea and White tea. Our
                  signatures for tea is <b>White tea</b>
                </p>
              </div>
              <div>
                <img src={Menu1}></img>
                <h4>OUR BEANS</h4>
                <p>
                  {" "}
                  We use Arabica and Robusta. For special coffee beans for
                  manual brew are single origin from the nearest or{" "}
                  <b>famous roastery.</b>
                </p>
              </div>
            </Carousel2>
          </div>
        </div>
      </section>

      <section id="About">
        <div className="container-fluid">
          <div className="container p-5">
            <div className="row">
              <div className="col-6 leftabout">
                <h1>ABOUT US</h1>

                <p className="py-4">
                  Galleri Kopi was created in 2021, a themed coffee shop with a
                  minimalist and aesthetic place. Our location is in Galaxy,
                  South Bekasi. We have different characteristics from the
                  others, working closely with other companies in iphone service
                  and australian food. The iphone service called{" "}
                  <b>ICarethis</b> is located in the 2nd floor.
                </p>
              </div>
              <div className="col-6 rightabout">
                <img src={logo_about}></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="maps">
        <div className="container visitUs py-5">
          <h5>WE ARE DELIGHTED WHEN YOU VISIT</h5>
          <h1>VISIT US</h1>
          <hr />
        </div>
        <div className="frame">
          <iframe src="https://maps.google.com/maps?q=galleri%20kopi%20jakasetia&t=&z=19&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
      </section>

      <section id="galleryUS">
        <div className="gallery py-5">
          <div className="galleryTitle">
            <h5>THAT MOMENT MEANT A LOT TO US</h5>
            <h1>GALLERY</h1>
          </div>
        </div>
        <div className="container py-5">
          <table className="galleryTable">
            <tr>
              <td>
                <img
                  src={Gallery_photo1}
                  width="300px"
                  height="300px"
                  className="image"
                ></img>
                <h5>BAR</h5>
              </td>
              <td>
                <img
                  src={Gallery_photo2}
                  width="300px"
                  height="300px"
                  className="image"
                ></img>
                <h5>BLACKTEA</h5>
              </td>
              <td>
                <img
                  src={Gallery_photo3}
                  width="300px"
                  height="300px"
                  className="image"
                ></img>
                <h5>WORKING SPACE</h5>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={Gallery_photo4}
                  width="300px"
                  height="300px"
                  className="image"
                ></img>
                <h5>MACHINE COFFEE</h5>
              </td>
              <td>
                <img
                  src={Gallery_photo5}
                  width="300px"
                  height="300px"
                  className="image"
                ></img>
                <h5>SHARE BLACKTEA ON FRIDAY</h5>
              </td>
              <td>
                <img
                  src={Gallery_photo6}
                  width="300px"
                  height="300px"
                  className="image"
                ></img>
                <h5>SECOND FLOOR</h5>
              </td>
            </tr>
          </table>
        </div>
      </section>

      <section id="contact">
        <div className="contact">
          <div className="container-fluid2 cc py-3">
            <h5 className="m-4 text1">GET IN TOUCH WITH US</h5>
            <h1>CONTACT</h1>
          </div>

          <div className="container cc2">
            <table className="tableContact">
              <tr>
                <td>
                  <img src={Sosmed_logo1} alt=""></img>
                </td>
                <td>
                  <img src={Sosmed_logo2} alt=""></img>
                </td>
              </tr>
              <tr>
                <td>
                  <h2>Instagram</h2>
                </td>
                <td>
                  <h2>WhatsApps</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h5>
                    <a href="https://www.instagram.com/gallerikopi/">
                      @gallerikopi
                    </a>
                  </h5>
                </td>
                <td>
                  <h5>
                    <a href="https://wa.me/6282114121534?text=Hallo%2C%20Kami%20dari%20Galleri%20Kopi%20siap%20untuk%20melayani%20anda!">
                      +6282114121534
                    </a>
                  </h5>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <br />
      <div className="footer">
        <label>?? 2022 All right reserved.</label>
      </div>
    </div>
  );
}
export default HomePage;
