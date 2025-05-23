import Link from 'next/link';
import React from 'react';

const ContactAreaOne = () => {
  return (
    <>
      {/* ========================= contact Area One start =========================*/}
      <div className="contact-area">
        <div className="container">
          <div className="contact-inner-1">
            <img
              className="top_image_bounce animate-img-1"
              src="assets/img/banner/2.png"
              alt="img"
            />
            <img
              className="top_image_bounce animate-img-2"
              src="assets/img/about/6.png"
              alt="img"
            />
            <div className="row">
              <div
                className="col-lg-8"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <img className="w-100" src="assets/img/bg/4.png" alt="img" />
              </div>
              <div
                className="col-lg-4 wow animated fadeInRight"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="section-title mb-0">
                  <h6 className="sub-title">CONNECT WITH US</h6>
                  <h2 className="title">
                    Powering Your <span>Connectivity</span> Needs
                  </h2>
                  <p className="content">
                    Get in touch for 5G solutions, fiber internet inquiries, or enterprise network consultations.
                    Our experts are ready to assist you 24/7.
                  </p>
                  <form className="mt-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <select className="form-select">
                            <option>Service Type</option>
                            <option>5G Plans</option>
                            <option>Fiber Internet</option>
                            <option>Business Solutions</option>
                            <option>Technical Support</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <textarea placeholder="Your Connectivity Requirements" defaultValue={''} />
                        </div>
                      </div>
                      <div className="col-12">
                        <Link
                          className="btn btn-black mt-0 w-100 border-radius-5"
                          href="#"
                        >
                          Request Consultation
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========================= contact-inner One end =========================*/}
    </>
  );
};

export default ContactAreaOne;
